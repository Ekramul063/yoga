import React from 'react';

const YogaCard = ({yoga,newTime}) => {

    const {title,picture,description,time} = yoga;

    const handleAddToList = time =>{
        newTime(time);
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={picture} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="flex justify-between">
                    <p>Required Time:</p>
                <p><span>{time}</span>S</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary w-full" onClick={()=>handleAddToList(time)}>Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default YogaCard;