import React from "react";

export default function Form({topics, setTopics}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTopic = newOtherTopic(e.currentTarget.topic.value);
        topics.push(newTopic);
        setTopics([...topics]) 
        e.currentTarget.topic.value="";
    };

    const newOtherTopic = title => {
        return {
            upvotes: 0,
            downvotes: 0,
            disussedOn: '',
            title: title,
            id: Date.now(),
        };
    };
    

    return (
        <form className="form" onSubmit={handleSubmit}> 
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