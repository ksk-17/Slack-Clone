import React from 'react'
import { useHistory } from 'react-router'
import "./SidebarOption.css"
import db from "../Firebase";

function SidebarOption({Icon,title,id,addChannelOption}) {
    const history = useHistory();
    const selectChannel = () => {
        if(id){
            history.push(`/room/${id}`);
        } else {
            history.push(title);
        }
    }

    const addChannel = () =>{
        const channelName = prompt('Please enter the name of the Channel');

        if(channelName){
            db.collection('rooms').add({
                name:channelName,
            })
        }
    }

    return (
        <div className="sidebarOption" onClick={addChannelOption? addChannel : selectChannel}>
            {Icon ? <div className="sidebarOptionIcon">
                    <Icon />
                </div>:
                (<div  className="sidebarOptionHash">
                    <h3>#</h3>
                </div>)}
           <h3>{title}</h3>
        </div>
    )
}

export default SidebarOption
