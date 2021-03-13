import React from 'react';

const validate = (props) => {
    let str = '';
    if(props.name.length <=5 )
        str = 'text too short';
    else
        str = 'text long enough';
    return (
        <div>
            <h1>status : {str}</h1>
        </div>
    );
}

export default validate;