import React from 'react'
import './TileExtended.css'

export interface TileExtendedProps {
    showData: any
}

export const TileExtended: React.FC<TileExtendedProps> = ({ showData }) => {
    return (
        < div className="tileExtended">
            <div className="card">
                <div>
                    {showData.id}
                </div>
                <div>
                    {showData.name}
                </div>
                <div>
                    genres: {showData.genres && showData.genres.map((genre: any) => <div>{genre}</div>)}
                </div>
                <div>
                    runtime: {showData.runtime} minutes
                </div>
                <div>
                    <img src={showData.image ? showData.image.medium : "https://openphoto.net/volumes/sizes/sarabbit/21978/2.jpg"} alt="" />
                </div>
            </div>
        </div >
    )
}

