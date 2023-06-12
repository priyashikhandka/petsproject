import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 


import {Link} from 'react-router-dom';
import {Box , Typography, Divider, styled} from '@mui/material';

import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';


const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
};

const Component =styled(Box)`
    margin-top:10px;
    background: #fff0f5;
`;

const ImageBox =styled(Box)`
align-items: center;
`;






const Breeds =styled(Box)`
    padding: 15px 20px;
    display:flex;
`
;


const BreedText=styled(Typography)`
    margin-left: 0px;
    line-height: 30px;
`;



const Image=styled('img') ({
    width: 'unset',
    height: 130,
    
});

const Text =styled(Typography)`
    font-size: 12px;
    margin-top: 0px;

`


const Slide= ({pets})=> {
    return(
        <Component>
            <Breeds>
                <Typography display='flex'  style ={{ color:'#f08080'}}>
                 
                    <BreedText style ={{ color:'#f08080' ,fontWeight:600,fontSize:14, marginTop:0, marginRight:5, width:'unset'}}>
                    
                    Check out the breeds and get to know the best fit for you!
                   
                    </BreedText>


                    <Typography style ={{ marginTop:3, width:'unset'}}>
                    <LoyaltyOutlinedIcon  />
                    </Typography>
                    

                </Typography>

            </Breeds>
            <Divider/>
       <Carousel
       responsive={responsive}
       swipeable={false}
       draggable={false}
       infinite={true}
       
       showDots={false}
       autoPlay={true}
       autoPlaySpeed={2000}
       keyBoardControl={true}
       slidesToSlide={1}
       centerMode={true}
       containerClass="carousel-container"
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
       
       
       >
 
        {
            pets.map(pet=>(

                <Link to={`/${pet.id}`} style={{ textDecoration: 'none'}}>

                <ImageBox textAlign="center" style ={{padding:'25px 25px'   }}>
                <Image src={pet.url} alt ="pet" />
             
             
                <Text style={{ fontWeight:600, color: '#696969'}}>
                        {pet.title.shortTitle}
                </Text>


                <Text style={{ color: '#696969', opacity:'.7'}}>
                    {pet.Group}
                </Text>


                <Text style={{ color: '#f08080', opacity:'.9'}}>
                    {pet.tagline}
                </Text>


                </ImageBox>

                </Link>

            ))
        }
 
       </Carousel> 
       </Component>


    )
}
export default Slide;