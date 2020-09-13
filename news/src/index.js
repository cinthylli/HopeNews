import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers, // Reducers
  {}, //Estado Inicial
  composeWithDevTools(applyMiddleware(reduxThunk))

)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


