import React,{Component} from 'react'
import style from '../index.module.css'
import {connect} from 'react-redux'
import {hideTabbar,showTabbar}from '../../Package/action'
class New extends Component{
    render(){
        return<div>
                <p onClick={()=>{
                    this.props.history.push("/my")
                }} className={style.reset}>返回</p>
                <div className={style.New_frist}>
                <input type="text" className={style.user_name_input} placeholder="请输入手机号"/>
                <input type="text" className={style.user_name_input} placeholder="请输入短信验证码"/>
                <input type="text" className={style.user_name_input} placeholder="设置密码(6-16个字符)"/>

                <div className={style.login_in}>
                    立即注册
                </div>
            </div> 
            
        </div>
    }
    componentDidMount(){
        this.props.hideTabbar();
    }
    componentWillUnmount(){
        this.props.showTabbar();
    }
}


var mapStateToProps = ()=>{
return {

}
}

var mapDispatchToProps = {
getMoney(){
    console.log("需要钱")
},
hideTabbar,
showTabbar

}


export default connect(mapStateToProps,mapDispatchToProps)(New);