import React from 'react'
import "./scheduleCard.css";
const scheduleCard = ({day,lists}) => {
    return (
        <div className="sd-card">
            <div className="sd-day">{day}</div>
            <ul className="sd-list">
                {lists.map((list,ind) => (
                    <li id={ind} className="sd-li">{ list}</li>
                ))}
            </ul>
        </div>
    )
}

export default scheduleCard
