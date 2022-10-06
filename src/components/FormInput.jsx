import { useState } from "react";
import "./FormInput.css"

const FormInput = (props) => { // We would be passing props down to this component
    const [focused, setFocused] = useState(false); //we are using the useState hook to keep track of the application state

    const {label, onChange, errorMessage, id, ...inputProps } = props;

    // creating a function to indicate when the user focuses on the form.
    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label> {label} </label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
            <span> {errorMessage} </span>
        </div>
    ) 
}

export default FormInput;



// 1. Generally a state refers to application data or properties that need to be tracked.
// Hooks won't work in a React class component
// Hooks cannot have any conditional statement
// Hooks can only be called at the top level of a component
// 2. UseEffect allows you to perform side effects in your components. this could include Fetching data, directly updating the DOM, and timers.
// 3. In React we can add a ref attribute to an element to access it directly in the DOM
// Also used to store mutable value that does not cause a re-render when updated
// Can also be used to keep trak of previous state values