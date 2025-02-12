import React from 'react';
import { Outlet } from 'react-router-dom';
import TossProvider from './src/Contexts/TossProvider';
import TeamProvider from './src/Contexts/teamProvider';
function Layout() {
    
  return (
    <TeamProvider>
    <TossProvider>
    <Outlet />
    </TossProvider>
    </TeamProvider>
  );
}

export default Layout;
