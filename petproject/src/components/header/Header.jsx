import { useState } from 'react';

import { AppBar , Drawer, Toolbar, Box, IconButton, List, ListItem, Typography, styled} from '@mui/material';

//components
import Search from './Search';
import {Link} from 'react-router-dom';
import CustomButtons from './CustomButtons';

import {Menu} from '@mui/icons-material';

const StyleHeader = styled(AppBar)`
    background: #ffc0cb;
    height: unset;
`;

const Component = styled(Link)`
    margin-left: 0%;
    text-decoration: none;
    border-radius: 10px; 
    height: 32px; 
    width:100;
    margin-top: 9px;
    box-shadow: 1px 2px 1px 1px rgb(0 0 0/ 10%);
    line-height: 0;
    
`

const SubHeading= styled(Typography)`
    font-size: 20px;
    font-style: italic;
    margin-top: 3px;
`
const CustomButtonWrapper = styled(Box)(({ theme}) =>({
    marginLeft: '0' ,
   width: '57%',
    display: 'flex',
    [ theme.breakpoints.down('lg')]:{

        display:'none'
    }


}));

const MenuButton =styled(IconButton)(({ theme}) => ({
    display:'none',
    marginLeft: 'auto',
    [theme.breakpoints.down('lg')]:{
        display: 'block'
    }
}));


    
const Header=()=> {

    const logoURL= 'https://i0.wp.com/cutepetcare.com/wp-content/uploads/2022/05/pink-paws.png?fit=500%2C500&ssl=1';
    const [open, setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);

    }
    const handleClose2=()=>{
        setOpen(false);

    }

    const list =()=>(
        <Box style ={{ width:200}} onClick={handleClose2}>
            <List>
                <ListItem button>
                    <CustomButtons />

                </ListItem>
            </List>
        </Box>


    )

    return (
        <StyleHeader>
                    
            <Toolbar style ={{ minHeight: 50 }}>
                <Box  style ={{ display:'flex'}} > 
                     <img src={logoURL} alt="logo" style={{ marginTop:14, height: 60 }}/>
                   

                </Box>

                <Box  style ={{ display:'flex'}} > 


                <Component to='/'>
               
                    <SubHeading>
                       <Box component="span" style={{  fontWeight: '500' , color: '#fff0f5'}}> PawAwesome</Box>
                    </SubHeading>
                     
                    </Component>
                  

                    </Box>
                        <Search />
                       
                        <CustomButtonWrapper>
                        <CustomButtons /> 
                        </CustomButtonWrapper>
                        
                        <MenuButton color="inherit" onClick={handleOpen} style ={{ marginTop:18}} >
                        <Menu />
                        </MenuButton>
                        <Drawer open={open} onClose={handleClose2}>
                        {list()}
                            
                            </Drawer>
            </Toolbar>
       

            
        </StyleHeader>
      
        
    )
}

export default Header;