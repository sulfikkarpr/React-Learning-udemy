import { useEffect } from "react";
import ProgrssBar from "./ProgrssBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {



  useEffect(() => {

    // This effect sets up a timeout to call onConfirm after TIMER milliseconds
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    // Cleanup function to clear the timeout if onConfirm changes or component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm, TIMER]);


  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgrssBar timer={TIMER} />
    </div>
  );
}
