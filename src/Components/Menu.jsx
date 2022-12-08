import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Menu extends Component {
  renderMenu(){
    let {menu,burger}=this.props;
    
      return Object.entries(menu).map(([prodMenu,price],index)=>{
        return (
          <tr key={index}>
                <td>{prodMenu}</td>
                <td>
                    <button className="btn btn-success" onClick={()=>{
                      this.props.addBreadMid(prodMenu,1)
                    }}>+</button><span>{burger[prodMenu]}</span>
                    <button className="btn btn-primary"onClick={()=>{
                      this.props.addBreadMid(prodMenu,-1)
                    }}>-</button>
                </td>
                <td>{price}</td>
                <td>{burger[prodMenu]*price}$</td>
            </tr>
        )
      }   
  )}
  render() {
    return (
      <table className='text-center'>
        <thead>
            <tr>
                <th>Thuc an</th>
                <th></th>
                <th>Don gia</th>
                <th>Thanh tien</th>
            </tr>
        </thead>
        <tbody>
            {this.renderMenu()}
            <tr>
              <td></td>
              <td></td>
              <td>Tong tien</td>
              <td>{this.props.total}</td>
            </tr>
        </tbody>
      </table>
      
    )
  }
}

const mapStateToProps = (state) => ({
  burger:state.BurgerReducer.burger,
  menu:state.BurgerReducer.menu,
  total:state.BurgerReducer.total
})

const mapDispatchToProps = dispatch=>{
  return {
    addBreadMid:(propsBurger,amount)=>{
      const action={
        type:'ADD_BREADMID',
        propsBurger,
        amount
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu)
