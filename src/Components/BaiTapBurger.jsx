//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'//thu vien ket noi redux
import { MenuComponent } from './MenuComponent'
import {BurgerComponent} from './BurgerComponent'
class BaiTapBurger extends Component {
  render() { 
    
    return <>
      <div className='container'>
        <div className="row">
            <div className="col-8">
                <h3 className=' text-center'>Burger cua ban</h3>
                {/* <BurgerComponent/> */}
            </div>
            <div className="col-4">
                <h3>Chon Thuc An</h3>
                {/* <MenuComponent/> */}
            </div>
        </div>
      </div>
    </>
  }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(BaiTapBurger)