import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const SearchWidget = () => {
    return (
        <div className="mb-8">
            <h3 className="text-3xl font-bold my-8">Search</h3>
            <div className="rounded bg-gray-100 border border-gray-200 flex p-3">
                <input type="text" placeholder="Search..." className="flex-grow mr-2 bg-gray-100"/>
                <SearchIcon/>
            </div>
        </div>
    )
}

export default SearchWidget
