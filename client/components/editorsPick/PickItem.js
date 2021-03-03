import React from 'react'

const PickItem = () => {
    const data = {
        category:'Lifestyle',
        image:'http://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/game-thrones.jpg',
        title:'30 Best Lifestyles Blogs to Follow in 2021',
        description: "When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions",
        author:{image: '/images/3.jpg', name: 'kate Adie'},
        date:'September 15, 2021',
        readtime: '6 mins to read'
    }

    return (
        <div className="container ">
            <div className="flex bg-purple-100 rounded-3xl px-16">
            <div className="flex flex-col justify-center w-1/2 pr-10">
                <div className='flex'>
                    <p className='p-2 bg-purple-500 rounded text-white'>{data.category}</p>
                    <p className='text-gray-500 self-center ml-4'>{data.date}</p>
                </div>
                <h1 className='text-6xl text-purple-700 my-10'>{data.title}</h1>
                <p className='text-gray-500'>{data.description}</p>
                <div className='mt-8 flex'>
                    <div className='flex'>
                        <img src={data.author.image} alt='' className='w-8 h-8 rounded-full'/>
                        <p className='text-gray-400 ml-2 self-center'>{data.author.name}</p>
                    </div>
                    <p className='text-gray-400 ml-6 self-center'>{data.readtime}</p>
                </div>
            </div>
            <div className='w-1/2' style={{height:'70vh'}}>
                <img src={data.image} alt='' className='w-full h-full object-cover rounded-2xl relative -top-32 mt-12'/>
            </div></div>
        </div>
    )
}

export default PickItem
