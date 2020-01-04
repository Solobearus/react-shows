import React from 'react'
import './Header.css'


export interface Iprops {
    query: string,
    setQuery(input: string): void,
}

export const Header: React.FC<Iprops> = ({ query, setQuery }) => {

    return (
        < div className="header">
            <input
                type="search"
                placeholder="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div >
    )
}

