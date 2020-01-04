import React from 'react'
import { Header } from '../components/Header/Header';
import { List } from '../components/List/List';


interface Props {
    query: string;
    setQuery: any;
    showsData: any;
    history: any;
}

export const Home: React.FC<Props> = ({ query, setQuery, showsData, history }) => {
    return (
        <div>
            <Header query={query} setQuery={setQuery}></Header>
            <List shows={showsData} history={history}></List>
        </div>
    );
}