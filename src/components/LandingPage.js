import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';


const Landing = () => {

    const dispatch = useDispatch()
    const news = useSelector(state => state.news)
    console.log(news)

    useEffect(() => {

        dispatch(fetchNews())

    }, [])
    
    return (
        <div>


        </div>
    )
}

export default Landing