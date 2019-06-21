import actionType from './actions/actionsType';

const initialState = {
    allCurrencies: [],
    selectedCurrency: 'USD',
    loading: false,
    error: false
}
const main_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ON_CHANGE_CURRENCY:
            return {
                ...state,
                selectedCurrency: action.payload
            }
        case actionType.CURRENCIES_LOADED_SUCCESS:
            return {
                ...state,
                allCurrencies: action.payload

            }
        default:
            return state
    }
}
export default main_reducer