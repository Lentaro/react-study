import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

// import App from './App';
// import { counter } from './index.redux'
import reudcers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'
// import reducers from './reducer';

//结合chrom中的redux tools插件使用
//创建store并结合中间件thunk
const store = createStore(reudcers, 
//使用compose对几个函数进行组合
compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))
// console.log(store.getState())
// class Test extends Component{
//     render(){
//         console.log(this.props)
//         // this.props.history.push('/')
//         return <h2>测试{this.props.match.params.location}</h2>
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/* 只渲染第一个Route */}
                <Route path='/login' component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))
// render()
registerServiceWorker();
//订阅到store改变后重新render整个页面,使用了react-redux后不再需要subscribe
// store.subscribe(render)
