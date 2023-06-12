import {useEffect} from 'react';

import { getPets, getPetDetails } from '../../redux/actions/petActions';

import {useDispatch , useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
 import Slide from '../home/Slide';

import {Box, Typography, Grid, styled , Divider} from '@mui/material';


import ActionItem from './ActionItem';

import PetDetail from './PetDetail';

const Text=styled(Typography)(({ theme})=>({
        fontSize: '35px',  
        fontWeight: '700',
        color: '#f08080',
        textAlign: 'center',
        marginLeft: '170px', 
        marginRight: '170px',
        padding: '15px 15px',
        fontFamily: 'inherit',
        
        [theme.breakpoints.down('md')]:{
            padding: '0px 0px',
            marginLeft: '40px', 
            marginRight: '40px',
            textAlign: 'center',
            fontSize: '20px'
        }
    
    }));

const Text2=styled(Typography)(({ theme})=>({
        fontSize: '25px',
        color: '#f08080',
        textAlign: 'center',
        marginLeft: '170px', 
        marginRight: '170px',
        padding: '10px 25px',
        fontFamily: 'inherit',
        
        [theme.breakpoints.down('md')]:{
            padding: '2px 0px',
            marginLeft: '40px', 
            marginRight: '40px',
            textAlign: 'center',
            fontSize: '17px'
        }
    
    }));



const Component2 = styled(Box)(({ theme})=>({
    background: '#fff0f5',
    marginTop: '20px',
    
    marginBottom: '20px',
    borderRadius: '100px',
    textAlign: 'center',
    padding: '5px 5px',
     marginLeft: '40px', 
     marginRight: '40px',
     width: 'unset',
    height: 'unset',
 
    [theme.breakpoints.down('lg')]:{
         
     
    padding: '20px 20px'
    }

}));
  

const Component =styled(Box)`
margin-top: 55px; 
`

const Container =styled(Grid)(({ theme})=>({
    display: 'flex',
 
    [theme.breakpoints.down('lg')]:{
        display:'block'
      
    }

}));
 
const RightContainer= styled(Grid)`
    margin-top: 50px;
`

const DetailView =()=> {

    const dispatch=useDispatch();
    const{id}=useParams();

   const{ loading, pet}=  useSelector (state => state.getPetDetails);

    useEffect(()=> {

        if (pet && id !== pet.id)
        dispatch(getPetDetails(id))
    },[dispatch , id, pet, loading])


    console.log(pet);




    const { pets } = useSelector( state=> state.getPets)

    console.log(pets);

    const dispatch2= useDispatch();

    useEffect(()=>{
        dispatch2(getPets())
       },[dispatch2])








    return(
        <>

 
        <Component>


            

               { pet && Object.keys(pet).length &&

                <Container container>

                    <RightContainer item lg={4} md={4} sm={8} xs={12 }>


                        <ActionItem  pet ={pet} />




                        </RightContainer>

                    <Grid item lg={8} md={12} sm={12} xs={12}>

                        <Component2>
                            <Text>
                            {pet.title.shortTitle}
                            </Text>
                            <Text2 style={{  fontWeight:'700'}} >
                            {pet.title.longTitle}
                            </Text2> 
                            
                            <Text2>
                            The size of an average {pet.title.shortTitle} :
                            </Text2>

                            <Text2>
                             Height: {pet.size.height}
                            </Text2> 
                            <Text2>
                            Weight: {pet.size.weight}
                            </Text2>  
                        </Component2>


                       


                        </Grid>
                        
                        <Divider />

                        <Typography>
                            
                          <PetDetail pet= {pet}/>
                        </Typography>
                        
                        <Divider /> 



                    </Container>

                    



               }
        </Component>
               
        
        <Divider />
 
 <Slide pets={pets}/>
 <Divider />

        </>

        
        


    )


}

export default DetailView;