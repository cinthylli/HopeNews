import {
    TRAER_BUSQUEDA,
    TRAER_TODAS,
    MOSTRAR_DIEZ,
    CARGANDO, ERROR
} from '../types/newsTypes';

const INITIAL_STATE = {
    title: "Titulares",
    page: 0,
    news: [],
    newsPresented: [],
    loading: false,
    error: '', 
    search:''
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
                title: action.payload,
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
                title: "Resultado Busqueda",
                loading: false
            }
        case MOSTRAR_DIEZ:
            return {
                ...state,
                newsPresented: [...this.props.newsPresented, ...this.props.news.slide(10)],
                page: this.props.page + 1,
                loading: false
            }

        default:
            return state;
    }

}