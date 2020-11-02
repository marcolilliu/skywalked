import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/main'
import SimpleTopbar from './components/simple_topbar/main'
import SimpleTable from './components/simple_table/main'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SimpleTopbar />
            <SimpleTable />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);