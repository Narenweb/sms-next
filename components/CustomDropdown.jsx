import React, { useState, useRef, useEffect } from 'react';

const CustomDropdown = ({ options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  // Close the dropdown when clicking outside
  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="custom-dropdown relative" ref={dropdownRef}>
      <div className="selected-option p-2 border border-gray-300 rounded cursor-pointer" onClick={handleToggle}>
        {selectedOption ? selectedOption.label : 'Select'}
      </div>
      <div className={`options absolute bg-gray-200 border border-gray-300 rounded-t mt-1 overflow-hidden z-10 ${isOpen ? 'block' : 'hidden'}`}>
        {options.map((opt) => (
          <div key={opt.value} className="px-2 py-1 cursor-pointer hover:bg-sky-500 hover:text-white" onClick={() => handleOptionClick(opt)}>
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
