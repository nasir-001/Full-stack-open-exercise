import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('render blogs', () => {
    const blog = {
        title: 'This is where the blog title goes',
        author: 'Micheal Moses'
    }

    const component = render(
        <Blog blog={blog} />
    )
    expect(component.container).toHaveTextContent(
        'This is where the blog title goes',
        'Micheal Moses'
    )
})