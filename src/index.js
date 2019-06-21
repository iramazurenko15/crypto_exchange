import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import createSagaMiddleware from 'redux-saga';
import main_reducer from './main_reducer';
import watchCurrencyRequest from './saga';
import './styles.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(main_reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchCurrencyRequest);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)