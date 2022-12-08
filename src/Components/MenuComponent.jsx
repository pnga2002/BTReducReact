//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MenuComponent extends Component {
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
            <tr>
                <td>salad</td>
                <td>
                    <button className="btn btn-success">+</button><span>1</span>
                    <button className="btn btn-primary">-</button>
                </td>
                <td>10</td>
                <td>10</td>
            </tr>
            <tr>
                <td>cheese</td>
                <td className=''>
                    <button className=" btn btn-success">+</button>
                    <span>1</span>
                    <button className="btn btn-primary">-</button>
                </td>
                <td>20</td>
                <td>20</td>
            </tr>
            <tr>
                <td>beef</td>
                <td>
                    <button className="btn btn-success">+</button>
                    <span>1</span>
                    <button className="btn btn-primary">-</button>
                </td>
                <td>55</td>
                <td>55</td>
            </tr>
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(MenuComponent)