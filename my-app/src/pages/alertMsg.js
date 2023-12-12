import React, { useState, useEffect } from 'react';

export const AlertMessage = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return visible ? (
    <div className="alert">
      <p>{message}</p>
    </div>
  ) : null;
};