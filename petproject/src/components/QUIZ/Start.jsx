

import {Box, Divider , Typography, styled,Button } from '@mui/material';  
import { Link} from 'react-router-dom';

const Text=styled(Typography)(({ theme})=>({
    fontSize:  '25px',  
    padding: '10px 200px',
    marginLeft: '170px',
    marginTop:'2px',
    marginRight: '200px',
    textAlign: 'center',
    opacity: '.8',  
   
    [theme.breakpoints.down('md')]:{
        textAlign: 'center', 
        padding: '10px 0px',
        marginTop:'20px',
        marginLeft: '40px', 
        marginRight: '40px',
        fontSize: '17px'
    }

}));

const Text2=styled(Typography)(({ theme})=>({
    fontSize: '30px',
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
   



const Container = styled(Box)` 
    background: '#ffe4e1', 
    color: #f08080,
    marginLeft: '40px', 
    marginRight: '40px'
    
    `;
    

const Component = styled(Box)(({ theme}) => ({
    background: '#ffffff',
    marginTop: '160px', 
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
    

const Starttypo=styled (Typography)(({ theme})=>({ 
    fontSize:'23px',
    
    [theme.breakpoints.down('md')]:{ 
        fontSize: '17px'
    }

}));


const QuizButton =styled(Button)(({ theme}) => ({
    marginLeft: 'auto',
    borderRadius:'20px', 
    marginTop: '20px', 
    marginBottom:'80px',
    color: '#f08080',
    background:'#ffe4e1', 
    textTransform: 'none',
    padding: '5px 30px', 
    boxShadow: '0 1px 1px 0 rgb(0 0 0/ 10%)',
  [theme.breakpoints.down('md')]:{
        padding: '5px 10px',
        textAlign: 'center'
       }

}));
    

const START =() => {
    return (
        <Container >
                

        <Component textAlign="center" style ={{padding:'10px 10px'   }} >   
                <Divider light />


                <Text2 style={{  fontWeight:800, marginTop:'40px', color: '#f08080'}}>
                    QUIZ TIME!
                </Text2> 
                 
                <Text style={{  color: '#f08080', display:'flex'}}>
                   You will be asked some questions, and there will be suggestions based on the choices you make. 
                   From the suggestions, you can click on the breed to know more.
                   Make sure you answer all questions carefully
                        </Text>
                
 
                  
                  <Link to={`/Result`} style={{ textDecoration: 'none'}}>

                    

                  <QuizButton variant='outlined'color="error" >
                    <Starttypo style ={{ fontWeight:550}}>
                        Start Quiz
                        </Starttypo>
                    </QuizButton>


                    
                  </Link>
                  <Divider light />

                  </Component>


                  
            
        </Container>

    )
}

export default START;