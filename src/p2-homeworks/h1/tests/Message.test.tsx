import React from 'react'
import {render} from '@testing-library/react'
import Message from '../Message'

test('find text "test message name"', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render((
        <Message
            avatar=""
            name="test message name"
            message=""
            time=""
        />
    ))
    const linkElement = screen.getByText(/test message name/i)
    expect(linkElement).toBeInTheDocument()
})
test('find text "test message"', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render((
        <Message
            avatar=""
            name=""
            message="test message"
            time=""
        />
    ))
    const linkElement = screen.getByText(/test message/i)
    expect(linkElement).toBeInTheDocument()
})
test('find text "test message time"', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render((
        <Message
            avatar=""
            name=""
            message=""
            time="test message time"
        />
    ))
    const linkElement = screen.getByText(/test message time/i)
    expect(linkElement).toBeInTheDocument()
})
