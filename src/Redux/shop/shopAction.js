import { ADD_TO_CART, SEARCH, MENUCLICK, DATEUPDATE, SEARCHBUTTON, REDIRECT, FETCHITEMSSTART, FETCHITEMSSUCCESS, FETCHITEMSERROR, BREADCRUMB } from './shopType'
import axios from 'axios'
export const addCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const searchIt = (item) => {
    return {
        type: SEARCH,
        payload: item
    }
}

export const menuClick = () => {
    return {
        type: MENUCLICK
    }
}

export const dateUpdate = (date) => {
    return {
        type: DATEUPDATE,
        payload: date
    }
}
export const searchButtonToggel = () => {
    return {
        type: SEARCHBUTTON
    }
}
export const redirected = () => {
    return {
        type: REDIRECT
    }
}
export const fetchStart = () => {
    return {
        type: FETCHITEMSSTART
    }
}
export const fetchSuccess = (data) => {
    return {
        type: FETCHITEMSSUCCESS,
        payload: data
    }
}
export const fetchError = (err) => {
    return {
        type: FETCHITEMSERROR,
        payload: err
    }
}
export const fetchItems = (data) => {
    return (dispatch) => {
        dispatch(fetchStart())
        axios.get('https://ali-express1.p.rapidapi.com/search', {
            params: {
                "from": "0",
                "limit": "15",
                "country": "CO",
                "query": data
            },
            headers: {
                "x-rapidapi-host": "ali-express1.p.rapidapi.com",
                "x-rapidapi-key": "5914e4982bmsh6d3b96ad85cab93p1cf666jsncdefbc3986af",
                "useQueryString": true
            }
        }).then(res => {
            const items = res.data
            dispatch(fetchSuccess(items))
        }).catch(err => {
            const error = err.message;
            dispatch(fetchError(error))
        })

    }
}
export const clickCategory = (data) => {
    return{
        type: BREADCRUMB,
        payload: data
    }
}