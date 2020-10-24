import React from "react";

export default function PastTopics({ pastTopic }) {
    return (
        <>
            <ul className="pastTopicContainer">
                <li>
                    <ul className="pastToptext">
                        <li>{pastTopic.title}</li>
                        <li>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="red" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                            </button>
                        </li>
                    </ul>
                </li>
                <li className="discussedSing">
                    <p>
                        {pastTopic.discussedOn}
                    </p>
                </li>
            </ul>
        </>
    )
}