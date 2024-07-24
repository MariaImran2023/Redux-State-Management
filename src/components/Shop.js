import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  const balance = useSelector(state => state.amount);

  return (
    <div style={{ backgroundColor: "#205934", minHeight: "100vh", display: "flex", justifyContent: "center" }}>
      <div className='container mt-5'>
        <div className="card shadow-lg">
          <div className="card-body text-center">
            <h2 className="card-title mb-4">Deposit / Withdraw Money</h2>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <button className="btn btn-success mx-2" onClick={() => { actions.depositMoney(100) }}>
                <i className="bi bi-plus-circle"></i> Deposit
              </button>
              <button className="btn btn-danger mx-2" onClick={() => { actions.withdrawMoney(100) }} disabled={balance === 0}>
                <i className="bi bi-dash-circle"></i> Withdraw
              </button>
            </div>
            <p className="lead">Update balance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
