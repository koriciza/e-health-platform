/* ------ IMPORTING FILES ------- */
import '../css/room.css'
import '../css/roomGroup.css'
import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import Peer from "simple-peer";

// Streaming Video of the user
const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <video class="groupVideo" playsInline autoPlay ref={ref} />
    )
}

// setting the constraints of video box
const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
};

const RoomGroup = (props) => {

    // variables for different functionalities of video call
    const [peers, setPeers] = useState([]);
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const userStream = useRef();
    const roomID =   useParams();

    useEffect(() => {
        socketRef.current = io.connect("/");
        
        // asking for audio and video access
        navigator.mediaDevices.getUserMedia({ audio: true, video: videoConstraints }).then(stream => {

            // streaming the audio and video
            userVideo.current.srcObject = stream;
            userStream.current = stream;
            
            socketRef.current.emit("join room group", roomID);

            // getting all user for the new user joining in
            socketRef.current.on("all users", users => {
                const peers = [];

                // adding the new user to the group
                users.forEach(userID => {
                    const peer = createPeer(userID, socketRef.current.id, stream);
                    peersRef.current.push({
                        peerID: userID,
                        peer,
                    })
                    peers.push({
                        peerID: userID,
                        peer,
                    });
                })
                setPeers(peers);
            })

            // sending signal to existing users after new user joined
            socketRef.current.on("user joined", payload => {
                const peer = addPeer(payload.signal, payload.callerID, stream);
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                })

                const peerObj = {
                    peer,
                    peerID: payload.callerID
                }

                setPeers(users => [...users, peerObj]);
            });

            // exisisting users recieving the signal
            socketRef.current.on("receiving returned signal", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.id);
                item.peer.signal(payload.signal);
            });

            // handling user disconnecting
            socketRef.current.on("user left", id => {
                // finding the id of the peer who just left
                const peerObj = peersRef.current.find(p => p.peerID === id);
                if (peerObj) {
                    peerObj.peer.destroy();
                }

                // removing the peer from the arrays and storing remaining peers in new array
                const peers = peersRef.current.filter(p => p.peerID !== id);
                peersRef.current = peers;
                setPeers(peers);
            })
        })
    }, []);

    // creating a peer object for newly joined user
    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });       

        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        return peer;
    }

    // adding the newly joined peer to the room
    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })

        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        })

        peer.signal(incomingSignal);
        return peer;
    }

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
        window.location.replace("/CreateRoomGroup");
    }

    return (
        <div class="row group-call">
            <div col="col-12">
                <div class="videos">
                    <video class="groupVideo" muted ref={userVideo} autoPlay playsInline />
                    {peers.map((peer) => {
                        return (
                            <Video class="groupVideo" key={peer.peerID} peer={peer.peer} />
                        );
                    })}
                </div>

                <div id ="button-box">
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
                </div> 

                
            </div>
        </div>
           

        
    );
};

export default RoomGroup;