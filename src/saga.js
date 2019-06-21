import { put, call, take, all } from 'redux-saga/effects';
import * as action from './actions/actions';
import actionType from './actions/actionsType';

const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,RUB,UAH';

function* currencyAcync() {
    try {
        const data = yield call(() => {
            return fetch(url).then(res => res.json());
        })
        console.log(data, 'data');
        yield put(action.currencyLoadedsuccess(data));
    }
    catch (error) {
        yield put(action.currencyLoadederror())
    }
}



function* watchCurrencyRequest() {
    while (true) {
        yield take(actionType.CURRENCY_REQUEST);
        yield call(currencyAcync)
    }

}
export default function* () {
    yield all([
        watchCurrencyRequest()
    ])
}