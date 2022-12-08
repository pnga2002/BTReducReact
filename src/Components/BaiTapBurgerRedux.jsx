import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Burger from './Burger'
// import Menu from './Menu'
import '../assets/css/style.css'
import Burger from './Burger';
import Menu from './Menu';


export class BaiTapBurgerRedux extends Component {
  render() {
    return <>
      <div className='container'>
        <div className="row">
            <div className="col-8">
                <h3 className=' text-center'>Burger cua ban</h3>
                {/* <div className="breadTop"></div>
                <div className="salad"></div>
                <div className="cheese"></div>
                <div className="beef"></div>
                <div className="breadBottom"></div> */}
                <Burger/>
            </div>
            <div className="col-4">
                <h3>Chon Thuc An</h3>
                <Menu/>
            </div>
        </div>
      </div>
    </>
  }
}

const mapStateToProps = (state) => ({
    // burger:state.BurgerReducer.burger
})


export default connect(mapStateToProps,null)(BaiTapBurgerRedux)