import React from 'react'
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

export const ParentComponent = () => {
    let genes = "tall"
    return (
        <div><FirstChild genes={genes} name={"charity"} />
            <SecondChild />
        </div>
    )
}

