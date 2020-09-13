import axios from 'axios'
import {
    TRAER_TODAS,
    TRAER_BUSQUEDA,
    CARGANDO,
    ERROR,
    MOSTRAR_DIEZ,
    GUARDAR_BUSQUEDA,
    MOSTRAR_DIEZ_ANTERIORES
    
} from '../types/newsTypes'
export const traerTodas = ({ date }) => async (dispatch) => {

    dispatch({
        type: CARGANDO
    })
    // const response = await axios.get(`${this.url}${this.state.endpoint}${this.state.date}`);
    try {
        const url = `https://api.canillitapp.com/latest/${date}`;
        const response = await axios.get(`${url}`);
        dispatch({
            type: TRAER_TODAS,
            payload: response.data
        })

        dispatch({
            type: MOSTRAR_DIEZ
        })

    } catch (error) {
        console.error("error:", error.message);
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }

}

export const traerDiezAnteriores = () => (dispatch) => {
    console.log("traerDiezAnteriores");
    dispatch({
        type: CARGANDO
    })
}

export const traerDiezSiguientes = () => (dispatch) => {
    console.log("traerDiezSiguientes");
    dispatch({
        type: CARGANDO
    })

    dispatch({
        type: CARGANDO
    })
}

export const guardarBusqueda = ({ search }) => (dispatch) => {
    console.log("GUARDAR_BUSQUEDA");
    dispatch({
        type: GUARDAR_BUSQUEDA,
        payload: search
    })
}

export const traerTodasCategoria = ({ category }) => async (dispatch) => {
    const url = `https://api.canillitapp.com/news/category/${category}`;
    // const response = await axios.get(`${this.url}${this.state.endpoint}${this.state.date}`);
    dispatch({
        type: CARGANDO
    })
    console.log(url);
    try {
        const response = await axios.get(url);
        dispatch({
            type: TRAER_TODAS,
            payload: response.data
        })
    } catch (error) {
        console.error("error:", error.message);
    }
    dispatch({
        type: MOSTRAR_DIEZ
    })

}

export const traerBusqueda = ({search}) => async (dispatch) => {

    const url = `https://api.canillitapp.com/search/${search}`;
    console.log("url",url);
    // const response = await axios.get(`${this.url}${this.state.endpoint}${this.state.date}`);
    try {
        const response = await axios.get(`${url}`);

        dispatch({
            type: TRAER_BUSQUEDA,
            payload: response.data
        })

    } catch (error) {
        console.error("error:", error.message);
    }
}