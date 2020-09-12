import axios from 'axios'
import { TRAER_TODAS, TRAER_TODAS_CATEGORIA, TRAER_BUSQUEDA, CARGANDO, ERROR } from '../types/newsTypes'
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
        console.log("news: ", response);

    } catch (error) {
        console.error("error:", error.message);
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }

}

export const traerTodasCategoria = ({ category }) => async (dispatch) => {
    const url = `https://api.canillitapp.com/news/category/${category}`;
    // const response = await axios.get(`${this.url}${this.state.endpoint}${this.state.date}`);
    try {
        const response = await axios.get(url);
        dispatch({
            type: TRAER_TODAS_CATEGORIA,
            payload: response.data
        })
        console.log("url: ", url);
        console.log("news: ", response);
    } catch (error) {
        console.error("error:", error.message);
    }

}

export const traerBusqueda = ({ search }) => async (dispatch) => {
    const url = 'https://api.canillitapp.com/${search}';
    // const response = await axios.get(`${this.url}${this.state.endpoint}${this.state.date}`);
    try {
        const response = await axios.get(`${url}`);
        console.log("url: ", url);

        dispatch({
            type: TRAER_BUSQUEDA,
            payload: response.data
        })

    } catch (error) {
        console.error("error:", error.message);
    }
}