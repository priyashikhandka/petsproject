
import './App.css';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import Start from './components/QUIZ/Start';

 
import Result from './components/QUIZ/Quizresult'; 

import DataProvider from './context/DataProvider';
import DetailView from './components/details/DetailView';

import { Box } from '@mui/material';

import{BrowserRouter , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <DataProvider >
      <BrowserRouter>
        <Header /> 
        <Box style ={{ marginTop: 80 }}>
        <Routes>
          <Route path='/' element={<Home />} />    
          <Route path='/:id' element={<DetailView />} />    
          
          <Route path='/quiz' element={< Start />} />
           
          <Route path='/Result' element={< Result />} /> 

          
          </Routes> 
          

        </Box>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
