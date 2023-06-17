import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div>
        <div className='flex'>
        <SideBar/>
        <MainContainer/>
        </div>
    </div>
  );
};

export default Body