import React from 'react';

const Header: React.FunctionComponent<{ courseName: string }> = ({ courseName }) => {
    return <h1>{courseName}</h1>;
}

export default Header