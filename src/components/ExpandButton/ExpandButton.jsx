import './ExpandButton.css';
import React from 'react';

const ExpandButton = (props) => {
    let plusClass = ['plus-sign', 'active'];
    let minusClass = ['minus-sign'];

    // Toggle active state between buttons
    if(props.active) {
        plusClass = ['plus-sign'];
        minusClass = ['minus-sign', 'active'];
    }

    return(
        <button aria-label='ExpandButton' className='expand-button' onClick={props.click}>            
            <span className={plusClass.join(' ')}>&#43;</span>
            <span data-testid='true-minus' className={minusClass.join(' ')}>&#8722;</span>
        </button>
    );
}

export default ExpandButton;