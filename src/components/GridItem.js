import { Grid, Typography } from '@mui/material'
import React from 'react'

const GridItem = ({dataKey, dataValue}) => {
  return (
    <Grid item sx={{display: 'flex'}} xs={5}>
        <Typography sx={{fontWeight: 'bold'}}>
            {dataKey}:
        </Typography>
        <Typography>
            {dataValue}
        </Typography>
    </Grid>
  )
}

export default GridItem