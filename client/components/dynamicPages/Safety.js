import React from 'react';

function Safety(props) {
    return (
        <div>
            <h1>Being able to make use of your home safely</h1>
            <h2>Please check what applies to you</h2>
            <ul>
                <li>
                    <label>Do you need help to get into your home?</label>
                    <input type="checkbox"></input></li>
                <li>
                    <label>Do you need help to move around your home?</label>
                    <input type="checkbox"></input>
                </li>
                <li>
                    <label>Do you need help to help to use your cooker or heater?</label>
                    <input type="checkbox"></input>
                </li>
            </ul>
            <label>The questions above are examples of how you may meet this requirement. Please expand and / or let us know other ways that you need help using your home safely.</label>
            <textarea placeholder="Tell us more..."></textarea>
        </div>
    );
}

export default Safety;
