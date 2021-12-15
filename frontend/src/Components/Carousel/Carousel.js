import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';


const useStyle = makeStyles({
    root: {
        marginLeft: "15%",
        marginTop: "3%",
        marginRight: "15%",
    },
    Card: {
        width: 1000,
        margin: 'auto'
    },
    Media: {
        height: '100%',
        width: '100%'
    }
})
function Carousels(props) {
    const classes = useStyle();
    var items = [{
        images: "/images/1_Carousel.jpg"
    }, {
        images: "/images/2_Carousel.jpg"
    }, {
        images: "/images/3_Carousel.jpg"
    }
    ]

    return (
        <div >
            <Carousel className={classes.root} >{
                items.map((item, i) => <Item key={i} item={item} />)
            }
            </Carousel>
        </div>

    )
}

function Item({ item }) {
    const classes = useStyle();
    return (
        <Paper style={{ paddingTop: "3%", paddingBottom: "3%" }}>
            <Card className={classes.Card}>
                <CardMedia
                    component="img"
                    image={item.images}
                    alt="CardMedia Image Example"
                    height="340"
                    title="CardMedia Image Example"
                />
            </Card>
        </Paper>
    )
}

export default Carousels;