import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { login, getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom'
import { Button } from 'antd-mobile'
import axios from 'axios'
//有两个reducers 每个都有state
//合并reducers
@connect(
    state=>state.auth,
    {login,getUserData}
)

class Auth extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         data:{}
    //     }
    // }
    componentDidMount(){
        this.props.getUserData()
    //     axios.get('/data')
    //         .then(res=>{
    //             if(res.state==200){
    //                 this.setState({data:res.data})
    //             }
    //         })
    }
    render(){
        return (
            <div>
                <h2>我的名字是{this.props.user}，年龄{this.props.age}</h2>
                {this.props.isAuth?<Redirect to='/dashboard'></Redirect>:null}
                <h2>你需要登录才能进入</h2>
                <Button onClick={this.props.login}>登陆</Button>
            </div>
        )
    }
}

export default Auth