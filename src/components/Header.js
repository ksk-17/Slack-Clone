import { Avatar } from '@mui/material';
import React from 'react';
import "./Header.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from '../StateProvider'

function Header() {
    const[{user}] = useStateValue();
    return (
        <div className="header">
            <div className="headerLeft">
                <Avatar src={user?.displayName} src={user?.photoUrl} />
                <AccessTimeIcon />
            </div>
            <div className="headerSearch">
                <SearchIcon />
                <input placeholder="Search Waste Fellow"></input>
            </div> 
            <div className="headerRight">
                <HelpOutlineIcon />
            </div>  
        </div>
    )
}

export default Header;
