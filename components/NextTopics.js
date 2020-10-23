import React from "react";

export default function NextTopics({ nextTopic }) {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <ul>
                            <li>{nextTopic.title}</li>
                            <li><button>Archive</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}