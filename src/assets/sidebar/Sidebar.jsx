import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from "../assets"
import { Context } from '../../context/Context';
const Sidebar = () => {
    const [extented,setExtended]= useState(false);
    const {onsent,prevPromt,setRecentPromt,newChat}= useContext(Context);
    const  loadPromt= async(prompt)=>{
           setRecentPromt(prompt);
           await onsent(prompt);
    }
  return (
    <div className='sidebar'>
         <div className="top">
              <img onClick={()=>setExtended(!extented)} className="menu" src={assets.menu_icon} alt=""/>
              <div onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt=""/>
                    {extented?<p>New Chat</p>:""}
              </div>
              {extented? <div className="recent">
                   <p className="recent-title">Recent</p>
                   {prevPromt.map((item,index)=>{
                        return(
                         <div key={index}>
                              <div onClick={()=>loadPromt(item)} className="recent-entry">
                                   <img src={assets.message_icon} alt=""/>
                                   <p>{item.slice(0,18)}...</p>
                              </div>
                         </div>
                        )
                   })}
              </div>:null}
         </div>
         <div className="bottom">
               <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt=''/>
                    {extented?<p>Help</p>:""}
               </div>
               <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt=''/>
                    {extented?<p>Activity</p>:""}
               </div>
               <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt=''/>
                    {extented?<p>Settings</p>:""}
               </div>
         </div>
    </div>
  )
}

export default Sidebar