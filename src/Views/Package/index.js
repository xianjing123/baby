import React,{Component} from 'react'
import {hideTabbar,showTabbar}from './action'
import store from '../../Store'
import {connect} from 'react-redux'
class Package extends Component{

    render(){
        return <div onClick={this.handleClick.bind(this)}>Package</div>
    }
    handleClick(){
        this.props.history.push("/home")
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


export default connect(mapStateToProps,mapDispatchToProps)(Package);