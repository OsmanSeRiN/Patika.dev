import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import MainPage from './Lib/Pages/MainPage';
import { store } from './Lib/Model/Redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className='App-Background'>
          <MainPage />
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
