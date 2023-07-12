import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const IconSwitch = ({ icon, onSwitch}) => {
    return (
        <div className="switcher">
            <button key={uuidv4()} className='view-switch' onClick={() => onSwitch(icon)}>
                <span className="material-icons">{icon}</span>
</button>
        </div>
    );
};

export default IconSwitch;