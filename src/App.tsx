import { useState } from "react";
import "./App.css";

function App() {
  // conditon for making dropdown open/close
  const [dropdownOpen, setDropDownOpen] = useState(false);
  // list items for showing in dropdown
  const list = ["Yes", "Probably not"];
  // variable to store selected item
  const [selectedItem, setSelectedItem] = useState("");

  const onSelectItem = (item: string) => {
    setSelectedItem(item);
    setDropDownOpen(false);
  };

  return (
    <div className="container">
      <h1>Should you use dropdown</h1>
      <div className="dropdown">
        <button
          className="btn-dropdown"
          onMouseOver={() => setDropDownOpen(true)}
        >
          <span>{selectedItem ? selectedItem : "Select"}</span>
          <span className="icon">
            {/* conditionally show chevron icons */}
            {dropdownOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            )}
          </span>
        </button>
        {/* loop through list to show list icons */}
        {dropdownOpen && (
          <ul className="list">
            {list.map((item) => (
              <li onClick={() => onSelectItem(item)}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
