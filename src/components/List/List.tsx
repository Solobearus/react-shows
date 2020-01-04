import React from 'react'
import { Tile } from '../Tile/Tile';
import './List.css'
interface Props {
    shows: any;
    history: any;
}

export const List: React.FC<Props> = ({ shows, history }) => {

    return <div className="list">
        {shows && shows.map((show: any) =>
            <Tile
                history={history}
                key={show.id}
                show={show}>
                {/* {show.title} */}
            </Tile>
        )}
    </div>
}

// import { Tile } from '../Tile/Tile';
// import { showData } from '../../App'

// export interface Iprops {
//     showsData: showData[],
// }

// export const List: React.FC<Iprops> = ({ showsData }) => {
//     return (
//         < div >
//             {showsData.map(() => {
//                 <Tile

//                     >

//                 </Tile>
//             })}
//         </div >
//     )
// }

// // const ListStyled = styledts<ListProps>(styledts.div)``
