import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({

    container: {
        width: '100%',
        paddingTop: theme.spacing(3),
    },
    card: {
        maxWidth: 550,
        maxHeight: 700,
    },
    img: {
        maxWidth: 500,
        maxHeight: 600,
    },
}))

const SingleItem = ({ data }) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
        <Grid >

            <Card className={classes.card}>
                <CardContent>
                    <Typography variant='h5'>
                        {data.title}
                    </Typography>
                    <Typography>
                        {data.description}
                    </Typography>
                    <CardMedia >
                        <img src={data.urlToImage} alt="" className={classes.img} />
                    </CardMedia>
                </CardContent>
                <Button className={classes.button} >
                    READ FULL ARTICLE
                </Button>
            </Card>
        </Grid>
    </Container>

    )
}

export default SingleItem