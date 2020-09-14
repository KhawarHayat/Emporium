import { ADD_TO_CART, SEARCH, MENUCLICK, DATEUPDATE, SEARCHBUTTON, REDIRECT, FETCHITEMSSTART, FETCHITEMSSUCCESS, FETCHITEMSERROR, BREADCRUMB } from './shopType'

const initialState = {
    cartList: [],
    search: '',
    loading: false,
    menuOpen: false,
    date: '31-12-2020',
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    searchToggel: false,
    redirect: false,
    breadCrumb: 'Accessories',
    items: [],
    error: ''
}

export const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cartList: [...state.cartList, action.payload]
            }
        }
        case SEARCH: {
            return {
                ...state,
                search: action.payload
            }
        }
        case MENUCLICK: {
            return {
                ...state,
                menuOpen: !state.menuOpen
            }
        }
        case DATEUPDATE: {
            return {
                ...state,
                weeks: action.payload.weeks,
                days: action.payload.days,
                hours: action.payload.hours,
                minutes: action.payload.minutes,
                seconds: action.payload.seconds
            }
        }
        case SEARCHBUTTON: {
            return{
                ...state,
                searchToggel: !state.searchToggel
            }
        }
        case REDIRECT: {
            return{
                ...state,
                redirect: !state.redirect
            }
        }
        case FETCHITEMSSTART: {
            return{
                ...state,
                loading: true,
            }
        }
        case FETCHITEMSSUCCESS: {
            return{
                ...state,
                loading: false,
                items: action.payload,
                error: ''
            }
        }
        case FETCHITEMSERROR: {
            return{
                ...state,
                loading: false,
                error: action.payload,
                items: []
            }
        }
        case BREADCRUMB: {
            return{
                ...state,
                search: '',
                breadCrumb: action.payload
            }
        }
        default: return state
    }
}