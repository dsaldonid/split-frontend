import Button from '@material-ui/core/Button';
import { useState } from "react"
import { Grid, Paper, Avatar, TextField } from '@material-ui/core';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import apiClient from '../../services/apiClient';
import { useAppStateContext } from '../../contexts/appStateContext';

export default function SleepForm() {
    const { appState, setAppState } = useAppStateContext()
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        start_time: "",
        end_time: ""
    })


    const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))


        const { data, error } = await apiClient.createSleep(
            {
                start_time: form.start_time,
                end_time: form.end_time
            })
        // have error with displaying card
        if (error) {
            setErrors((e) => ({ ...e, form: error }))
        }
        if (data) {
            // setSleep((e) => [...e, data.Sleep[0]])
            setAppState((a) => (
                {
                    ...a, sleep: [...a.sleep, data.sleep[0]]
                }
            ))
            setForm({
                start_time: "",
                end_time: ""
            })
        }
        setIsProcessing(false)
        navigate("/Sleep")
    }

    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "20px auto"
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar>
                        <SingleBedIcon/>
                    </Avatar>
                    <h2>
                        Record Sleep
                    </h2>
                </Grid>
                <TextField
                    onChange={handleOnInputChange}
                    type = "datetime-local"
                    name="start_time"
                    label="Start Time"
                    fullWidth
                    required
                />
                <TextField
                    onChange={handleOnInputChange}
                    type = "datetime-local"
                    name="end_time"
                    label="End Time"
                    fullWidth
                    required
                />
                <Button
                    onClick={handleOnSubmit}
                    type='submit'
                    variant="contained"
                    color='primary'
                    fullWidth
                >Record Sleep
                </Button>
            </Paper>
        </Grid>
    )
}