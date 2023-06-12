import { useState, useEffect } from 'react';
import { Divider, List, ListItem } from '@mui/material';
 
import {useSelector, useDispatch} from 'react-redux';  
import { getPets} from '../../redux/actions/petActions'; 

import {Box, Typography, styled,Button } from '@mui/material';  
import { Link} from 'react-router-dom';

const Text= styled(Typography)(({ theme})=>({
    fontSize:  '20px',  
    padding: '10px 55px',
    marginLeft: '170px',
    marginRight: '200px',
    textAlign: 'center', 
   
    [theme.breakpoints.down('md')]:{
        textAlign: 'center', 
        padding: '10px 0px',
        marginLeft: '40px', 
        marginRight: '40px',
        fontSize: '13px',
    }

}));

const Image=styled('img') ({
     
    width: 100,
    height: 'unset',
    marginLeft:'auto'
    
});


const ListWrapper= styled(List)(({ theme})=>({
color:'#f08080',
marginLeft: '500px',
marginRight: '500px',
borderRadius: '20px', 
marginTop:'20px',
background: '#ffe4e1',
[theme.breakpoints.down('md')]:{
    padding: '0px 0px',
    marginLeft: '20px', 
    marginRight: '20px',
    textAlign: 'center',
    fontSize: '15px'
}

}));


const Text2=styled(Typography)(({ theme})=>({
    fontSize: '30px',
    marginLeft: '170px',  
    marginTop: '30px', 
    marginRight: '170px',
    padding: '20px 35px',
    fontFamily: 'inherit',
    
    [theme.breakpoints.down('md')]:{
        padding: '20px 0px',
        marginLeft: '40px', 
        marginTop: '20px', 
        marginRight: '40px',
        textAlign: 'center',
        fontSize: '18px'
    }

}));
   



const Component = styled(Box)(({ theme}) => ({
    background: '#ffffff',
    marginTop: '20px', 
    borderRadius: '100px',
    textAlign: 'center',
    padding: '25px 35px',
     marginLeft: '40px', 
     marginBottom:'150px',
     marginRight: '40px',
     height:'unset' ,

    [theme.breakpoints.down('md')]:{
        padding: '0px 0px',
        textAlign: 'center', 
        marginTop: '10px', 
     marginBottom:'80px',
     marginLeft: '5px', 
     marginRight: '5px'
       }

}));
 
const Starttypo=styled (Typography)(({ theme})=>({ 
    fontSize:'20px',
    
    [theme.breakpoints.down('md')]:{ 
        fontSize: '15px'
    }

}));


const QButton =styled(Button)(({ theme}) => ({
    marginLeft: '20px',
    marginRight: '20px',
    borderRadius:'20px', 
    marginTop: '20px', 
    marginBottom:'40px',
    color: '#f08080',
    background:'#ffe4e1', 
    textTransform: 'none',
    padding: '5px 30px', 
    boxShadow: '0 1px 1px 0 rgb(0 0 0/ 10%)',
  [theme.breakpoints.down('md')]:{
        padding: '5px 5px',
        textAlign: 'center',
        marginTop: '13px', 
        marginBottom:'15px',
         fontSize: '16px'
       }

}));



const NButton =styled(Button)(({ theme}) => ({
    marginLeft: '50px',
    marginRight: '50px',
    borderRadius:'10px', 
    marginTop: '40px', 
    fontSize: '15px',
    marginBottom:'40px',
    color: '#ffffff',
    background:'#f08080', 
    textAlign:'center',
    textTransform: 'none',
    padding: '10px 30px', 
    boxShadow: '0 1px 1px 0 rgb(0 0 0/ 10%)',
  [theme.breakpoints.down('md')]:{
        padding: '2px 2px',
        marginTop: '10px', 
        marginBottom:'10px',
        textAlign: 'center',
         fontSize: '15px'
       }

}));
       
      
const Result =() => {

    const [text,setText]=useState('');
            
    const {pets} =useSelector(state=> state.getPets);
    const dispatch= useDispatch();
    useEffect(()=> {
        dispatch(getPets())

    },[dispatch])

    

    const getText=(text)=>{
        setText(text);
    }






    const [text2,setText2]=useState('');
              
    

    const getText2=(text2)=>{
        setText2(text2);
    }



    
    const [text3,setText3]=useState('');
    const getText3=(text3)=>{
        setText3(text3);
    }


    const [text4,setText4]=useState('');
    const getText4=(text4)=>{
        setText4(text4);
    }
    
    const [text5,setText5]=useState('');
    const getText5=(text5)=>{
        setText5(text5);
    }


    const [text6,setText6]=useState('');
    const getText6=(text6)=>{
        setText6(text6);
    }

    const [text7,setText7]=useState('');
    const getText7=(text7)=>{
        setText7(text7);
    }

    const [text8,setText8]=useState('');
    const getText8=(text8)=>{
        setText8(text8);
    }




 


    return (
        <Component textAlign="center" style ={{padding:'2px 2px'   }} >   
                  
                  <Text2 style={{  fontWeight:1000, color: '#f08080'}}>
                    Compatibilty Check
                </Text2> 
                 <Divider light />

                  {
               !text && 
               <Box>
                
                 


                <Text2 style={{  fontWeight:800, color: '#f08080'}}>
                Considering the space available</Text2> 
                 
                <Text style={{  color: '#f08080'}}>
                Is your home spacious enough for the huge dogs or does it have free lawns near by?
                  </Text> 
 
                <Box style={{textAlign:'center'}}>

                               
                  <QButton variant='outlined'color="error" onClick ={(e) => getText('small')} value={text}>
                    <Starttypo style ={{ fontWeight:550}}>
                        No, it is a small flat.
                        </Starttypo> 
                    </QButton>  

                        <QButton variant='outlined'color="error" onClick ={(e) => getText('small')} value={text}>
                    <Starttypo style ={{ fontWeight:550}}>
                        Not really but I usually prefer the smaller ones.
                        </Starttypo>
                        </QButton> 
       
       <QButton variant='outlined'color="error" onClick ={(e) => getText('large')} value={text}>
         <Starttypo style ={{ fontWeight:550}}>
             There is enough space and I want one of those big dogs.
             </Starttypo>
             </QButton> 

             
       <QButton variant='outlined'color="error" onClick ={(e) => getText('a')} value={text}>
         <Starttypo style ={{ fontWeight:550}}>
             Enough space for either.
             </Starttypo>
             </QButton> 

                          
                          
               
                    
                </Box>
                
                <Divider light /> 

                </Box>
}


               {
               text && !text3 &&
               <Box>
                
                <Text2 style={{  fontWeight:800, color: '#f08080'}}>
                Pick the range</Text2> 
                 
                <Text style={{  color: '#f08080'}}>
                Prices vary a lot with different Breeds. Let us know your price range, so that we can fetch you the best choice within it.
                 </Text> 
 
                
                
                  <Box style={{textAlign:'center'}}>
       
                  <QButton variant='outlined'color="error" onClick ={  (e) => getText3('cheap')} value={text3}>
                    <Starttypo style ={{ fontWeight:550}}>
                    within 15,000.
                        </Starttypo>
                        </QButton> 

                          
                          
                          
                  <QButton variant='outlined'color="error" onClick ={(e) => getText3('within')} value={text3}>
                    <Starttypo style ={{fontWeight:550}}>
                    Not more than 30,000.
                        </Starttypo> 
                    </QButton>  


                    <QButton variant='outlined'color="error" onClick ={(e) => getText3('a')} value={text3}>
                    <Starttypo style ={{fontWeight:550}}>
                    No limit! Just fetch me my perfect pet.
                        </Starttypo> 
                    </QButton>  
                    
                </Box>

                
                <Divider light /> 
                
               </Box>

    }

            




            {
                !text2 && text3 &&
                <Box>
                    
                
                <Text2 style={{  fontWeight:800, color: '#f08080'}}>
                Considering your lifestyle.</Text2> 
                 
                <Text style={{  color: '#f08080'}}>
                Can you handle a sporty dog which needs to be taken on walks every now and then?
                  </Text> 
 
                <Box style={{textAlign:'center'}}>
       
                  <QButton variant='outlined'color="error" onClick ={(e) => getText2('moreactive')} value={text2}>
                    <Starttypo style ={{ fontWeight:550}}>
                        YES, lets go for a sporty one!
                        </Starttypo>
                        </QButton> 

                          
                          
                          
                  <QButton variant='outlined'color="error" onClick ={(e) => getText2('lessactive')} value={text2}>
                    <Starttypo style ={{  fontWeight:550}}>
                        Not really, can't handle the sporty one.

                        </Starttypo> 
                    </QButton>  

                    <QButton variant='outlined'color="error" onClick ={(e) => getText2('a')} value={text2}>
                    <Starttypo style ={{  fontWeight:550}}>
                       To be honest, either would be nice.

                        </Starttypo> 
                    </QButton>  
                    
                </Box>
                
                <Divider light />
                
                </Box>
}


{
                text2 && !text4 &&
                <Box>

                <Text2 style={{  fontWeight:800, color: '#f08080'}}>
                Choose your type
                </Text2> 
                 
                <Text style={{  color: '#f08080'}}>
                What are your preferences? Do you want a small cuddly Toy dog or a Hound, a companion or sports? </Text> 
 
                <Box style={{textAlign:'center'}}>


                <QButton variant='outlined'color="error" onClick ={(e) => getText4('sporting')} value={text4}>
                    <Starttypo style ={{ fontWeight:550}}>
                    Sporting Group
                        </Starttypo> 
                    </QButton>  
       
                 

                          
                          
                          
                  <QButton variant='outlined'color="error" onClick ={(e) => getText4('companion')} value={text4}>
                    <Starttypo style ={{ fontWeight:550}}>
                    Companion Dogs
                        </Starttypo> 
                    </QButton>  


                    <QButton variant='outlined'color="error" onClick ={(e) => getText4('hound')} value={text4}>
                    <Starttypo style ={{  fontWeight:550}}>
                    Hound Breed
                        </Starttypo> 
                    </QButton>  
                    <QButton variant='outlined'color="error" onClick ={(e) => getText4('toy')} value={text4}>
                    <Starttypo style ={{ fontWeight:550}}>
                    Toy Breed
                        </Starttypo>
                        </QButton> 

                 
                    
                </Box>
                
                <Divider light />

                </Box>

}


{
                text4 && !text5 &&
                <Box> 

                
                <Text2 style={{  fontWeight:800, color: '#f08080'}}>
                Considering the maintenance level required. </Text2> 
                 
                <Text style={{  color: '#f08080'}}>
                Do you travel a lot? If yes, do you prefer to take the dog along or not? Small dogs are
                 more likely to be welcomed everywhere, especially when traveling. Even if you like to travel without the pet,
                 a reliable low maintenance dog might be more compatible.  
                 </Text> 
 
                <Box style={{textAlign:'center'}}>
       
                  <QButton variant='outlined'color="error" onClick ={(e) => getText5('travelwithonly')} value={text5}>
                    <Starttypo style ={{  fontWeight:550}}>
                    I travel a lot, and want a pet I can take along.
                        </Starttypo>
                        </QButton> 

                          
                          
                          
                  <QButton variant='outlined'color="error" onClick ={(e) => getText5('a')} value={text5}>
                    <Starttypo style ={{fontWeight:550}}>
                    I do not travel that much.
                        </Starttypo> 
                    </QButton>  


                    <QButton variant='outlined'color="error" onClick ={(e) => getText5('a')} value={text5}>
                    <Starttypo style ={{ fontWeight:550}}>
                    There is always someone who can look after the pet when I am travelling.
                        </Starttypo> 
                    </QButton>  

                    
                    <QButton variant='outlined'color="error" onClick ={(e) => getText5('travelwithout')} value={text5}>
                    <Starttypo style ={{ fontWeight:550}}>
                    I travel a lot and want a low maintenance dog.
                        </Starttypo> 
                    </QButton>  

                    
                </Box>
                
                <Divider light />

                </Box>
}





{
                text5 && !text6 &&
                <Box> 
                

                <Text2 style={{  fontWeight:800, color: '#f08080'}}>
                Considering the climatic condition</Text2> 
                 
                <Text style={{  color: '#f08080'}}>
                How will you describe the climate of your place? Is it too hot for our furry friend?
                
                 </Text> 

                 <QButton variant='outlined'color="error" onClick ={(e) => getText6('hot')} value={text6}>
                    <Starttypo style ={{ fontWeight:550}}>
                     Yes, extremely hot 
                        </Starttypo> 
                    </QButton>  
 
                <Box style={{textAlign:'center'}}>
       
                  <QButton variant='outlined'color="error" onClick ={(e) => getText6('cold')} value={text6}>
                    <Starttypo style ={{ fontWeight:550}}>
                    No, it is actually cold.
                    
                    </Starttypo>
                        </QButton> 

                          
                          
                          
                 

                    <QButton variant='outlined'color="error" onClick ={(e) => getText6('a')} value={text6}>
                    <Starttypo style ={{ fontWeight:550}}>
                    Neither, it is kind of pleasent.
                        </Starttypo> 
                    </QButton>  

                    
                </Box>
                
                <Divider light />

                </Box>
}


{
               !text8 &&  text6 &&
                <Box> 
                
                <Text2 style={{  fontWeight:800, color: '#f08080'}}>
                Considering your living requirement</Text2> 
                 
                <Text style={{  color: '#f08080'}}>
                Do you live alone and need a dog that people would be afraid of? Or do you want your pet to be welcoming to all, and specially kids friendly?
                  </Text> 
 
                <Box style={{textAlign:'center'}}>
       
                  <QButton variant='outlined'color="error" onClick ={(e) => getText8('scare')} value={text8}>
                    <Starttypo style ={{  fontWeight:550}}>
                        Yes a guard dog, that scares the thiefs away!
                        </Starttypo>
                        </QButton> 

                          
                          
                          
                  <QButton variant='outlined'color="error" onClick ={(e) => getText8('friendly')} value={text8}>
                    <Starttypo style ={{  fontWeight:550}}>
                        I want my pet to be human friendly.
                        </Starttypo> 
                    </QButton>  
                    
                </Box>

                
                <Divider light />

                </Box>
}

                


{

text && text2 && text3 && text4 && text5 && text6 && text8 && !text7 &&


<Text2 style={{ marginTop:'30px', fontWeight:800, color: '#f08080'}}>
Thank you for your response
  </Text2> 

}
           




{

text && text2 && text3 && text4 && text5 && text6 && text8 && !text7 &&


<Text style={{  color: '#f08080'}}>
Click here to find out your compatible pet breed.  
  </Text> 

}

                {

                    text && text2 && text3 && text4 && text5 && text6 && text8 &&   !text7 &&
                    <Box>
                        

                    <NButton style={{ fontSize:'15px'}} variant='outlined'  color="error" onClick ={(e) => getText7(' result')} value={text7}> 
                    View Result
                    </NButton> 
  <Divider  />
                    </Box>


                }
                 








                 {
                                         text && text2 && text7 && text3 && text4 && text5 && text6 && text8&& <Typography style={{ marginTop:'20px', fontWeight:700, color: '#f08080'}}>
                                         Based on your choices, your best fit would be....</Typography> 
                                     }

                  


                {
                      text && text2 && text7 && text3 && text4 && text5 && text6 && text8&&
                    <ListWrapper>
                        {
                            pets.filter(pet=> pet.keys.toLowerCase().includes(text.toLowerCase()) &&  pet.keys.toLowerCase().includes(text2.toLowerCase())  &&  pet.keys.toLowerCase().includes(text3.toLowerCase())  &&  pet.keys.toLowerCase().includes(text4.toLowerCase())  &&  pet.keys.toLowerCase().includes(text5.toLowerCase())   &&  pet.keys.toLowerCase().includes(text6.toLowerCase())   &&  pet.keys.toLowerCase().includes(text8.toLowerCase())  ).map(pet=>(

                                    <ListItem>
                                    <Link 
                                    to={`/${pet.id}`}
                                    onClick={()=> setText('')}
                                    style={{ textDecoration: 'none', display:'flex',color:'inherit'}}
                                    >
                                    <Image src={pet.url} alt ="pet" />   <Typography  style={{ marginLeft:'20px', marginTop:'auto'}} >{pet.title.shortTitle}   </Typography>
 

                                    <Divider light absolute />

                                    </Link>

                                </ListItem>
                          
                           
                           
                           ))
                        }
                    </ListWrapper>
                 }


{
                        text && text2 && text7 && text3 && text4 && text5 && text6 && text8&& <Text style={{ marginTop:'5px', fontWeight:800, color: '#f08080'}}>
                          Click on the breed to know more
                       
                       </Text> 
                    }


              
                 



                    {    text && text2 && text7 && text3 && text4 && text5 && text6 && text8 &&
                      <Link to={`/`} style={{ textDecoration: 'none'}}>
                    <NButton  variant='outlined'  color="error" > 
                        Back to Home Page. 
                    </NButton>
                  </Link>


                    }

                
              








                  </Component>

    )
}

export default Result;