import React from 'react'
import { TileExtended } from '../components/TileExtended/TileExtended'

interface Props {
    showsData: any,
    match?: any
}
interface State {
    showData: any,
}

export class Show extends React.Component<Props, State> {

    state = {
        showData: {},
    }

    componentDidMount() {
        fetch("http://api.tvmaze.com/shows/" + this.props.match.params.id)
            .then(res => res.json())
            .then(res => this.setState({ showData: res }))
    }

    render() {
        return (
            <TileExtended showData={this.state.showData}></TileExtended>
        );
    }
}
