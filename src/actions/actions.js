import actionType from './actionsType';

export function requestCurrency() {
    return {
        type: actionType.CURRENCY_REQUEST
    }
}

export function currencyLoadedsuccess(allCurrencies) {
    return {
        type: actionType.CURRENCIES_LOADED_SUCCESS,
        payload: allCurrencies
    }
}

export function currencyLoadederror() {
    return {
        type: actionType.CURRENCIES_LOADED_ERROR
    }
}

export function onChangeCurrency(activeCurrency) {
    return {
        type: actionType.ON_CHANGE_CURRENCY,
        payload: activeCurrency
    }
}