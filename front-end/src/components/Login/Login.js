import Button from '@material-ui/core/Button';
import { useEffect, useState } from "react"
import "./Login.css"
import { Grid, Paper ,Avatar, TextField, Typography, Link} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useNavigate } from "react-router-dom";
import apiClient from '../../services/apiClient';
import { useAppStateContext } from '../../contexts/appStateContext';


export default function Login({ user, setUser }){
    const { appState, setAppState} = useAppStateContext()
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
    email: "",
    password: "",
  })

    const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))

        const {data, error } = await apiClient.loginUser({email: form.email, password: form.password})
        if (error){
          setErrors((e) => ({ ...e, form:error}))
        }
        if (data?.user){
            setAppState((a) => (
                {
                    ...a, user: data.user,isAuthenticated: true
                }
                ))
          apiClient.setToken(data.token)
        }
        setIsProcessing(false)
        navigate("/activity")
      }

    const paperStyle = {
        padding:20,
        height:"70vh",
        width:280,
        margin:"20px auto"
    }
    return(
        <Grid>
            <Paper elevation = {10} style= {paperStyle}>
                <Grid align = "center">
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <h2>
                        Sign In
                    </h2>
                </Grid>
                <TextField  
                    onChange={handleOnInputChange} 
                    name ="email"
                    label = "email" 
                    placeholder = "Enter email" 
                    fullWidth 
                    required
                />
                <TextField 
                    onChange={handleOnInputChange} 
                    name ="password"
                    label = "Password" 
                    placeholder = "Enter password" 
                    type = "password" 
                    fullWidth 
                    required
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember Me"
                />
                <Button 
                    onClick ={handleOnSubmit}
                    type = 'submit' 
                    variant = "contained" 
                    color = 'primary' 
                    fullWidth
                    >Sign in
                </Button>
                <Typography>
                    Do you have an account?
                    <Link href ="/signup">
                        Sign Up
                    </Link>
                </Typography>
                
            </Paper>
        </Grid>
    )
}