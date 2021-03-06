import React from 'react';
import NextTopics from './NextTopics.js';
import PastTopics from './PastTopics.js';
import Form from './Form';

export default function Main({ topics, setTopics, pastTopics, setPastTopics, nextTopics, setNextTopics}) {  
    let sortedNextTopics = nextTopics.sort((topicA, topicB) => {
        const ratioA = topicA.upvotes - topicA.downvotes;
        const ratioB = topicB.upvotes - topicB.downvotes;
        return ratioB - ratioA;
    });

    return (
            <div className="container">
                <Form topics={topics} setTopics={setTopics} />
                <>
                    <h2>NEXT TOPICS</h2>
                    {sortedNextTopics.map((nextTopic) => {
                        return (
                            <NextTopics 
                                sortedNextTopics={sortedNextTopics} 
                                topics={topics} 
                                setTopics={setTopics}
                                key={nextTopic.id} 
                                nextTopic={nextTopic}
                            />
                        )
                    })}
                </>
                <>
                    <h2>PAST TOPICS</h2>
                    {pastTopics.map((pastTopic) => {
                        return (
                            <PastTopics  
                            key={pastTopic.id} 
                            pastTopic={pastTopic} 
                            pastTopics={pastTopics}
                            setPastTopics={setPastTopics}
                            
                        />
                        )
                    })}
                </>
            </div>
    )
}