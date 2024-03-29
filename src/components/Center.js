import { Grid } from '@mui/material'
import React from 'react'

export default function Center(props) {
  return (
	<Grid container
		  direction="column"
		  justifyContent="center"
		  alignItems="center"
		  sx={{minHeight:"100vh"}}>
		<Grid item sx={1}>
			{props.children}
		</Grid>
	</Grid>
  )
}
