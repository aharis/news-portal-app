import React, { useEffect } from 'react';
import SingleItem from './SingleItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';


const Landing = ({ page }) => {

    const dispatch = useDispatch()
    const { news } = useSelector(state => state.news)

    useEffect(() => {

        dispatch(fetchNews(page))

    }, [dispatch, page])

    const displayNews = news?.map((item, index) => {
        return (<SingleItem key={index} data={item} />)
    })


    return (
        <div>
            {displayNews}

        </div>
    )
}

export default Landing