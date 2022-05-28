/* ------ IMPORTING FILES ------- */
import '../css/room.css'
import React, { useRef, useEffect ,  useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col,Row } from 'react-bootstrap';

const Room = () => {

// variables for different functionalities of video call

    const userVideo = useRef();
    const partnerVideo = useRef();
    const peerRef = useRef();
    const socketRef = useRef();
    const otherUser = useRef();
    const userStream = useRef();
    const senders = useRef([]);
    const sendChannel = useRef();
    const [text, setText] = useState("");
    const [messages, setMessages] = useState([]);
    var localStream;

    const { roomID } = useParams();

    useEffect(() => {

         // asking for audio and video access
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {

             // streaming the audio and video
            // storing the local stream

            userVideo.current.srcObject = stream;
            userStream.current = stream;
            localStream = stream;

            document.getElementById('stop-s').style.display = 'none';
            
            // grabbing the room id from the url and then sending it to the socket io server
            socketRef.current = io.connect("/");
            socketRef.current.emit("join room",roomID);

            // user a is joining 
            socketRef.current.on('other user', userID => {
                callUser(userID);
                otherUser.current = userID;
            });

            // user b is joining
            socketRef.current.on("user joined", userID => {
                otherUser.current = userID;
            });

             // calling the function when made an offer
            socketRef.current.on("offer", handleRecieveCall);
             // sending the answer back to socket
            socketRef.current.on("answer", handleAnswer);
            // joining the user after receiving offer
            socketRef.current.on("ice-candidate", handleNewICECandidateMsg);
        });

       // calling user a ( who created the room )
        function callUser(userID) {

            // taking the peer ID
            peerRef.current = createPeer(userID);

             // streaming the user a stream
            // giving access to our peer of our individual stream
           // storing all the objects sent by the user into the senders array

          userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));

           // creating a data channel for chatting
        sendChannel.current = peerRef.current.createDataChannel("sendChannel");
        sendChannel.current.onmessage = handleReceiveMessage;  
          
        }

         // recieving the messages from the peer
    function handleReceiveMessage(e) {
        setMessages(messages => [...messages, {yours: false, value: e.data }]);
    }

    // user id of the person we are trying to call ( user b )
    // user b recieving the offer

    function createPeer(userID) {
        const peer = new RTCPeerConnection({

           /*  iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' },
                { urls: 'stun:stun3.l.google.com:19302' },
                { urls: 'stun:stun4.l.google.com:19302' },
                {
                    urls: 'turn:numb.viagenie.ca',
                    credential: '',
                    username: ''
                },
            ] */
             iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                },
                {
                    urls: 'turn:numb.viagenie.ca',
                    credential: 'muazkh',
                    username: 'webrtc@live.com'
                },
            ] 
        });

        peer.onicecandidate = handleICECandidateEvent;
        peer.ontrack = handleTrackEvent;
        peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

        return peer;
    }

     // ------ CREATING THE PEER TO PEER CONNECTION --------

    // making the call
    // when the actual offer is created, it is then sent to the other user

    function handleNegotiationNeededEvent(userID) {
        peerRef.current.createOffer().then(offer => {

              // setting the local description from the users offer
            return peerRef.current.setLocalDescription(offer);
        }).then(() => {

              // the person we are trying to make the offer to
            const payload = {
                target: userID,
                caller: socketRef.current.id,
                sdp: peerRef.current.localDescription
            };
            socketRef.current.emit("offer", payload);
        }).catch(e => console.log(e));
    }

          // recieving the call
        function handleRecieveCall(incoming) {
            peerRef.current = createPeer();

            // chatting
            peerRef.current.ondatachannel = (event) => {
            sendChannel.current = event.channel;
            sendChannel.current.onmessage = handleReceiveMessage;
            };
        
             // remote description
            const desc = new RTCSessionDescription(incoming.sdp);

             // setting remote description and attaching the stream
            peerRef.current.setRemoteDescription(desc).then(() => {
                userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
            }).then(() => {

             // creating the answer  
                return peerRef.current.createAnswer();
            }).then(answer => {

                 // setting local description
                return peerRef.current.setLocalDescription(answer);
            }).then(() => {

                 // sending data back to the caller
                const payload = {
                    target: incoming.caller,
                    caller: socketRef.current.id,
                    sdp: peerRef.current.localDescription
                }
                socketRef.current.emit("answer", payload);
            })
    
           
        }
    
        

    }, []);

  // function to handle the answer which the user a (who created the call) is receiving    
    function handleAnswer(message) {
        const desc = new RTCSessionDescription(message.sdp);
        peerRef.current.setRemoteDescription(desc).catch(e => console.log(e));

    }

     // ------ END OF THE PEER TO PEER CONNECTION --------


    // handling the ice candidates
    function handleICECandidateEvent(e) {
        if (e.candidate) {
            const payload = {
                target: otherUser.current,
                candidate: e.candidate,
            }
            socketRef.current.emit("ice-candidate", payload);
        }
    }

     // swapping candidates until they reach on an agreement
    function handleNewICECandidateMsg(incoming) {
        const candidate = new RTCIceCandidate(incoming);

        peerRef.current.addIceCandidate(candidate)
            .catch(e => console.log(e));
    }

    // receiving the remote stream of peer and attaching the video of partner
    function handleTrackEvent(e) {
        partnerVideo.current.srcObject = e.streams[0];
    };


     // Toggle Video
     let isVideo = true;
     let colorVideo = '#bc1823';
     function toggleVideo() {
         document.getElementById('avv').style.backgroundColor = colorVideo;
         if (isVideo) {
             colorVideo = '#302b70';
         } else {
             colorVideo = '#bc1823';
         }
         isVideo = !isVideo;
         userStream.current.getVideoTracks()[0].enabled = isVideo;
     }
 
     // Toggle Audio
     let isAudio = true;
     let colorAudio = '#bc1823';
     function toggleAudio() {
         document.getElementById('av').style.backgroundColor = colorAudio;
         if (isAudio) {
             colorAudio = '#302b70';
         } else {
             colorAudio = '#bc1823';
         }
         isAudio = !isAudio;
         userStream.current.getAudioTracks()[0].enabled = isAudio;
     }
 
     // Hanging up the call
     function hangUp() {
         userStream.current.getVideoTracks()[0].enabled = false;
         window.location.replace("/CreateRoom");
     }
 
     // Sharing the Screen
     function shareScreen() {
         // asking for the display media along with the cursor movement of the user sharing the screen
         navigator.mediaDevices.getDisplayMedia({ cursor: true }).then(stream => {
             const screenTrack = stream.getTracks()[0];
 
             // finding the track which has a type "video", and then replacing it with the current track which is playing
             document.getElementById('ss').style.backgroundColor = '#bc1823';
             senders.current.find(sender => sender.track.kind === 'video').replaceTrack(screenTrack);
             
             document.getElementById('ss').style.display = 'none';
             document.getElementById('stop-s').style.backgroundColor = '#bc1823';
             document.getElementById('stop-s').style.display = 'inline';
 
             // when the screenshare is turned off, replace the displayed screen with the video of the user
             screenTrack.onended = function() {
                 senders.current.find(sender => sender.track.kind === "video").replaceTrack(userStream.current.getTracks()[1]);
                 document.getElementById('ss').style.backgroundColor = '#302b70';
             }
         });
     }
 
     // stopping screen share
     function stopShare() {
         senders.current.find(sender => sender.track.kind === "video").replaceTrack(userStream.current.getTracks()[1]);
         document.getElementById('stop-s').style.display = 'none';
         document.getElementById('ss').style.display = 'inline';
         document.getElementById('ss').style.backgroundColor = '#302b70';
     }
 
     // Copy the Url
     function getUrl() {
         var inputc = document.body.appendChild(document.createElement("input"));
         inputc.value = window.location.href;
         inputc.focus();
         inputc.select();
         document.execCommand('copy');
         inputc.parentNode.removeChild(inputc);
         alert("URL Copied.");
     }
 
     // handling text change when recieved
     function handleChange(e) {
         setText(e.target.value);
     }
 
     // sending message to the peer
     function sendMessage(e) {
         sendChannel.current.send(text);
         setMessages(messages => [...messages, { yours: true, value: text }]);
         setText("");
     }

     
    // differentiating messages from user a and user b
    function renderMessage(message, index) {
        if (message.yours) {
            return (
                <div className="myRow" key={index}>
                    <div className="myMSG">
                        {message.value}
                    </div>
                </div>
            )
        }

        return (
            <div className="partnerRow" key={index}>
                <div className="partnerMSG">
                    {message.value}
                </div>
            </div>
        )
    }

    return (
        <div className="box">   
            <Row>
                <Col sm={12} md={9}>
                    <div id = "video-box">
                        <video id="user" className="oneVideo" muted autoPlay ref = {userVideo} />
                        <video id="peer" className="oneVideo" autoPlay ref = {partnerVideo} />
                    </div>
                
                    <div id ="button-box">
                        <button id="cp" onClick = {getUrl}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
                        <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
                        </svg>
                        </button>
                        <button id="av" onClick = {toggleAudio}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic-mute" viewBox="0 0 16 16">
                        <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3z"/>
                        <path d="m9.486 10.607-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"/>
                        </svg>
                        </button>
                        <button id="end" onClick = {hangUp}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                         </button>
                        <button id="avv" onClick = {toggleVideo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                        </svg>
                        </button>
                        <button id="ss" onClick = {shareScreen}> 
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                        </svg>

                        </button>
                        <button id="stop-s" onClick = {stopShare} >
                            
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
                        </svg>
      
                       </button>
                    </div>

                </Col>

                <Col className="chat" sm={12} md={3}>
                    <div className="chatBox">
                        <div className="row text-area">
                            {messages.map(renderMessage)}
                        </div>
                        
                        <div className="row text-box">
                            <textarea className="text" value={text} onChange={handleChange} placeholder="Say Something..."/>
                            <button id="send" onClick={sendMessage}>Send</button>
                        </div>

                    </div>
                </Col>
            </Row>         
                        
        </div>        
    );
};

export default Room;