import React from 'react';
import AppProvider from './context/AppProvider';
import AppNavigation from './navigation/AppNavigation';

const ScreensTG = () => {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  );
};

export default ScreensTG;
