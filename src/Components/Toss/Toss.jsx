import React, { useContext, useEffect, useState } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import usePreventBackNavigation from '../../Hooks/usePreventBackNavigation';
import generateRandom from '../../Hooks/generateRandom';
import { tossContext } from '../../Contexts/tossContext';
import TossProvider from '../../Contexts/TossProvider';
import { teamContext } from '../../Contexts/teamContext';

function Toss() {
    //0->Heads
    //1->tails
    usePreventBackNavigation();
    const [coinChoosed, setCoinChoosed] = useState(false)
    const [clickCounter, setClickCounter] = useState(0)
    const [coin, setCoin] = useState("Heads")
    const [coinValue, setCoinValue] = useState(0)
    const [userWin, setUserWin] = useState(false)
    const [compWin, setCompWin] = useState(false)
    const [tossOver, setTossOver] = useState(false)
    const [userDecided, setUserDecided] = useState(false)
    const [userWill, setUserWill] = useState("bat")
    const [compWill, setCompWill] = useState("bowl")
    const {setTossWinner,setTossDecision} = useContext(tossContext)
    const [tossWin,setTossWin] = useState("")
    const [tossDec,setTossDec] = useState("")
    const {UserTeam, CompTeam } = useContext(teamContext)


    const handleTossContext = () => {
        if (!setTossWinner || !setTossDecision) {
          console.error("setTossWinner or setTossDecision is not available");
          return;
        }
      
        if (userWin) {
          setTossWinner(UserTeam);
          setTossDecision(userWill);
        } else if (compWin) {
          setTossWinner(CompTeam);
          setTossDecision(compWill);
        }
      };
      

    useEffect(() => {
        console.log("Flip Called");
        if (clickCounter != 0) {
            if (coinValue == generateRandom(1, 0)) {
                setUserWin(true)
            }
            else {
                if(generateRandom(1, 0)==1){
                    setCompWill("bat")
                }
                else{
                    setCompWill("bowl")
                }
                setCompWin(true)
                setTossOver(true)
            }
        }
    }, [clickCounter])


    return (
        <>
            <div className="flex h-screen w-screen flex-col items-center justify-center gap-20">
                <div className="flex flex-row gap-20">
                    <button className="flex h-30 w-30 cursor-pointer items-center justify-center rounded-full bg-amber-500 font-serif text-6xl font-bold text-yellow-700 hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.6)] disabled:cursor-not-allowed" disabled={coinChoosed} value={0} onClick={(e) => {
                        // flipCoin
                        setClickCounter(clickCounter + 1)
                        setCoinValue(Number(e.target.value))
                        setCoin("Heads")
                        setCoinChoosed(true)
                    }}>H</button>
                    <button className="flex h-30 w-30 cursor-pointer items-center justify-center rounded-full bg-amber-500 font-serif text-6xl font-bold text-yellow-700 hover:shadow-[0_0_15px_5px_rgba(255,223,0,0.6)] disabled:cursor-not-allowed" disabled={coinChoosed} value={1} onClick={(e) => {
                        // flipCoin
                        setClickCounter(clickCounter + 1)
                        setCoinValue(Number(e.target.value))
                        setCoin("Tails")
                        setCoinChoosed(true)
                    }}>T</button>
                </div>
                <div className="flex items-center flex-col gap-5" hidden={!userWin}>
                    <div className="text-lg font-bold text-green-500 ">It's {coin} : </div>
                    <div className="flex flex-row gap-10">
                        <button className="bg-orange-500 p-2 rounded-2xl text-white font-black cursor-pointer hover:border-4 hover:border-orange-300 border-4 border-white disabled:cursor-not-allowed" disabled={userDecided} onClick={() => {
                            setUserWill("bat")
                            setTossWin("user")
                            setUserDecided(true)
                            setTossOver(true)
                        }}>Batting</button>
                        <button className="bg-orange-500 p-2 rounded-2xl text-white font-black cursor-pointer hover:border-4 hover:border-orange-300 border-4 border-white disabled:cursor-not-allowed" disabled={userDecided} onClick={() => {
                            setUserWill("bowl")
                            setTossWin("user")
                            setUserDecided(true)
                            setTossOver(true)
                        }}>Bowling</button>
                    </div>
                    <div className="text-lg font-bold text-green-500 " hidden={!userDecided}>{UserTeam}(You) won the toss and decided to {userWill} first</div>
                </div>
                <div className="flex items-center flex-col" hidden={!compWin}>
                    <div className="text-lg font-bold text-red-500 ">It's {coin} : </div>
                    <div className="text-lg font-bold text-red-500 ">{CompTeam} won the toss and decided to {compWill} first</div>
                </div>
                <button className="cursor-pointer rounded-2xl bg-orange-500 p-4 text-3xl font-black text-white hover:scale-110 hover:border-4 hover:border-orange-300 border-4 border-white " hidden={!tossOver} onClick={handleTossContext}>
                    <NavLink
                        to='/match'
                    >Continue
                    </NavLink ></button>
            </div>


        </>
    );
}

export default Toss;
