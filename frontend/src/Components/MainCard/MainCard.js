import React from 'react';
import Cards from '../Cards/Cards'
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({
    root: {
        marginLeft: "10%",
        marginRight:"10%"
    }
})

function MainCard(props) {

    const data = [{
        heading: "FERTILIZER",
        paragaraph: "Precision irrigation feeds the plant, not the soil. That’s a big deal. Because when you deliver water and nutrients straight to the roots, you lower your costs. More importantly, you grow higher yields of healthier crops. Wherever you are, whatever your challenges.",
        image: "/images/fertilizers.jpg"
    }, {
        heading: "IRRIGATION",
        paragaraph: "Using the drip system for nutrients application reduces labor and equipment costs associated with traditional ways of applying nutrients. Lastly, it allows you to manage risks and reduce losses caused by falling crop prices, diseases, or unpredictable weather patterns",
        image: "/images/irrigation.jpg"
    },
    {
        heading: "CROP TYPE",
        paragaraph: "land is not the sufficient condition to maximize production,but sowing the right kind in the field adds the feather. Here we take basic information like Ph value,Water holding capacity etc to predict the kind of crop to be sow",
        image: "/images/croptype.png"
    },
    {
        heading: "CROP PRODUCTION",
        paragaraph: "To maximize the crop production is the main issue to be pondered. Here we take few information such as crop type,season,area to predict production of crops.",
        image: "/images/cropproduction.jpg"
    }
    ]
    const classes = useStyle();
    return (
        <div style={{ marginLeft: "auto" }}>
            {
                <Box sx={{ flexGrow: 1 }} className={classes.root}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                        {data.map((data, idx) => (
                            <Grid item xs={2} sm={4} md={4} key={idx}>
                                <Cards data={data} key={idx} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            }
        </div>
    );
}

export default MainCard;