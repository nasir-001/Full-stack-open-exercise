import React from 'react';

const Content: React.FunctionComponent<{ name: string, exerciseCount: number }> = ({ name, exerciseCount }) => {
    return (
        <p>
            {name} {exerciseCount}
        </p>
    )
}

export default Content