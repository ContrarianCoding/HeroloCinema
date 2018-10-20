import React, { Component } from 'react'
import { connect } from 'react-redux'
import { unsetErrorAction } from '../actions/unsetErrorAction';

class ErrorPopup extends Component {

  render() {
      console.log('error popup says, error is: ' + this.props.error)
    if(this.props.error){
        return (
        <div className="PopupContainer">
            <div className="MoviePopupHolder" id="error">
                <div className="MoviePopup" id="error">
                    <span className="error">{this.props.error}</span>
                </div>
                <button className="btn" onClick={() => unsetErrorAction()(this.props.dispatch)}>Ok</button>
            </div>
        </div>
        )
    }
    return null
  }
}

const mapStateToProps = state => {
    return {...state}
  }
  
export default connect(mapStateToProps, null)(ErrorPopup)
