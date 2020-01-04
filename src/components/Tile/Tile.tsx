import React from 'react'
import './Tile.css'


export interface IProps {
    show: any
}

export const Tile: React.FC<IProps> = ({ show }) => {
    return (
        < div className="tile">
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
