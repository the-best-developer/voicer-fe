import React from 'react';

function ValidateFields(props) {
    let display = "none"
    if (props.validate.length !== 0) { display = "block" }
    return (
        <div variant="danger" style={{ display: display }}>
            {props.validate.map(v => {
                return (
                    <div key={props.validate.indexOf(v)}>
                        {v}
                    </div>
                )
            })}
        </div>
    )
}

export default ValidateFields;