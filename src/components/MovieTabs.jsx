import React from 'react'
const MovieTabs = (props) =>{
    const {sort_by,updateSortBy}=props;
    const handleClick =value =>()=>updateSortBy(value)
const getClassName = value =>{
    return `nav-link ${sort_by===value?'active':''}`
}
    return (
        <div>
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div className={getClassName('popularity.desc')}
                    onClick={handleClick('popularity.desc')
                    }
                    >Popularity desc</div>
                </li>
                <li className="nav-item">
                    <div className={getClassName('revenue.desc')}
                      onClick={handleClick('revenue.desc')
                    }
                    >Revenue desc</div>
                </li>
                <li className="nav-item">
                    <div className={getClassName('vote_average.desc')}
                       onClick={handleClick('vote_average.desc')
                    }
                    >Vote Average desc</div>
                </li>
            </ul>
        </div>
    )
}
export default MovieTabs