import {Box, Button , Typography, styled} from '@mui/material';
import { Link} from 'react-router-dom';

const LeftContainer = styled(Box)(({ theme })=>({
    minWidth: '40%',
    padding: '0px 0 0 50px',
    [theme.breakpoints.down('mg')]:{
        padding: '0px 80px 0px '
    }



})) ;

const Image=styled('img') ({
    padding: '15px 20px',
    borderRadius: '2px',
    background: '#fff0f5',
    border: '1px solid #fff0f5',
    width: '90%'
})

const Starttypo=styled (Typography)(({ theme})=>({ 
    fontSize:'20px',
    
    [theme.breakpoints.down('md')]:{ 
        fontSize: '18px'
    }

}));

const Compatibility =styled(Button)`
    margin-left: auto;
    border-radius:20px; 
    margin-top: 20px; 
    color: #f08080;  
    background:#ffe4e1;
    text-transform: none;
    padding: 5px 30px;
    border-radius: 20px; 
    box-shadow: 0 1px 1px 0 rgb(0 0 0/ 10%);
`;

const ActionItem =({pet}) => {
    return (
        <LeftContainer>
            
            <Image src={pet.detailUrl} alt="pet"  />
            <Link to={`/quiz`} style={{ textDecoration: 'none'}}>

           

 
            <Compatibility variant='outlined'color="error" >
                    <Starttypo style ={{  fontWeight:550}}>
                      Compatibility quiz
                        </Starttypo>
                    </Compatibility>
                    </Link>




        </LeftContainer>
    )
}

export default ActionItem;