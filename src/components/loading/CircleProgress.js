import React from "react";
import {CircularProgress, Grid} from "@mui/material";

const SpinningWheelComponent = ({style}) => {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={style}
        >
            <Grid item>
                <CircularProgress/>
            </Grid>
        </Grid>
    )
}

export default SpinningWheelComponent;
