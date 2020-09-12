import axios from 'axios'
import { TRAER_TODAS, TRAER_TODAS_CATEGORIA, TRAER_BUSQUEDA } from '../types/newsTypes'
export const traerTodas = ({ date }) => async (dispatch) => {
    const url = `https://api.canillitapp.com/latest/${date}`;
    // const response = await axios.get(`${this.url}${this.state.endpoint}${this.state.date}`);
    const response = await axios.get(`${url}`);

    console.log("news: ", response);

    dispatch({
        type: TRAER_TODAS,
        payload: response.data
    })
}

export const traerTodasCategoria = ({ category }) => async (dispatch) => {
    const url = `https://api.canillitapp.com/news/category/${category}`;
    // const response = await axios.get(`${this.url}${this.state.endpoint}${this.state.date}`);
    const response = await axios.get(url);

    console.log("url: ", url);
    console.log("news: ", response);

    dispatch({
        type: TRAER_TODAS_CATEGORIA,
        payload: response.data
    })
}

export const traerBusqueda = ({ search }) => async (dispatch) => {
    const url = 'https://api.canillitapp.com/${search}';
    // const response = await axios.get(`${this.url}${this.state.endpoint}${this.state.date}`);
    const response = await axios.get(`${url}`);

    console.log("url: ", url);
    console.log("news: ", response);

    dispatch({
        type: TRAER_BUSQUEDA,
        payload: response.data
    })
}