import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Cards({ data }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={data.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.paragaraph}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <div style={{ margin: "auto" }}>
                    <Link style={{ textDecoration: 'none' }} to={`/${data.url}`}>
                        <Button size="small" color="primary">
                            View Details
                        </Button>
                    </Link>
                </div>

            </CardActions>
        </Card>
    );
}
