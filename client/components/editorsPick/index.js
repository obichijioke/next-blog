import React from 'react'
import PickItem from './PickItem'

const index = () => {
    return (
        <div className="mt-32">
            <div className="container">
               <h3 className="text-4xl font-bold mb-12">Editors Pick</h3> 
            </div>
            
            <PickItem/>
        </div>
    )
}

export default index
