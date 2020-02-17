import React from 'react'
import './Tile.css'


export interface IProps {
    show: {
        id: string,
        name: string,
        score: number,
        image?: {
            medium?: string
        },
    },
    history: any
}

export const Tile: React.FC<IProps> = ({ show, history }) => {
    return (
        < div role="button" className="tile" onClick={() => history.push(`/shows/${show.id}`)}>
            <div>
                {show.id}
            </div>
            <div>
                {show.name}
            </div>
            <div>
                {show.score}
            </div>
            <div>
                <img src={show.image ? show.image.medium : "https://openphoto.net/volumes/sizes/sarabbit/21978/2.jpg"} alt="" />
            </div>
        </div >
    )
}

// const TileStyled = styledts<TileProps>(styledts.div)``
