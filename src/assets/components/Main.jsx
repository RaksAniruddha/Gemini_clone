import React, { useContext } from 'react'
import "./Main.css"
import {assets} from "../assets.js"
import {Context} from "../../context/Context.jsx"

function Main() {
    const {onsent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
      <div className="main">
          <div className="nav">
              <p>Gemni</p>
              <img src={assets.user_icon} alt=''/>
          </div>
          <div className="main-container">
                {!showResult?
                <>
                    <div className="greet">
                        <p><span>Hello, Dev.</span></p>
                        <p>How can I Help You Today?</p>
                    </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on upcoming road trip</p>
                        <img src={assets.compass_icon} alt=''/>
                    </div>
                    <div className="card">
                        <p>Breafly summerise this concept:urban planning</p>
                        <img src={assets.bulb_icon} alt=''/>
                    </div>
                    <div className="card">
                        <p>Brainstrom team bonding activites for our work retreat</p>
                        <img src={assets.message_icon} alt=''/>
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt=''/>
                    </div>
                </div>
                </>:<div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading?<div className='loader'>
                                  <hr />
                                  <hr />
                                  <hr />
                            </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                        </div>
                    </div>}
                <div className="main-bottom">
                    <div className="scearch-box">
                        <input onInput={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a promt Here'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon}alt="" />
                            {input?<img  onClick={()=>onsent()} src={assets.send_icon}alt="" />:""}
                        </div>
                    </div>
                    <p className="bottom-info">
                            Gemni may display inaccurate info,including about people,so double check its response. Your privacy and Gemni Apps
                    </p>
                </div>
          </div>
      </div>
  )
}

export default Main