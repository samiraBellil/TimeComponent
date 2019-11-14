import React from 'react';



const Timer = (props) => {
    var hours = Math.floor(props.y / 3600000);
    var minutes = Math.floor((props.y - (hours * 3600000)) / 60000);
    var seconds = parseInt((props.y - (hours * 3600000) - (minutes * 60000)) / 1000);
    return (
        <div className="hour">
            <h1 className="title">{hours + ':' + minutes + ':' + seconds}</h1>
            <p className="para"> Hour Minute Second</p>
        </div>
    );

}


export default Timer;