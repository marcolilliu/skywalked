import React from 'react'
import ReactDOM from 'react-dom'
import SimpleTopbar from './components/simple_topbar/index'
import SimpleTable from './components/simple_table/index'
import './index.css'

// Redux
import { Provider } from 'react-redux';
import { store } from './redux/redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SimpleTopbar />
            <SimpleTable />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);