import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import App from './App'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'

import { logout } from './Auth.redux'

function er(){
    return <h2>2</h2>
}
function san(){
    return <h2>3</h2>
}
@connect(
    state=>state.auth,
    {logout}
)
class Dashboard extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        // console.log(this.props)
        const match = this.props.match
        // console.log(match)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                {this.props.isAuth?<Button onClick={this.props.logout}>注销</Button>:null}
                <ul>
                    <li>
                        <Link to={`${match.path}/`}>一</Link>
                    </li>
                    <li>
                        <Link to={`${match.path}/2`}>二</Link>
                    </li>
                    <li>
                        <Link to={`${match.path}/3`}>三</Link>
                    </li>
                </ul>
                <Route path={`${match.path}/`} exact component={App}></Route>
                <Route path={`${match.path}/2`} exact component={er}></Route>
                <Route path={`${match.path}/3`} exact component={san}></Route>
            </div>
        )
        return (
            this.props.isAuth?app:redirectToLogin
        )
    }
}

export default Dashboard