import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route} from 'react-router-dom'
import Main from './containers/main/main'
import {Provider} from 'react-redux'

import store from './redux/store'
import './assets/css/index.less'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
                <Route component={Main}/>
        </HashRouter>
    </Provider>
    ,document.getElementById('root')
)


