import React from 'react';
import Tabbar from './Components'
import './App.css'
// import store from './Store'
import {connect} from 'react-redux'

class App extends React.Component{
  render(){
    return <div className="App_margin_top">
          {
            this.props.isShow?
            <Tabbar></Tabbar>
            :null
          }
          {
            this.props.children
          }
    </div>
  }

}

var mapStateToProps = (state)=>{
  return {
    card:"111111111111",
    isShow:state.tabbar
  }
}

var mapDispatchToProps = {

}


export default connect(mapStateToProps,mapDispatchToProps)(App);
