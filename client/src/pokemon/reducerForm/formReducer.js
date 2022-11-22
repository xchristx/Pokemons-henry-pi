const initialState = {
    name: {value:'', isValid: null},
    weight: {value:'', isValid: null},
    hp: {value:'', isValid: null},
    height: {value:'', isValid: null},
    attack: {value:'', isValid: null},
    defense: {value:'', isValid: null},
    speed: {value:'', isValid: null},
    Types:[],
    validCheckBox:null,
    validForm:null
}

export const formReducer = (state = initialState, action)=>{

    switch (action.type) {
        case 'SET_INPUT_VALUE':
            return{
                ...state,
                [action.payload.name] : {value: action.payload.value, isValid: state[action.payload.name].isValid}
            };
        case 'SET_INPUT_VALID':
            return{
                ...state,
                [action.payload.name] : {isValid: action.payload.isValid, value: state[action.payload.name].value}
            }
        case 'SET_TYPE':
            return{
                ...state,
                Types: [...state.Types, action.payload]
            }
        case 'REPLACE_TYPE':
            return{ 
                ...state,
                Types:action.payload
            }
        case 'SET_VALID_CHECKBOX':
            return{
                ...state,
                validCheckBox: action.payload
            }
        case 'VALID_FORM':
            return{
                ...state,
                validForm: action.payload
            }
        case 'RESET_FORM':
            return initialState;


        default:
            return state;
    }

}
export const verifNull = () => (dispatch, getState)=>{
    const formState = getState().formReducer;
    for (const key in formState) {
        if( formState[key] instanceof Object  
            && formState[key].hasOwnProperty('isValid')
            && formState[key].isValid === null){
                dispatch({type: 'SET_INPUT_VALID', payload: {name: key, isValid: false}})
            }
    }
}