import React from 'react';
import { useContext, useEffect, useState } from 'react'
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom'
import usePreventBackNavigation from '../../Hooks/usePreventBackNavigation';
import { tossContext } from '../../Contexts/tossContext';
import TossProvider from '../../Contexts/TossProvider';
// import { NavLink } from 'react-router-dom';
import menu from '../../assets/menu.svg'
import { teamContext } from '../../Contexts/teamContext';
import logo from '../../assets/MyLogo.png'

function Match() {
  usePreventBackNavigation();
  const [runs, setRuns] = useState(0)
  const [wickets, setWickets] = useState(0)
  const [user, setUser] = useState(null)
  const [comp, setComp] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [firstInnings, setFirstInnings] = useState(true)
  const [secondInnings, setSecondInnings] = useState(false)
  const [target, setTarget] = useState(0)
  const [result, setResult] = useState("")

  const { UserTeam, CompTeam } = useContext(teamContext)
  const { tossWinner, tossDecision } = useContext(tossContext)
  const [firstInningsBatting, setFirstInningsBatting] = useState(null)
  const [secondInningsBatting, setSecondInningsBatting] = useState(null)
  const [inningsOver, setInningsOver] = useState(false)
  const [matchOver, setMatchOver] = useState(false)

  const [disableButton, setDisableButton] = useState(true)
  const [disableResult, setDisableResult] = useState(true)
  const [disableTarget, setDisableTarget] = useState(true)

  const [pauseGame, setPauseGame] = useState(false)
  const [hidePlay, setHidePlay] = useState(false)
  const [hideNewGame, setHideNewGame] = useState(true)
  const startPlaying = () => {
    resetGame()
    setHidePlay(true)
    setDisabled(false)
    setDisableButton(false)
  }

  const resetGame = () => {
    setRuns(0)
    setWickets(0)
    setUser(null)
    setComp(null)
  }
  const generateRandom = (max, min) => {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x
  }

  useEffect(() => {
    if (secondInnings) {
      setDisableTarget(false)
      if (secondInningsBatting == UserTeam) {
        if (runs >= target) {
          setResult(UserTeam + " Won by " + (10 - wickets) + " wicktes")
          setHideNewGame(false)
          setMatchOver(true)
          setSecondInnings(false)

          setMatchOver(true)
          setDisableResult(false)
          setDisableButton(true)
          setHidePlay(true)
          setDisableTarget(true)

        }
        else if (runs < target && wickets >= 10) {
          setResult(CompTeam + " Won by " + (target - 1 - runs) + " runs")
          setHideNewGame(false)
          setMatchOver(true)
          setSecondInnings(false)

          setMatchOver(true)
          setDisableResult(false)
          setDisableButton(true)
          setHidePlay(true)
          setDisableTarget(true)

        }
      }
      if (secondInningsBatting == CompTeam) {
        if (runs >= target) {
          setResult(CompTeam + " Won by " + (10 - wickets) + " wicktes")
          setHideNewGame(false)
          setMatchOver(true)
          setSecondInnings(false)

          setMatchOver(true)
          setDisableResult(false)
          setDisableButton(true)
          setHidePlay(true)
          setDisableTarget(true)
        }
        else if (runs < target && wickets >= 10) {
          setResult(UserTeam + " Won by " + (target - 1 - runs) + " runs")
          setHideNewGame(false)
          setMatchOver(true)
          setSecondInnings(false)

          setMatchOver(true)
          setDisableResult(false)
          setDisableButton(true)
          setHidePlay(true)
          setDisableTarget(true)
        }
      }
    }
    else if (firstInnings) {
      setDisableTarget(true)
      setDisableResult(true)
      if (wickets >= 10) {
        setDisableButton(true)
        setHidePlay(false)
        setDisabled(true)
        setFirstInnings(false)
        setTarget(Number(runs) + 1)
        setSecondInnings(true)
      }

    }
  }, [runs, wickets])

  useEffect(() => {
    if (tossDecision == "bat") {
      if (tossWinner == UserTeam) {
        setFirstInningsBatting(UserTeam)
        setSecondInningsBatting(CompTeam)
      }
      else {
        setFirstInningsBatting(CompTeam)
        setSecondInningsBatting(UserTeam)
      }
    }
    else if (tossDecision == "bowl") {
      if (tossWinner == UserTeam) {
        setFirstInningsBatting(CompTeam)
        setSecondInningsBatting(UserTeam)
      }
      else {
        setFirstInningsBatting(UserTeam)
        setSecondInningsBatting(CompTeam)
      }
    }
  }, [])

  useEffect(() => {
    if (hidePlay == false) {
      setDisableButton(true)
    }
    if (firstInnings) {
      // scoreFirstInnings
      if (firstInningsBatting == UserTeam) {
        // scoreFirstInnings
        if (wickets >= 10) {
          // setDisabled(true)
          // setFirstInnings(false)
          // setHidePlay(false)
          // setTarget(Number(runs) + 1)
          // console.log(runs)
          // setSecondInnings(true)
        }
        else {
          if ((Number(user) == Number(comp) && comp != null)) {
            setWickets(wickets + 1)
          }
          else {
            if (runs == 0) {
              setRuns(user)
            }
            else {
              setRuns(runs + user)
            }
          }
        }
      }
      if (firstInningsBatting == CompTeam) {
        // scoreFirstInnings
        if (wickets >= 10) {
          setDisabled(true)
          setFirstInnings(false)
          setHidePlay(false)
          setTarget(Number(runs) + 1)
          console.log(runs)
          setSecondInnings(true)
        }
        else {
          if ((Number(user) == Number(comp) && comp != null)) {
            setWickets(wickets + 1)
          }
          else {
            if (runs == 0) {
              setRuns(comp)
            }
            else {
              setRuns(runs + comp)
            }
          }
        }
      }

    }
    if (secondInnings) {
      // scoreSecondInnings
      if (secondInningsBatting == UserTeam) {
        if (runs >= target) {
          // setMatchOver(true)
          // setResult("User Wins!")
          // setDisabled(true)
          // setSecondInnings(false)
        }
        else if (runs < target && wickets >= 10) {
          // setMatchOver(true)
          // setResult("Comp Wins!")
          // setDisabled(true)
          // setSecondInnings(false)
        }
        else {
          if ((Number(user) == Number(comp) && comp != null)) {
            setWickets(wickets + 1)
          }
          else {
            if (runs == 0) {
              setRuns(user)
            }
            else {
              setRuns(runs + user)
            }
          }
        }
      }
      if (secondInningsBatting == CompTeam) {
        if (runs >= target) {
          // setResult("Computer Wins!")
          // setDisabled(true)
          // setSecondInnings(false)
        }
        else if (runs < target && wickets >= 10) {
          // setResult("User Wins!")
          // setDisabled(true)
          // setSecondInnings(false)
        }
        else {
          if ((Number(user) == Number(comp) && comp != null)) {
            setWickets(wickets + 1)
          }
          else {
            if (runs == 0) {
              setRuns(comp)
            }
            else {
              setRuns(runs + comp)
            }
          }
        }
      }
    }
  }, [user, comp])

  return (
    <>
      <div className='flex flex-col h-screen w-screen justify-center items-center fixed inset-0 z-[9999] pointer-events-auto'>
        <div className='fixed inset-0 flex items-center justify-center backdrop-blur-xs z-[9999] pointer-events-auto' hidden={!pauseGame}>
          <div className="absolute w-96 border-4 bg-gray-400 p-6 text-center shadow-2xl pointer-events-auto" >
            <button className="absolute top-0 right-0 text-4xl font-bold text-gray-600 hover:text-gray-900 pr-3 m-0" onClick={() => setPauseGame(false)}>
              x
            </button>
            <h2 className="mb-5 text-2xl font-bold text-white">Game Paused</h2>
            <button className="mb-3 border-2 border-black w-full bg-orange-500 px-5 py-3 text-white shadow-md hover:bg-orange-300 hover:cursor-pointer text-lg font-bold" onClick={() => setPauseGame(false)}>
              Resume
            </button>
            <button className="w-full bg-orange-500 px-5 border-2 border-black py-3 text-white shadow-md hover:bg-orange-300 hover:cursor-pointer text-lg font-bold h-full">
              <NavLink
                to="/">
                Quit Game
              </NavLink>

            </button>
          </div>
        </div>
        <div className=' bg-gray-700 text-white w-lg h-fit flex flex-col justify-center items-center p-5 ' hidden={false}>

          <div className='flex flex-row w-full justify-between p-0 m-0'>
            <div className='  p-2 cursor-pointer' ></div>
            <div className='flex flex-row items-center justify-center gap-2'>
              <img src={logo} alt="" className='w-12'/>
            <h1 className="text-3xl font-extrabold underline ">
            DigitCricket
            </h1>
            </div>
            <div className='sticky h-fit w-fit z-10 bg-orange-600 p-2 cursor-pointer' onClick={() => {
              setPauseGame(!pauseGame)
            }}><img src={menu} alt="" srcset="" /></div>
          </div>
          <div>{UserTeam}(You) vs {CompTeam}</div>
          <div>toss won by {tossWinner} decided to {tossDecision}</div>
          <div className='w-full justify-center flex flex-row mt-5'>
            {/* <div><div hidden={secondInnings}>User</div><div hidden={firstInnings}>Computer</div>{runs}/{wickets}</div> */}
            <div><div>{firstInnings ? firstInningsBatting : secondInningsBatting}</div>{runs}/{wickets}</div>
            {/* <div>Player1 : 10 <br /> Player2 : 20*</div> */}
          </div>
          <div className='flex flex-row mt-5 w-full gap-10'>
            <div className='w-1/2 justify-center flex'>{UserTeam}</div>
            <div className='w-1/2 justify-center flex'>{CompTeam}</div>
          </div>
          <div className='flex flex-row mt-5 justify-evenly w-full text-7xl'>
            <div >{user}</div>
            <div > | </div>
            <div >{comp}</div>
          </div>
          <div className='text-yellow-400 font-semibold' hidden={disableTarget}>Target : {target}</div>
          <div className='text-yellow-400 font-semibold' hidden={disableTarget}>{secondInningsBatting} Need {target - runs} runs to win</div>
          <div className='text-yellow-400 font-semibold' hidden={disableTarget}>{10 - wickets} wickets left</div>
          <div className='text-green-600 font-semibold' hidden={disableResult}>{result}</div>
          <button className='bg-orange-500 font-semibold pl-2 pr-2 border-4 border-gray-700 text-2xl  hover:border-4 hover:border-black cursor-pointer shadow-sm shadow-black' hidden={hidePlay} onClick={startPlaying}>Play</button>
          <button className="w-fit bg-orange-500 px-2 border-4 border-gray-700 py-1 text-white shadow-md hover:border-4 hover:border-black text-2xl font-bold h-full" hidden={hideNewGame}>
            <NavLink
              to="/">
              New Game
            </NavLink>

          </button>
        </div>
        <div className='w-xl bg-gray-600 flex flex-row p-5 justify-between items-center '>
          {/* hover:border-black border-4 border-gray-400 */}
          <button className='shadow-sm shadow-black bg-gray-400 p-5 cursor-pointer disabled:cursor-not-allowed disabled:p-5 disabled:border-3 disabled:border-gray-500 disabled:text-gray-300  hover:border-4 hover:border-black border-4 border-gray-400 text-white font-bold text-2xl' value="0" onClick={(e) => {
            setUser(Number(e.target.value))
            setComp(generateRandom(6, 0))
          }} disabled={disableButton}>0</button>
          <button className='shadow-sm shadow-black bg-gray-400 p-5 cursor-pointer disabled:cursor-not-allowed disabled:p-5 disabled:border-3 disabled:border-gray-500 disabled:text-gray-300 hover:border-4 hover:border-black border-4 border-gray-400 text-white font-bold text-2xl' value="1" onClick={(e) => {
            setUser(Number(e.target.value))
            setComp(generateRandom(6, 0))
          }} disabled={disableButton}>1</button>
          <button className='shadow-sm shadow-black bg-gray-400 p-5 cursor-pointer disabled:cursor-not-allowed disabled:p-5 disabled:border-3 disabled:border-gray-500 disabled:text-gray-300 hover:border-4 hover:border-black border-4 border-gray-400 text-white font-bold text-2xl' value="2" onClick={(e) => {
            setUser(Number(e.target.value))
            setComp(generateRandom(6, 0))
          }} disabled={disableButton}>2</button>
          <button className='shadow-sm shadow-black bg-gray-400 p-5 cursor-pointer disabled:cursor-not-allowed disabled:p-5 disabled:border-3 disabled:border-gray-500 disabled:text-gray-300 hover:border-4 hover:border-black border-4 border-gray-400 text-white font-bold text-2xl' value="3" onClick={(e) => {
            setUser(Number(e.target.value))
            setComp(generateRandom(6, 0))
          }} disabled={disableButton}>3</button>
          <button className='shadow-sm shadow-black bg-gray-400 p-5 cursor-pointer disabled:cursor-not-allowed disabled:p-5 disabled:border-3 disabled:border-gray-500 disabled:text-gray-300 hover:border-4 hover:border-black border-4 border-gray-400 text-white font-bold text-2xl' value="4" onClick={(e) => {
            setUser(Number(e.target.value))
            setComp(generateRandom(6, 0))
          }} disabled={disableButton}>4</button>
          <button className='shadow-sm shadow-black bg-gray-400 p-5 cursor-pointer disabled:cursor-not-allowed disabled:p-5 disabled:border-3 disabled:border-gray-500 disabled:text-gray-300 hover:border-4 hover:border-black border-4 border-gray-400 text-white font-bold text-2xl' value="5" onClick={(e) => {
            setUser(Number(e.target.value))
            setComp(generateRandom(6, 0))
          }} disabled={disableButton}>5</button>
          <button className='shadow-sm shadow-black bg-gray-400 p-5 cursor-pointer disabled:cursor-not-allowed disabled:p-5 disabled:border-3 disabled:border-gray-500 disabled:text-gray-300 hover:border-4 hover:border-black border-4 border-gray-400 text-white font-bold text-2xl' value="6" onClick={(e) => {
            setUser(Number(e.target.value))
            setComp(generateRandom(6, 0))
          }} disabled={disableButton}>6</button>
        </div>
      </div>
    </>
  )
}

export default Match;
