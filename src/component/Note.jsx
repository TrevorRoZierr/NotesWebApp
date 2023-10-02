import React from "react";

const Note = () => {
  return (
    <div className="note">
      <span>This is my first Note.</span>
      <div className="footerNote">
        <small>2/10/2023</small>
        <button>🗑️</button>
      </div>
    </div>
  );
};

export default Note;
