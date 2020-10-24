import React from 'react';
import NextTopics from './NextTopics.js';
import PastTopics from './PastTopics.js';

export default function Main({ topics, setTopics}) { 

    let nextTopics = topics.filter(topic => !topic.discussedOn);
    let pastTopics = topics.filter(topic => topic.discussedOn);

    // let sortedTopics = topics.sort((topicA, topicB) => {
    //     const ratioA = topicA.upvotes - topicA.downvotes;
    //     const ratioB = topicB.upvotes - topicB.downvotes;
    //     return ratioB - ratioA;
	// });

    return (
            <div>
                <div>
                    <h2>NEXT TOPICS</h2>
                    {nextTopics.map((nextTopic) => {
                        return (
                            <NextTopics  key={nextTopic.id} nextTopic={nextTopic} />
                        )
                    })}
                </div>
                <div>
                    <h2>PAST TOPICS</h2>
                    {pastTopics.map((pastTopic) => {
                        return (
                            <PastTopics  key={pastTopic.id} pastTopic={pastTopic} />
                        )
                    })}
                </div>
            </div>
    )
}
