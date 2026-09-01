import { useEffect } from "react";
import "./RadheToast.css";

function RadheToast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="radhe-toast">
      <span className="radhe-toast-icon">🪷</span>

      <div className="radhe-toast-content">
        <strong>राधे राधे 🙏</strong>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default RadheToast;
