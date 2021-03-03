import React from 'react'

const data = [
    {name:"LifeStyle", count: 20},
    {name:"News", count: 2},
    {name:"Coding", count: 10},
    {name:"UX/UI", count: 22},
    {name:"JavaScript", count: 50},
    {name:"General", count: 26},

            ]
const CategoryWidget = () => {
    return (
        <div className="">
            <h3 className="text-3xl font-bold my-8">Categories</h3>
            <ul className="">
                {data && data.map((item, index)=>(
                    <li key={index} className="flex justify-between my-5">
                        <p>{item.name}</p>
                        <p>{item.count}</p>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default CategoryWidget
