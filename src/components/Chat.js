import React from 'react'
import {useParams} from "react-router-dom";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./Chat.css"

function Chat() {
    const { roomId } = useParams();

    return (
        <div className="chat">
            <div className="chatHeader">
                <div className="chatHeaderLeft">
                    <h4 className="chatChannelName">
                        <strong>#{roomId}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chatHeaderRight">
                    <InfoOutlinedIcon />Details
                </div>
            </div>
        </div>
    )
}

export default Chat
