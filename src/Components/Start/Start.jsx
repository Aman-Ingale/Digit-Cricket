import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'
import usePreventBackNavigation from '../../Hooks/usePreventBackNavigation';
import logo from '../../assets/MyLogo.png'
function Start() {
  // usePreventBackNavigation();

  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center ">
        <div className='text-6xl font-extrabold text-orange-500 '>DiGiT CrIcKeT</div>
        <div><img src={logo} alt="" /></div>
        <div className="bg-orange-500 p-4 text-5xl text-white font-black rounded-2xl  hover:scale-110 border-4 border-white hover:border-4 hover:border-orange-300 cursor-pointer ">
          <NavLink
            to='/team'
          >Start Game</NavLink >
        </div>
      </div>
    </>
  );
}

export default Start;
