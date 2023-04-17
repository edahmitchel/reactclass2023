import React from 'react'
import FirstGrand from './FirstGrand'

const FirstChild = ({ name, genes }) => {
    let newObj = { dataFromProps: name }
    console.log(newObj);
    return (
        <div>FirstChild
            <h1>{name}</h1>

            <FirstGrand passedGenes={genes} />
        </div>
    )
}

export default FirstChild