import { useState } from "react";

function ControlledForm() {
    const  [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted ${inputValue}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Controlled Input:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ControlledForm;