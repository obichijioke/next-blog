import React from 'react'
import RecentPostCard from './RecentPostCard'

const index = () => {
    return (
        <div className="w-full">
            <h3 className="text-3xl font-bold my-8">Recent Posts</h3>
             <ul className="w-full">
                <RecentPostCard/>
                <RecentPostCard/>
                <RecentPostCard/>
                <RecentPostCard/>
            </ul>
        </div>
       
    )
}

export default index
