import React, { useContext, useEffect, useState } from 'react';
import ind from '../../assets/logos/India.png'
import pak from '../../assets/logos/Pakistan.png'
import nz from '../../assets/logos/New-Zealand.png'
import eng from '../../assets/logos/England.png'
import aus from '../../assets/logos/Australia.png'
import ban from '../../assets/logos/Bangladesh.png'
import sf from '../../assets/logos/South-Africa.png'
import afg from '../../assets/logos/Afghanistan.png'
import { NavLink } from 'react-router-dom';
import { tossContext } from '../../Contexts/tossContext';
import { teamContext } from '../../Contexts/teamContext';
function TeamSelection() {
    const [userT,setUserT] = useState("IND")
    const [compT,setCompT] = useState("PAK")

    const [msg,setMsg] = useState("")
    const [disableContinue,setDisableContinue] = useState(true)

    const {setUserTeam,setCompTeam} = useContext(teamContext)

    const handleContinue = () =>{
        setUserTeam(userT)
        setCompTeam(compT)
    }
    useEffect(()=>{
        if(userT==compT && userT!=null){
            setMsg("Both teams cannot be same!")
            setDisableContinue(true)
        }
        else{
            setMsg("")
            setDisableContinue(false)
        }
    },[userT,compT])


    return (
        <>
            <div className="flex h-screen w-screen flex-col items-center justify-evenly bg-white">
                <div className="flex w-full items-center justify-center gap-10">
                    
                    <div className="flex h-40 w-full  flex-row items-center justify-evenly text-2xl">
                        <button className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110 disabled:cursor-not-allowed"  onClick={(e)=>{
                            
                            setUserT("IND")
                            
                            }}>
                            <div >
                                <img src={ind} alt=""/></div>
                            <div>IND</div>
                        </button>
                        <button className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110 disabled:cursor-not-allowed"  onClick={(e)=>{
                            
                            setUserT("PAK")
                            
                            }}>
                            <div><img src={pak} alt="" /></div>
                            <div>PAK</div>
                        </button>
                        <button className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110 disabled:cursor-not-allowed"  onClick={(e)=>{
                            
                            setUserT("AUS")
                            
                            }}>
                            <div><img src={aus} alt="" /></div>
                            <div>AUS</div>
                        </button>
                        <button className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110 disabled:cursor-not-allowed"  onClick={(e)=>{
                            
                            setUserT("NZ")
                            
                            }}>
                            <div><img src={nz} alt="" /></div>
                            <div>NZ</div>
                        </button>
                        <button className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110 disabled:cursor-not-allowed"  onClick={(e)=>{
                            
                            setUserT("SF")
                            
                            }}>
                            <div><img src={sf} alt="" /></div>
                            <div>SF</div>
                        </button>
                        <button className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110 disabled:cursor-not-allowed"  onClick={(e)=>{
                            
                            setUserT("ENG")
                            
                            }}>
                            <div><img src={eng} alt="" /></div>
                            <div>ENG</div>
                        </button>
                        <button className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110 disabled:cursor-not-allowed"  onClick={(e)=>{
                            
                            setUserT("AFG")
                            
                            }}>
                            <div><img src={afg} alt="" /></div>
                            <div>AFG</div>
                        </button>
                        <button className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110 disabled:cursor-not-allowed"  onClick={(e)=>{
                            
                            setUserT("BAN")
                            
                            }}>
                            <div><img src={ban} alt="" /></div>
                            <div>BAN</div>
                        </button>
                    </div>
                </div>
                <div className="font-mono text-2xl font-bold">YOU : {userT}</div>
                <div className="font-mono text-3xl font-bold">VS</div>
                    <div className="font-mono text-2xl font-bold">COMP : {compT}</div>
                <div className="flex w-full items-center justify-center gap-10">
                    <div className="flex h-40 w-full flex-row items-center justify-evenly text-2xl">
                        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110" onClick={(e)=>{
                            setCompT("IND")
                            }}>
                            <div><img src={ind} alt="" /></div>
                            <div>IND</div>
                        </div>
                        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110" onClick={(e)=>{
                            setCompT("PAK")
                            }}>
                            <div><img src={pak} alt="" /></div>
                            <div>PAK</div>
                        </div>
                        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110" onClick={(e)=>{
                            setCompT("AUS")
                            }}>
                            <div><img src={aus} alt="" /></div>
                            <div>AUS</div>
                        </div>
                        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110" onClick={(e)=>{
                            setCompT("NZ")
                            }}>
                            <div><img src={nz} alt="" /></div>
                            <div>NZ</div>
                        </div>
                        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110" onClick={(e)=>{
                            setCompT("SF")
                            }}>
                            <div><img src={sf} alt="" /></div>
                            <div>SF</div>
                        </div>
                        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110" onClick={(e)=>{
                            setCompT("ENG")
                            }}>
                            <div><img src={eng} alt="" /></div>
                            <div>ENG</div>
                        </div>
                        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110" onClick={(e)=>{
                            setCompT("AFG")
                            }}>
                            <div><img src={afg} alt="" /></div>
                            <div>AFG</div>
                        </div>
                        <div className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center hover:scale-110" onClick={(e)=>{
                            setCompT("BAN")
                            }}>
                            <div><img src={ban} alt="" /></div>
                            <div>BAN</div>
                        </div>
                    </div>
                </div>
                <div className='text-lg text-red-600'>{msg}</div>
                    <button onClick={handleContinue}>
                    <NavLink
                        to='/toss'  className="cursor-pointer rounded-2xl bg-orange-500 p-4 text-3xl font-black text-white hover:scale-110 hover:border-4 hover:border-orange-300 border-4 border-white disabled:cursor-not-allowed " hidden={disableContinue}
                    >Continue
                    </NavLink >
                    </button>

            </div>
            

        </>
    );
}

export default TeamSelection;
