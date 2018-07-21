import React from 'react'
import SearchRes from '../../components/search/searchRes'
export default SearchRoute = ({match}) => {
    return (
        <div className="">
            <SearchRes search={match.params.sch} user={true}/>
            {console.log(match)}
        </div>
    )
}