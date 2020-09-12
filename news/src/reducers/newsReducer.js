import {
    TRAER_BUSQUEDA,
    TRAER_TODAS,
    TRAER_TODAS_CATEGORIA,
    CARGANDO, ERROR
} from '../types/newsTypes';

const INITIAL_STATE = {
    title: "Titulares",
    date: "",
    page: 1,
    news: [],
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CARGANDO:
            return {
                ...state,
                loading: true
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case TRAER_TODAS:
            return {
                ...state,
                news: action.payload,
                loading: false
            }
        case TRAER_BUSQUEDA:
            return {
                ...state,
                news: action.payload,
                loading: false
            }
        // case TRAER_TODAS_CATEGORIA:
        //     return {
        //         ...state,
        //         news: action.payload
        //     }
        default:
            return state;
    }

}