import {useState, useContext} from 'react';
import { Link} from 'react-router-dom';
import {Box, Button, Typography, styled} from '@mui/material'; 
import QuizIcon from '@mui/icons-material/Quiz';

import { DataContext } from '../../context/DataProvider';

//components
import LoginDialog from '../../login/LoginDialog';
import Profile from './profile';


const Wrapper = styled(Box)(({ theme})=>({ 
    display:'flex',
    margin:'1% 3% 0 auto',
    '& > *':{
        marginRight:40,
        fontSize: 20,
        alignItems: 'center'

    },    [theme.breakpoints.down('lg')]:{
        display:'block'
    }

}));

 
const Container = styled(Box)(({ theme})=>({
    display: 'flex',
    color: '#ffffff',
    [theme.breakpoints.down('lg')]:{
        display:'block'
    }

}));

const LoginButton =styled(Button)`
    color: #f08080; 
    background:#ffe4e1;
    text-transform: none;
    padding: 5px 30px;
    font-size: 16px;
    border-radius: 20px; 
    box-shadow: 0 1px 1px 0 rgb(0 0 0/ 10%);
    font-weight: 700;
    height: 42px; 
    width:80%;

`


const CustomButtons =() => {
    const [ open, setOpen]=useState(false);

    const{account,setAccount}=useContext(DataContext);

    const openDialog=()=>{
        setOpen(true);
    }


    return (
        <Wrapper> 
            {
                account? <Profile account={account} setAccount={setAccount}/> :
          <Typography style ={{marginRight:5, marginTop:6, width:150}}> <LoginButton  variant="secondary"onClick={() => openDialog()} > Login  </LoginButton>   </Typography> 

            }
           
           <Link to={`/quiz`} style={{ textDecoration: 'none'}}>
           <Box style={{color:'#ffffff'}}>

           <Typography style ={{ marginTop:16, width:100}}> Pick your Pet  </Typography> 
              
 
 </Box>
            </Link>




            <Link to={`/`} style={{ textDecoration: 'none'}}>
           <Box style={{color:'#ffffff'}}>
            <Typography style ={{ marginTop:16, width:100}}> Home page </Typography> 
              
 
 </Box>
            </Link>
                    
                <Link to={`/quiz`} style={{ textDecoration: 'none'}}>
                <Container style ={{ marginTop:16}}>

              

                    <QuizIcon />
                    <Typography style ={{ fontSize:'16px'}}> Adaptability Quiz  </Typography>
                  
                     </Container>
                     </Link>
                <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;