import React from 'react';
import PropTypes from 'prop-types'

export default function TextArea(props) {
    let wrapperClass = "form-control";
    if(props.error.length>0){
        wrapperClass+= " has-error";
    }
    return (
        <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <div className="field">
          <input
            id={props.id}
            type="text"
            name={props.name}
            className="form-control"
            value={props.value}
            onChange={props.onChange}
          />
        </div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    ) 
}

TextArea.defaultProps={
     error:""
 }
