import React from 'react';

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <div className="col-2">
        <button 
          className="btn btn-danger w-100" 
          onClick={props.onReset}
        >
          Reset
        </button>
      </div>
      <div className="col-8 text-center">
        <h4>Total Amount: ₹{props.totalAmount}</h4>
      </div>
      <div className="col-2">
        <button 
          className="btn btn-primary w-100" 
          onClick={props.onPayNow}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}


