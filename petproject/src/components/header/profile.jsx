import { useState } from 'react';
 
import{Box, Typography ,Menu,MenuItem,styled} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)`
    margin-top: 10px;
    
    margin-left: 20px;
`;

const Logout=styled(Typography)`
    font-size:14px;
    margin-left: 8px;
`;
const WelcomeName=styled(Box)` 
    background: #fff0f5; 
    border-radius: 20px;
    padding: 9px 30px; 
    
    
    align-items: center;
`;



const Profile=({account, setAccount})=> {

    const[open, setOpen]=useState(false);

    const handleClick=(event)=> {
        setOpen(event.currentTarget);

    }


    const handleClose=()=>{
        setOpen(false);
    }

    const logoutUser=()=>{
        setAccount('');
    }

    return (
        <>
             
             
             <Typography variant="h7"  style ={{display: 'flex',marginRight:40,marginLeft:10 ,color:'#f08080', fontWeight:600, marginTop:7.5, cursor:'pointer' }}>
             <WelcomeName onClick={handleClick} sx={{ boxShadow: 2 }}>
                {account}

                
                </WelcomeName>
                
                
                </Typography>
                


                <Component
                 anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                >

                <MenuItem onClick={()=>{ handleClose(); logoutUser(); }}>
                        <PowerSettingsNewIcon  color="warning" fontSize="small"/>
                        <Logout color='#f08080'>
                              Logout
                        </Logout>
                </MenuItem>
            </Component>


        
        </>
    )
}

export default Profile;