
const initialState = {
    pokemons: [],
    allPokemons: [],
    isLoading: true,
    error:null,
    filterType: 'All',
    show: 'All'
}

export const pokemonReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'FETCH_INIT_POKEMONS':
            return {
                ...state,
                isLoading: true
            };
        case 'SUCCESS_FETCH_INIT_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                subFilter: action.payload,
                allPokemons: action.payload,
                isLoading: false
            }
        
        case 'ERROR_FETCH_INIT_POKEMONS':
            return{
                ...state,
                error: action.payload,
                pokemons:[],
                isLoading: false
            }
        
        case 'GET_ALL_POKEMONS':
            return{
                ...state,
                pokemons: state.allPokemons
            }
        case 'SET_ERROR':
            return{
                ...state,
                error: action.payload
            }

        case 'ORDER_POKEMONS_ASC':
            const key = action.payload.key;
            return {
                ...state,
                pokemons: state.pokemons.sort((a,b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)),
                allPokemons: state.allPokemons.sort((a,b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))
            }
          
        case 'ORDER_POKEMONS_DESC':
            const keyDesc = action.payload.key;

            return {
                ...state,
                pokemons: state.pokemons.sort((b,a) => (a[keyDesc] > b[keyDesc] ? 1 : a[keyDesc] < b[keyDesc] ? -1 : 0)),
                allPokemons: state.allPokemons.sort((b,a) => (a[keyDesc] > b[keyDesc] ? 1 : a[keyDesc] < b[keyDesc] ? -1 : 0))
            };
        

        case 'FILTER_BY_TYPE':
            return {
                ...state,
                pokemons: action.payload.pokemons,
                filterType: action.payload.filterType,
                show: action.payload.show
            }
            
        case 'FILTER_BY_NAME':
            return{
                ...state,
                pokemons: action.payload
            }
        case 'UPDATE_POKEMONS':
            return{
                ...state,
                pokemons: state.subFilter
            }
        case 'FILTER_BY_CREATION':
            return{
                ...state,
                pokemons: action.payload,
            }
        case 'SET_ISLOADING_TRUE':
            return{
                ...state,
                isLoading: true
            }
        case 'SET_ISLOADING_FALSE':
            return{
                ...state,
                isLoading: false
            }
        case 'SET_POKEMON_DEF45':
            return{
                ...state,
                pokemons: action.payload
            }

        default:
            return state;
    }

}