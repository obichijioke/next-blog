import React from 'react'
import Divider from '../Divider'
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const ArchiveCard = (props) => {
    const {title, description, image, date, author,} = props.data;
    return (
        <li className="pb-8">
            <img src={image} alt="" width="800" height="440" className="rounded-lg h-auto w-full mb-4"/>
            <ul className="flex flex-start my-5">
                <li className="my-2 mx-3 text-gray-600 flex justify-center items-center"><AccessTimeOutlinedIcon className="text-purple-500"/><span className="ml-1">{date}</span></li>
                <li className="my-2 mx-3 text-gray-600 flex justify-center items-center"><CreateOutlinedIcon className="text-purple-500"/><span className="ml-1">{author.name}</span></li>
                <li className="my-2 mx-3 text-gray-600 flex justify-center items-center"><NoteOutlinedIcon className="text-purple-500"/><span className="ml-1">Lifestyle</span></li>
                <li className="my-2 mx-3 text-gray-600 flex justify-center items-center"><ChatBubbleOutlineIcon className="text-purple-500"/><span className="ml-1">3 Comments</span></li>
            </ul>
            <h2 className="text-5xl my-4 font-bold text-gray-700">{title}</h2>
            <p className="text-lg text-gray-600 my-6">{description}</p>
            <button className="rounded bg-purple-600 px-8 py-5 mt-4 text-white text-2xl mb-8">Read more</button>
            <Divider/>
        </li>
    )
}

export default ArchiveCard
