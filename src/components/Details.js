import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getImage, showDate } from '../utilis/helpers';

const Details = ({ match }) => {
    const [details, setDetails] = useState({});
    const { news } = useSelector(state => state.news);
    const { id } = match.params;
    console.log(id)
    const article = news[id];

    useEffect(() => {
        if (article) {
            setDetails(article)
        }
    }, [article])

    return (
        <>
            <div>{details?.source?.name}</div>
            <div>{details?.author}</div>
            <div>{details.title}</div>
            <div>{details?.description}</div>
            <img src={getImage(details)} alt="img" />
            <div>{showDate(details?.publishedAt)}</div>
            <div>{details?.content}</div>
        </>
    )
}

export default Details