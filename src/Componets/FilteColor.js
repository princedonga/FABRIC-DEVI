import React, { useState } from 'react';

function FilteColor() {
    const colors = [
        { name: 'Aqua', count: 1 },
        { name: 'Black', count: 6 },
        { name: 'Blue', count: 22 },
        { name: 'Brown', count: 5 },
        { name: 'Cream', count: 9 },
        { name: 'Cream2', count: 1 },
        { name: 'Gold', count: 1 },
        { name: 'Gray', count: 5 },
        { name: 'Green', count: 42 },
        { name: 'Grey', count: 3 },
        { name: 'Light Yellow', count: 1 },
        { name: 'Lilac', count: 1 },
        { name: 'Multicolor', count: 11 },
        { name: 'Orange', count: 7 },
    ];

    const [showMore, setShowMore] = useState(false); // State to toggle show more or less

    // Function to toggle color display
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    // Limit the number of colors to show
    const displayedColors = showMore ? colors : colors.slice(0, 4);

    return (
        <div>
            <div className="filter-list">
                <ul>
                    {displayedColors.map((color, index) => (
                        <li key={index}>
                            <label>
                                <input type="checkbox" name={color.name.toLowerCase()} />
                                {color.name} ({color.count})
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="btn " onClick={toggleShowMore}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
}

export default FilteColor;
