

import {Box, Typography, styled,Button } from '@mui/material'; 
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import { Link} from 'react-router-dom';

const Text=styled(Typography)(({ theme})=>({
    fontSize:  '23px',  
    padding: '10px 55px',
    marginLeft: '170px',
    marginRight: '200px',
    textAlign: 'center',
    opacity: '.8',  
   
    [theme.breakpoints.down('md')]:{
        textAlign: 'center', 
        padding: '10px 0px',
        marginLeft: '40px', 
        marginRight: '40px',
        fontSize: '17px'
    }

}));

const Text2=styled(Typography)(({ theme})=>({
    fontSize: '25px',
    marginLeft: '170px', 
    marginRight: '170px',
    padding: '20px 35px',
    fontFamily: 'inherit',
    
    [theme.breakpoints.down('md')]:{
        padding: '20px 0px',
        marginLeft: '40px', 
        marginRight: '40px',
        textAlign: 'center',
        fontSize: '20px'
    }

}));
   
const Starttypo=styled (Typography)(({ theme})=>({ 
    fontSize:'20px',
    
    [theme.breakpoints.down('md')]:{ 
        fontSize: '17px'
    }

}));


const Component = styled(Box)(({ theme}) => ({
    background: '#ffffff',
    marginTop: '20px', 
    borderRadius: '100px',
    textAlign: 'center',
    padding: '25px 35px',
     marginLeft: '40px', 
     marginRight: '40px',
     height:'unset' ,

    [theme.breakpoints.down('md')]:{
        padding: '0px 0px',
        textAlign: 'center',
        
        
     marginLeft: '5px', 
     marginRight: '5px'
       }

}));
    


const QuizButton =styled(Button)(({ theme}) => ({
    marginLeft: 'auto',
    borderRadius:'30px', 
    marginTop: '20px', 
    color: '#f08080',
    background:'#ffe4e1', 
    textTransform: 'none',
    padding: '15px 30px', 
    boxShadow: '0 1px 1px 0 rgb(0 0 0/ 10%)',
  [theme.breakpoints.down('md')]:{
        padding: '5px 5px',
        textAlign: 'center',
         fontSize: '15px'
       }

}));
    


const Welcome =() => {
    return (
        <Component textAlign="center" style ={{padding:'10px 10px'   }} >   


                <Text2 style={{  fontWeight:800, color: '#f08080'}}>
                    Does the pet you desire, checklist all your parameters? Is the breed really adaptable to your house?</Text2> 
                 
                <Text style={{  color: '#f08080'}}>
                Welcome to the pets Web. Play a small quiz and find out the perfect breed just for you!  
                   This is your place to gain knowledge about the different breeds of dogs.
                   Check if they are compatible with your home enviroment including the climatic conditions. 
                   You may adore the cuddly Saint Bernard, but if you live in a place
                   like Rajasthan, your love may turn out to be agonizing to your fluffy friend. 
              The intention here is not only to find your perfect pet, but also to help you be a perfect pet parent 
                   by considering their requirements.  
                  Enjoy the search to find your pawfect pet!  <PetsOutlinedIcon fontSize="small" />
                  
                  </Text> 

                    <Link to={`quiz`} style={{ textDecoration: 'none'}}>

                    <QuizButton variant="outlined" color="error" style ={{marginBottom:'30px'}} >
                        <Starttypo style ={{ fontWeight:550}}>
                           Compatibility Quiz
                            </Starttypo>
                        </QuizButton>
 

                                    </Link>

             

                  </Component>

    )
}

export default Welcome;