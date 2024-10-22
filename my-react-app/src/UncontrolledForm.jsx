import { useRef} from "react";

function UncontrolledForm() {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted value: ${inputRef.current.value}`);
    };

    return (
        <form>
            <label>
                UncontrolledInput:
                <input type="text" ref={inputRef} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default UncontrolledForm;