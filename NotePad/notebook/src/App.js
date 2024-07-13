import logo from './logo.svg';
import './App.css';
import MainPage from "./Pages/MainPage"
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
   <ChakraProvider>
     <div className='App-Background'>
      <MainPage/>
     </div>
   </ChakraProvider>
  );
}

export default App;
