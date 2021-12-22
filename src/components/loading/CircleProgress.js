import React from "react";
import {CircularProgress, Grid} from "@mui/material";

const SpinningWheelComponent = ({height = "80vh"}) => {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{height: height}}
        >
            <Grid item>
                <CircularProgress/>
            </Grid>
        </Grid>
    )
}

export default SpinningWheelComponent;
