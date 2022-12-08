//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../assets/css/style.css'

 class BurgerComponent extends Component {
  render() {
    const {burger}=this.props;
    return <>
        <div className="breadTop"></div>
        <div className="salad"></div>
        <div className="cheese"></div>
        <div className="beef"></div>
        <div className="breadBottom"></div>
    </>
  }
}

const mapStateToProps = (state) => ({
  burger:state.burgerState.burger
})


export default connect(mapStateToProps)(BurgerComponent)