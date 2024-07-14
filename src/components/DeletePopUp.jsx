import "./DeletePopUp.css";
import Button from "./Button";
import { RxCross2 } from "react-icons/rx";

const DeletePopUp = ({ open, onCancel, onConfirm, employee }) => {
  if (!open) return null;

  return (
    <div className="delete-background">
      <div className="delete-container">
        <button onClick={onCancel} className="delete-cross">
          <RxCross2 />
        </button>
        <div className="delete-title">
          <h1>Are you sure?</h1>
        </div>
        <div className="delete-body">
          <p>
            Do you really want to delete <br></br>employee?
          </p>
        </div>
        <div className="delete-footer">
          <Button
            className="delete-button1"
            text="Confirm"
            handleSubmit={onConfirm}
          />
          <Button
            className="delete-button2"
            text="Cancel"
            handleSubmit={onCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;
