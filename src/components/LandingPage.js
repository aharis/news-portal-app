import React, { useEffect } from 'react';
import SingleItem from './SingleItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const LandingPage = ({ page }) => {

    const dispatch = useDispatch()
    const { news } = useSelector(state => state.news)

    useEffect(() => {

        dispatch(fetchNews(page))

    }, [dispatch, page])

    return (
        <Container>
            <Grid container spacing={2}>
                {
                    news?.map((item, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <SingleItem data={item} id={index} />
                        </Grid>
                    ))
                }

            </Grid>
        </Container>
    )
}

export default LandingPage