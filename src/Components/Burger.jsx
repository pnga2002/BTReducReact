import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Burger extends Component {
  renderBreadMid=()=>{
    let{burger}=this.props;
    let content =[];
    for(let prod in burger){
      let breadMid=[];
      for(let i=0;i<burger[prod];i++){
        breadMid.push(<div key={i} className={prod}></div>)
      }
      content.push(breadMid);
    }
    return content;
    // for(let prod in burger){
    //   console.log(prod,burger[prod])
    // }
    // return Object.entries(burger).map(([prod,value],index)=>{
    //   let breadMid =[];
    //   for(let i=0;i<value;i++){
    //     breadMid.push(<div key={i} className={prod}></div>)
    //   }
    //   return breadMid;
    // });
  }
  render() {
    return (
      <div>
        <div className="breadTop"></div>
        {this.renderBreadMid()}
        <div className="breadBottom"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    burger:state.BurgerReducer.burger
})


export default connect(mapStateToProps)(Burger)