import React from 'react'

const SingleItem = ({ data }) => {

    return (
        <>
            <div>{data.title}</div>
            <div>{data.description}</div>
            <div><img src={data.urlToImage}  /></div>
            <button type='submit'>Submit</button>
        </>

    )
}

export default SingleItem