import React, { useState } from 'react'
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import Center from './Center'
import useForm from '../hooks/useForm'

const getFreshModel = () =>({
	name:'',
	email:''
})

export default function Login() {

const{
	values,
	setValues,
	errors,
	setErrors,
	handleInputChange
} = useForm(getFreshModel);

const login = e => {
	e.preventDefault();
	console.log(values)
}

  return (
	<Center>
		<Card sx={{width:400,
				   backgroundColor:'rgba(10, 9, 45, 1)'
					 }}>
			<CardContent sx={{textAlign:'center'}}>
				<Typography variant='h3' sx={{my:3}}>
					Doctriner
				</Typography>
				<Box sx={{
					'& .MuiTextField-root':{
						margin:1,
						width:'90%'
					}
				}}>
					<form noValidate onSubmit={login}>
						<TextField 
						label="Email"
						name="email"
						value={values.email}
						onChange={handleInputChange}
						variant="outlined"/>
						<TextField 
						label="Name"
						name="name"
						value={values.name}
						onChange={handleInputChange}
						variant="outlined"/>
						<Button
						type="submit"
						variant="contained"
						size="medium"
						sx={{width:'90%'}}>Start</Button>
					</form>
				</Box>
			</CardContent>
		</Card>
	</Center>
  )
}
