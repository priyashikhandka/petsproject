

import {Box, Typography, styled } from '@mui/material';

import { navData } from '../../constants/data'; 

const Component = styled(Box)(({ theme})=>({
    display: 'flex',
    margin: '0 20px 20px 10px',
    justifyContent: 'space-between',
    overflow:'overlay',
    [theme.breakpoints.down('1g')]:{
        margin :0
    }



}));

const Container = styled(Box)`
padding: 8px 8px;
    text-align: center;
    border-radius: 90px;
`

const Text=styled(Typography)`
 
    font-size: 10px;
    opacity:.7;
    color: #696969 ;
    font-weight: 500;
    font-family: inherit;
`

const NavBar =() => {
    return (
        <Component>
                {
                    navData.map(data=>(
                        <Container>
                            <img src ={data.url} alt ="nav" style={{ height:60}} />
                            <Text>{data.text}</Text>
                            </Container>
                    ))
                }
        </Component>

    )
}

export default NavBar;