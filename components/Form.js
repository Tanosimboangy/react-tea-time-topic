import React from "react";

export default function Form({topics, setTopics}) {
    // const [addState, setTopics] = useState([]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let newTopic = createNewTopic(e.currentTarget.topic.value);
    //     // console.log(newTopic);
    //     // topics.push(newTopic);
    //     // setTopics([...topics]) 
    //     // e.currentTarget.topic.value="";
    // };

    // const createNewTopic = title => {
    //     return {
    //         upvotes: 0,
    //         downvotes: 0,
    //         disussedOn: '',
    //         title: title,
    //         id: Date.now(),
    //     };
    // };
    

    return (
        <form className="form"> 
            <input 
                type="text" 
                placeholder="ADD NEW TOPIC" 
                required
                name="topic"
            />
            <button type="submit">Submit</button>
        </form>
    )
}