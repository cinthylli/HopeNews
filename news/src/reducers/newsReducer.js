import {
    TRAER_BUSQUEDA,
    TRAER_TODAS,
    TRAER_TODAS_DEPORTES,
    TRAER_TODAS_DISENO,
    TRAER_TODAS_INTERNACIONAL,
    TRAER_TODAS_POLITICA,
    TRAER_TODAS_TECNOLOGIA,
    NOTICIAS_PRESENTADAS,
    MOSTRAR_DIEZ,
    MOSTRAR_DIEZ_ANTERIORES,
    GUARDAR_BUSQUEDA,
    CARGANDO,
    ERROR
} from '../types/newsTypes';

const INITIAL_STATE = {
    title: "Titulares",
    page: 0,
    news: [],
    newsPresented: [],
    currentNews: [],
    loading: false,
    error: '',
    search: ''
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
                loading: false,
                title: 'Las ultimas noticias',
                newsPresented: [],
                currentNews: [],
            }
        case TRAER_TODAS_DEPORTES:
            return {
                ...state,
                news: action.payload,
                loading: false,
                title: 'DEPORTES',
                newsPresented: [],
                currentNews: [],
            }
        case TRAER_TODAS_POLITICA:
            return {
                ...state,
                news: action.payload,
                loading: false,
                title: 'POLITICA',
                newsPresented: [],
                currentNews: [],
            }
        case TRAER_TODAS_DISENO:
            return {
                ...state,
                news: action.payload,
                loading: false,
                title: 'DISEÑO',
                newsPresented: [],
                currentNews: [],
            }
        case TRAER_TODAS_TECNOLOGIA:
            return {
                ...state,
                news: action.payload,
                loading: false,
                title: 'TECNOLOGIA',
                newsPresented: [],
                currentNews: [],
            }
        case TRAER_TODAS_INTERNACIONAL:
            return {
                ...state,
                news: action.payload,
                loading: false,
                title: 'INTERNACIONAL',
                newsPresented: ["te"],
                currentNews: [],
            }
        case TRAER_BUSQUEDA:
            return {
                ...state,
                page: 0,
                news: action.payload,
                title: "Resultado Busqueda",
                loading: false
            }
        case MOSTRAR_DIEZ:
            return {
                ...state,
                newsPresented: [...state.newsPresented, ...state.news.slice(10)],
                currentNews: [state.news.slice(10)],
                page: state.page + 1,
                loading: false
            }
            case MOSTRAR_DIEZ_ANTERIORES:
                return {
                    ...state,
                    newsPresented: [...state.newsPresented, ...state.news.slice(0,10)],
                    currentNews: [...state.news.slice(0,10)],
                    page: state.page - 1,
                    loading: false
                }
        case NOTICIAS_PRESENTADAS:
            return {
                ...state,
                newsPresented: [...state.props.newsPresented]
            }
        case GUARDAR_BUSQUEDA:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }

}