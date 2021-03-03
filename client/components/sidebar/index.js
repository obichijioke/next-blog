import React from 'react'
import Divider from '../Divider'
import SearchWidget from './SearchWidget'
import CategoryWidget from './CategoryWidget'
import RecentPost from './recentPost'

const SideBar = () => {
    return (
        <div className="px-8 py-6">
            <SearchWidget/>
            <Divider/>
            <CategoryWidget/>
            <Divider/>
            <RecentPost/>
            <Divider/>
            
        </div>
    )
}

export default SideBar
