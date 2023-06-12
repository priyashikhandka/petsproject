import * as actionType from '../constants/petConstant';

export const getPetsReducer=( state={pets:[]}, action)=> {
    switch(action.type){

        case actionType.GET_PETS_SUCCESS:
            return { pets: action.payload}

        case actionType.GET_PETS_FAIL:
            return { error: action.payload}

        default:
            return state
    }



}

export const getPetDetailsReducer = (state={pet: {} }, action)=>{

    switch(action.type)
    {
        case actionType.GET_PET_DETAILS_REQUEST:
            return{
                loading:true
            }

        case actionType.GET_PET_DETAILS_SUCCESS:
                return{ loading: false , pet: action.payload   }

        case actionType.GET_PET_DETAILS_FAIL :
                    return{ loading: false, error: action.payload}
        
         case actionType.GET_PET_DETAILS_RESET: return{pet:{}}

         default:
                            return state


    }
}