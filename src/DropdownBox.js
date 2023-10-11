import React, { useState } from 'react';
import './DropdownBox.css';

function DropdownBox() {
  const [isDropdown1Open, setDropdown1Open] = useState(false);
  const [isDropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!isDropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!isDropdown2Open);
  };

  return (
    <div className="dropdown-box">
      <div className="heading">
        <h2>
          <span>gumgum</span>
          {/* <i className="material-icons">i</i> Add your icon */}
        </h2>
        <h2>
          <span>Creative gallery</span>
          <hr></hr>
          {/* <i className="material-icons">i</i> Add your icon */}
        </h2>
        <h2>
          <span>Select a demo below :</span>
          {/* <i className="material-icons">i</i> Add your icon */}
        </h2>
      </div>
      <div className="dropdown">
        <button onClick={toggleDropdown1} className="gradient-button">
          Display
        </button>
        {isDropdown1Open && (
          <div className="dropdown-content">
            Lizol
          </div>
        )}
      </div>
      <div className="dropdown">
        <button onClick={toggleDropdown2} className="gradient-button">
          Video
        </button>
        {isDropdown2Open && (
          <div className="dropdown-content">
            Twix
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownBox;
