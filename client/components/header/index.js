import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Header = () => {
    return (
        <div className="shadow-sm"><div className="container py-4 flex justify-between ">
            <LeftSide/>
            <RightSide/>
        </div></div>
        
    )
}

export default Header
