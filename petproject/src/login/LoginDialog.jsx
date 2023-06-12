
import {useState, useContext} from 'react';

import {Dialog,  Box, TextField, Typography, Button, styled} from '@mui/material';

import { authenticateSignup,authenticateLogin } from '../service/api';
import { DataContext } from '../context/DataProvider';

const Component= styled(Box)`
    height: 70vh;
    width: 90vh;
`;



const ImageContaine = styled(Box)(({ theme})=>({
   
    [theme.breakpoints.down('lg')]:{
        margin :'0',
        width: 'unset',
        opacity: '0',
        length: 'unset',
        padding: '0px 0px',
        objectFit: 'cover'
    }
}));



const Image = styled(Box)`
    background: #ffb6c1 url(https://media.rainpos.com/5526/PWCD049.XPINK.jpg) center 45% no-repeat;
    height: 82.74%;
    width: 30%;
    color: #fff0f5 ;
    padding: 45px 35px;
    & >p , & > h5{
        font-weight:600;

    }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p{
        margin-top: 20px;
    }

`;

const LoginButton= styled(Button)`
    text-transform: none;
    background:#f08080;
    color:#fff0f5;
    height: 48px;
    border-radius:20px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);

`;

const Signin= styled(Button)`
    text-transform: none;
    background:#fff0f5;
    color:#f08080;
    height: 48px;
    border-radius:20px;
    box-shadow: 1px 3px 5px 1px rgb(0 0 0/ 20%);

`;

const Text =styled(Typography)`
    font-size: 12px;
    color: #808080;
`;

const CreateAccount=styled(Typography)`
    font-size:14px;
    text-align:center;
    color: #f08080;
    font-weight: 600;
    cursor: pointer;

`;

const Error =styled(Typography)`
    font-size:10px;
    line-height:1px;
    color:#ff6347 ;
    margin-top: 10px;
    font-weight:600;
`;

const signupInitialValues ={
    firstname: '',
    lastname: '',
    username:'',
    email:'',
    password:''

}
const loginInitialValues={
    username:'',
    password:''

};

const accountInitialValues={
    login:{
        view: 'login',
        heading: "Login",
        subHeading:"Login to get to know more about your pet's breed."
    },
    signup: {
        view: 'signup',
        heading: "New here? ",
        subHeading:"Sign up to get to know about your favourite breed's compatibilty to your environment!"

    }
}



const LoginDialog =({open, setOpen}) => {

    const [account, toggleAccount] = useState(accountInitialValues.login);
    const[signup, setSignup] = useState(signupInitialValues);
    const[login,setLogin]=useState(loginInitialValues);
    const[error,setError]= useState(false);

    const{ setAccount }= useContext(DataContext);

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignup=()=> {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange= (e)=> {
        setSignup({ ...signup,[e.target.name]: e.target.value}); 
    }

    const signupUser =async()=>{
 
        let response =await authenticateSignup(signup);  
      console.log(response);
      if(response.status=== 200){
        toggleSignup();
       setAccount(signup.firstname);
      } else if(response.status=== 401){
        toggleSignup();
       setAccount(signup.firstname);
      } 

       handleClose();
 

    }

    const onValueChange= (e)=>{
        setLogin({...login, [e.target.name]:e.target.value});
    }

    const loginUser= async()=>{
       let response=await authenticateLogin(login);
       console.log(response);
       if(response.status=== 200){
        handleClose();
        setAccount(response.data.data.firstname);
       }
       else
       {
            setError(true);
       }
    }


    return (
         
            
        <Dialog open ={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset'}}}>
                    <Component>
                      
                        <Box style ={{display: 'flex',height:'100%'}}>
 


                      
                       <Image> 
                       <ImageContaine>
                            <Typography variant="h3">{account.heading}</Typography>
                            <Typography variant="h5" style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                            
                        </ImageContaine>
                           
                        </Image>
 

                        {
                            
                            account.view === 'login' ?
                        <Wrapper>
                           
                            <TextField variant="filled" onChange={(e)=> onValueChange(e)} name='username'  label ="Enter user name " />
                           
                            <TextField variant="filled" onChange={(e)=> onValueChange(e)} name='password'  label ="Enter password " />
                           
                            {error && <Error>Please enter valid username and password.</Error>}
                           
                            <Text>Login to get to know more about your pet's breed. </Text> 
                            <LoginButton onClick ={()=> loginUser()}>
                              Login
                                 </LoginButton> 
                            <Typography style={{ textAlign:'center' }}>OR</Typography> 
                            <CreateAccount onClick={()=> toggleSignup() }> New user? click below to sign up.</CreateAccount>
                            
                            <Signin onClick={()=> toggleSignup() }> <CreateAccount>  Sign up </CreateAccount> </Signin>
                        </Wrapper>

                        :

                        <Wrapper>
                            <TextField variant="filled" onChange={(e)=> onInputChange(e)} name='firstname' label ="Enter First name " />
                            <TextField variant="filled" onChange={(e)=> onInputChange(e)} name='lastname' label ="Enter Last name " />
                            <TextField variant="filled" onChange={(e)=> onInputChange(e)} name='username' label ="Enter username " />
                      
                            <TextField variant="filled" onChange={(e)=> onInputChange(e)} name='email' label ="Enter Email " />
                            <TextField variant="filled" onChange={(e)=> onInputChange(e)} name='password' label ="Enter password " />
                            <LoginButton onClick={()=>signupUser()}>Continue </LoginButton>
                            
                        </Wrapper>
                        }


                        </Box> 
                    </Component>
        </Dialog>
    )
}

export default LoginDialog;