import React from 'react'

const Total: React.FunctionComponent<{ text: string, exerciseCount: number }> = ({ exerciseCount, text }) => {
    return (
        <p>
            {text} {" "} {exerciseCount}
        </p>
    )
}

export default Total