import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from "../Firebase";
import "./Chat.css"
import Message from './Message';

function Chat() {
    const { roomId } = useParams(); 
    const [roomDetails,setRoomDetails]=useState(null);
    const [roomMessages,setRoomMessages]=useState([]);

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot((snapshot)=>{
                setRoomDetails(snapshot.data());
            })
        }

        db.collection('rooms').doc(roomId).collection('messages')
        .orderBy('timestamp','asc').onSnapshot((snapshot)=>{
            setRoomMessages(snapshot.docs.map(doc=>
                doc.data()))
        })

    },[roomId])

    console.log(roomDetails);
    console.log(roomMessages);


    return (
        <div className="chat">
            <div className="chatHeader">
                <div className="chatHeaderLeft">
                    <h4 className="chatChannelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chatHeaderRight">
                    <InfoOutlinedIcon />Details
                </div>
            </div>
            <div className="chatMessages">
                {roomMessages.map(({message,timestamp,user,userImage})=>
                    <Message message={message} 
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    />
                )}
            </div>
        </div>
    )
}

export default Chat
