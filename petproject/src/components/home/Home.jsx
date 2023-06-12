import { useEffect} from 'react';


//components
import NavBar from './NavBar';
import Banner from './Banner'; 
import Slide from './Slide';
import Welcome from './Welcome';

import { Box, styled, Divider} from '@mui/material';

import { getPets } from '../../redux/actions/petActions';

import {useDispatch, useSelector } from 'react-redux';
   
const Component= styled(Box)`
    padding: 20px 10px;
    background: #fff0f5;
    height: 90px;
    
`;

const Component2= styled(Box)`
    padding: 20px 10px;
    background: #ffe4e1;
`

const Home = () => {

    const { pets } = useSelector( state=> state.getPets)

    console.log(pets);

    const dispatch2= useDispatch();

    useEffect(()=>{
        dispatch2(getPets())
       },[dispatch2])



    return (
        <>
            
            <Divider />
            <Component2> 
                <Banner /> 
                <Divider />
             <Welcome/> 
             <Divider />
 
             <Slide pets={pets}/>
             <Divider />
            </Component2>
            <Divider />
            <Component> 
            <NavBar />
            </Component>
        </>
        
    )
}

export default Home;
