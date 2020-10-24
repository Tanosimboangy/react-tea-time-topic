import React from "react";

export default function Form() {
    // const [addState, setAddState] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        
    }

    return (
        <form className="form">
            <input type="text" placeholder="ADD NEW TOPIC" />
            <button type="submit" onChange={handleSubmit} >Submit</button>
        </form>
    )
}