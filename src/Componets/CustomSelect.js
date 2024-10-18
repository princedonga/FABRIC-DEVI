import React, { useState, useEffect, useRef } from 'react';
// import './CustomSelect.css'; // Create this CSS file for styles

const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Featured');
    const selectContainerRef = useRef(null);

    const options = [
        { label: 'Featured', value: 'Featured' },
        { label: 'Price: Low to High', value: 'Price: Low to High' },
        { label: 'Price: High to Low', value: 'Price: High to Low' },
        { label: 'Customer Rating', value: 'Customer Rating' }
    ];

    // Toggle dropdown menu visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Set the selected option and close the dropdown
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectContainerRef.current && !selectContainerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={`custom-select-container ${isOpen ? 'active' : ''}`} ref={selectContainerRef}>
            <div className="custom-select" onClick={toggleDropdown}>
                Sort By: <span id="selected-option">{selectedOption}</span>
                <span className="arrow">▾</span>
            </div>
            {isOpen && (
                <div className="custom-options">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`custom-option ${selectedOption === option.value ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
