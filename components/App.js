import React, {useState, useEffect} from 'react'
import Header from "./Header";
import Main from "./Main";

export default function App() {
    const APIdata = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json";
    const [topics, setTopics] = useState([]);
    const [pastTopics, setPastTopics] = useState([])
    const [nextTopics, setNextTopics] = useState([])

    const getTopics = async () => {
        try {
            const res = await fetch(APIdata);
            const data = await res.json();
            setTopics(data);
        } catch (e) {
            console.error(e);
        } 
    }
    useEffect(() => {
        getTopics();
    }, [])

    useEffect(() => {
            setPastTopics(topics.filter(topic => topic.discussedOn === ""))
    }, [topics])

    useEffect (() => {
        setNextTopics(topics.filter(topic => topic.discussedOn !== ""))
    }, [topics])


    return (
        <>
            <Header />
            <main>
                <Main 
                    topics={topics} 
                    setTopics={setTopics}
                    pastTopics={pastTopics} 
                    setPastTopics={setPastTopics}
                    nextTopics={nextTopics}
                    setNextTopics={setNextTopics}
                 />
            </main>
        </>

    )
}