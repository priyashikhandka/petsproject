

import axios from 'axios';

import * as actionTypes from '../constants/petConstant';

const URL='';

export const getPets =()=>async(dispatch)=> {
    try{

        const {data} =await axios.get(`${URL}/pets`);
         dispatch({type: actionTypes.GET_PETS_SUCCESS , payload: data })

    }
    catch(error)
    {
        dispatch({type: actionTypes.GET_PETS_FAIL, payload: error.message})
    }
}

export const getPetDetails= (id)=> async(dispatch)=>{

    try{
        dispatch({ type: actionTypes.GET_PET_DETAILS_REQUEST });

        const {data} =await axios.get(`${URL}/pet/${id}`);

           dispatch({type: actionTypes.GET_PET_DETAILS_SUCCESS , payload: data })


        

    }catch(error){
        dispatch({type: actionTypes.GET_PET_DETAILS_FAIL , payload: error.message })

        


    }

}