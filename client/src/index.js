import React from 'react'
import reactDom from 'react-dom'
import {Provider } from 'react-redux'
import { createStore  , applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import  Reducer  from './reducers'

const store = createStore(Reducer,compose(applyMiddleware(thunk)))
reactDom.render(
            <Provider store={store}>
                  <App />
            </Provider>
        , document.getElementById('root'))