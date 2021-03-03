import React from 'react'

const data = {
    image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/women-party.jpg',
    title:'9 Things I love about Shaving My Head During Quarantine',
    date:'September 15, 2021'
}

const RecentPostCard = () => {
    return (
        <li className="flex my-10 w-full">
                <img src={data.image} alt="" className="rounded object-cover w-1/3"/>
                
                <div className="pl-3 flex justify-center items-center w-2/3">
                    <h4 className="text-lg font-medium text-gray-800">{data.title}</h4>
                </div>
           
        </li>
    )
}

export default RecentPostCard


