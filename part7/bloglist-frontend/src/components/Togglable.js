import React, { useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Button = styled.button`
    background: Bisque;
    font-size: 1em;
    margin: 0.25em;
    padding: 0.25em 1em;
    border: 2px solid Chocolate;
    border-radius: 3px;
  `

  const Cancel = styled.button`
    background: Red;
    font-size: 1em;
    margin-left: 13em;
    padding: 0.25em 1em;
    border: 2px solid Black;
    border-radius: 3px;
  `

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Cancel onClick={toggleVisibility}>cancel</Cancel>
      </div>
    </div>
  );
});

Togglable.displayName = 'Togglable';

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
};

export default Togglable;
