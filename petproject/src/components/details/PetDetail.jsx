
import {Box, Divider, Typography, styled } from '@mui/material'; 



const Text=styled(Typography)(({ theme})=>({
    fontSize:  '20px',  
    padding: '5px 35px',
    marginLeft: '170px',
    marginRight: '200px',
    textAlign: 'center',
    opacity: '.8',  
   
    [theme.breakpoints.down('md')]:{
        textAlign: 'center', 
        padding: '10px 0px',
        marginLeft: '40px', 
        marginRight: '40px',
        fontSize: '18px'
    }

}));

const Text2=styled(Typography)(({ theme})=>({
    fontSize: '25px',
    marginLeft: '170px', 
    marginRight: '170px',
    padding: '10px 35px ',
    fontFamily: 'inherit',
    
    [theme.breakpoints.down('md')]:{
        padding: '20px 0px',
        marginLeft: '40px', 
        marginRight: '40px',
        textAlign: 'center',
        fontSize: '20px'
    }

}));
   



const Component = styled(Box)(({ theme}) => ({
    background: '#ffffff',
    marginTop: '10px', 
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
    


const PetDetail = ({pet}) => {
    return (
        <>

        


        <Box style ={{ background: '#fff0f5',marginTop: '40px', padding: '45px 25px'}} >
        <Divider />

        <Component  textAlign="center" style ={{padding:'10px 10px'   }} >
            
                    <Text2  style={{  fontWeight:800, color: '#f08080'}} > 
               More about {pet.title.shortTitle} :  
                </Text2>

                <Text2  style={{  fontWeight:600, color: '#f08080'}} >  
               "{pet.tagline}" 
                </Text2>


        <Text style={{  color: '#f08080'}} >
 
        {pet.description}  
          </Text>
          <Text style={{  color: '#f08080'}} > 

            They are the "{pet.Group}".
            </Text>

            <Text style={{  color: '#f08080'}} >
                    
                    Their lifespan on an average is around {pet.Lifespan}.

                    </Text>

                    <Text style={{  color: '#f08080'}} >
  
                        Prices vary a lot depending on the quality of the breed but their average price in India is around {pet.price}. 
                        </Text>

          
        </Component>
        
        
        </Box>

          </>
    )
}

export default PetDetail;