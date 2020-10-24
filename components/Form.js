import React, {useState} from "react";

export default function Form() {
    // const [addState, setAddState] = useState();

    return (
        <form className="form">
            <input type="text" placeholder="ADD NEW TOPIC" />
            <button type="submit">Submit</button>
        </form>
    )
}