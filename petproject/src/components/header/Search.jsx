
import { useState, useEffect } from 'react';
import { InputBase,Divider, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {useSelector, useDispatch} from 'react-redux';

import { getPets} from '../../redux/actions/petActions';
import { Link} from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #fff0f5;
    width: 35%;
    border-radius: 20px;
    margin-Top: 16px;
    margin-left: 30px;
    margin-right: 10px;
    display: flex;
`;


const ListWrapper= styled(List)`
position:absolute;
color:#f08080;
margin-left: 30px;
border-radius: 8px; 
margin-top:40px;
background: #fff0f5;


`
const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width:100%;
    font-style: italic;
    font-size: 18px;
`;

const SearchIconWrapper = styled(Box)`
    color: #ff69b4 ;
    padding: 5 ;
`
const Search =() => {
    const [text,setText]=useState('');
            
    const {pets} =useSelector(state=> state.getPets);
    const dispatch= useDispatch();
    useEffect(()=> {
        dispatch(getPets())

    },[dispatch])


    const getText=(text)=>{
        setText(text);

    }

        return(
          
            
            <SearchContainer> 
                <InputSearchBase
                    placeholder ='find your pawfect pet!'
                    onChange ={(e) => getText(e.target.value)}
                    value={text}
                /> 
                 <SearchIconWrapper>
                    <SearchIcon />
                 </SearchIconWrapper>
                 {
                    text && 
                    <ListWrapper>
                        {
                            pets.filter(pet=> pet.description.toLowerCase().includes(text.toLowerCase())).map(pet=>(
                                <ListItem>
                                    <Link
                                    to={`/${pet.id}`}
                                    onClick={()=> setText('')}
                                    style={{ textDecoration: 'none', color:'inherit'}}
                                    >
                                    
                                    {pet.title.shortTitle} 
                                    <Divider light absolute/>

                                    </Link>

                                </ListItem>
                            ))
                        }
                    </ListWrapper>
                 }
               
            </SearchContainer>
        )
}

export default Search;