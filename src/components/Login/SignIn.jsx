import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios";
// import { Link, useNavigate } from 'react-router-dom'
import { Alert, OutlinedInput, InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Loader from "../Loader"
const SignIn = () => {
  const [input, setinput] = useState({
    email: "",
    password: ""
  })
  // const navigate = useNavigate()
  const [Error, setError] = useState(false)
  const [loader, setloader] = useState(false)
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setinput({ ...input, [name]: value })

  }
  console.log(input, "input")
  console.log(input, "inputs")
  // login function
  const handleSubmit = (e) => {
    e.preventDefault()
    setloader(true)
    axios.get("https://decisive-sunset-saturn.glitch.me/users/get").then((res) => {
      console.log(res.data.data, "response")
      const data = res.data.data
      // var id

      console.log(loader, "loader")
      for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        const email = data[i].email
        const password = data[i].password
        if (email === input.email && password === input.password) {
          var id = data[i]._id
          var customer
            = data[i].customer

        }
      }
      if (id) {
        setloader(false)

        alert("sucessfully login")
        console.log(loader, "loader before")
        sessionStorage.setItem("id", id)
        sessionStorage.setItem("customer", customer)
        // navigate("/pendingorder")
      } else {
        setloader(false)
        alert("invalid credential")
      }
    }).catch((err) => {
      console.log(err)
    })

  }
  return (
    <div className='w-100 h-screen flex flex-col justify-center items-center bg-slate-300'>
      <form onSubmit={handleSubmit} method='POST' className='flex flex-col border-2 p-20 w-2/5 bg-white shadow hover:shadow-lg drop-shadow-2xl'>
        <div>


          <p className='text-5xl underline '> Login Form</p>
        </div>
        <div className='flex flex-col p-10  '>

          <TextField
            className='mb-1'
            required
            id="outlined-required"
            //  label=""
            name='email'
            value={input.email}
            onChange={handlechange}
            placeholder='Username'
          />
          <br />

          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" className='text-red-900' required>

                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            }
            name="password"
            value={input.password}
            label="Password"
            onChange={handlechange}
            placeholder='Password'
          />
          <br />
          {/* <Loader/> */}
          {

            loader ? (<Button />) : (
              <Button color='secondary' onClick={handleSubmit} type="submit" className='hover:shadow-lg drop-shadow-2xl' >
                LOG IN
              </Button>)
          }
          {/* <Button  >
        <Link to={"/signup"}>SignUp</Link>
      </Button> */}

        </div>
      </form>

      <div className='mt-52'>

        {Error ?




          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              There is an Error <strong>UserName or Password is Wrong!</strong>
            </Alert>
          </Stack>


          : null}
      </div>



    </div>
  )
}

export default SignIn