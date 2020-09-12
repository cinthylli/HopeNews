import {
    TRAER_BUSQUEDA,
    TRAER_TODAS,
    TRAER_TODAS_CATEGORIA
} from '../types/newsTypes';

const INITIAL_STATE = {
    title: "Titulares",
    endpoint: "",
    date: "",
    page: 1,
    news: [],
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_TODAS:
            return {
                ...state,
                news: action.payload
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