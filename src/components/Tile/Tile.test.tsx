import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Tile } from './Tile'
import { createMemoryHistory } from 'history'

describe('Tile', () => {
    let props: any;
    let history: any;
    beforeEach(() => {
        history ={
            push: jest.fn()
        }

        props = {
            history,
            show: {
                id: "testid",
                name: "im a title",
                score: 123,
            },
        }
    })

    it('Should render without crashing', () => {
        render(<Tile {...props} />);
    })

    it('Should push the right destination to history', () => {
        const { getByRole } = render(<Tile {...props} />);

        const ele = getByRole('button');
        fireEvent.click(ele);
        expect(history.push).toHaveBeenCalledWith('/shows/testid')
    })
})