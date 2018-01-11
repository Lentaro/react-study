import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { counter, addGUN, jianGUN, addGUNAsync } from './index.redux'

//结合chrom中的redux tools插件使用
const reduxDevtools = windew.devToolsExtension
//创建store并结合中间件thunk
const store = createStore(counter, applyMiddleware(thunk))


function render(){
    ReactDOM.render(<App store={store} addGUN={addGUN} jianGUN={jianGUN} addGUNAsync={addGUNAsync} />, document.getElementById('root'))
}
render()
registerServiceWorker();
//订阅到store改变后重新render整个页面
store.subscribe(render)