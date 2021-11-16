import React, {useEffect, useState} from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import CommentIcon from '@mui/icons-material/Comment';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from "../Firebase";
import { useStateValue } from '../StateProvider'

function Sidebar() {
    const [channels,setChannels]=useState([]);
    const[{user}] = useStateValue();

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot=>(
            setChannels(
                snapshot.docs.map(doc=>({
                    id:doc.id,
                    name:doc.data().name,
                }))
            )
        ))
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarHeader">
                <div className="sidebarInfo">
                    <h2>Waste Fellow</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={CommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption="True"/>

            {channels.map(channel=>(
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}
            

        </div>
    )
}

export default Sidebar
