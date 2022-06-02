import React from 'react';
import AppProvider from './context/AppProvider';
import AppNavigation from './navigation/AppNavigation';
import {ToastProvider} from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/Ionicons';

const ScreensTG = () => {
  return (
    <ToastProvider
      placement={'top'}
      duration={3000}
      animationType={'zoom-in'}
      warningColor={'#F66B0E'}
      warningIcon={<Icon name={'ios-warning'} size={20} color={'#fff'} />}
      offsetTop={50}>
      <AppProvider>
        <AppNavigation />
      </AppProvider>
    </ToastProvider>
  );
};

export default ScreensTG;
