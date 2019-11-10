import React from 'react';
import CustomModal from 'react-bootstrap4-modal';

export const Modal = ({ show, onCancel, onConfirm }) => (
  <CustomModal visible={show}>
    <div className="modal-header">
      <h5 className="modal-title">Red Alert!</h5>
    </div>
    <div className="modal-body">
      <p>Enemy vessel approaching!</p>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-danger" onClick={onCancel}>
        Cancel
      </button>
      <button type="button" className="btn btn-primary" onClick={onConfirm}>
        Confirm
      </button>
    </div>
  </CustomModal>
);
