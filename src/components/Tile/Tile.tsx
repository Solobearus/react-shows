import React from 'react'
import './Tile.css'


export interface IProps {
    show: any,
    history: any
}

export const Tile: React.FC<IProps> = ({ show, history }) => {
    return (
        < div className="tile" onClick={() => { history.push(`/shows/${show.id}`);console.log('test');
         }}>
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
