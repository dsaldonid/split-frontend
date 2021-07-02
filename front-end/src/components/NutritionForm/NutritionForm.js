import Button from '@material-ui/core/Button';
import { useState } from "react"
import { Grid, Paper, Avatar, TextField } from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import apiClient from '../../services/apiClient';
import { useAppStateContext } from '../../contexts/appStateContext';

export default function NutritionForm() {
    const { appState, setAppState} = useAppStateContext()
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        name: "",
        category: "",
        calories: 0,
        quantity: 0,
        image_url:""
    })


    const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))


        const { data, error } = await apiClient.createNutrition(
            {
                name: form.name,
                category: form.category,
                calories: form.calories,
                quantity: form.quantity,
                image_url: form.image_url,
            })
        // have error with displaying card
        if (error) {
            setErrors((e) => ({ ...e, form: error }))
        }
        if (data) {
            // setNutrition((e) => [...e, data.Nutrition[0]])
            setAppState((a) => (
                {
                    ...a, nutritions:[...a.nutritions,data.nutrition[0]]
                }
                ))
            setForm({
                name: "",
                category: "",
                calories: 0,
                quantity: 0,
                image_url:""
            })
        }
        setIsProcessing(false)
        navigate("/Nutrition")
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
                        <FitnessCenterIcon />
                    </Avatar>
                    <h2>
                        Record Nutrition
                    </h2>
                </Grid>
                <TextField
                    onChange={handleOnInputChange}
                    name="name"
                    label="Name"
                    placeholder="Enter Nutrition name"
                    fullWidth
                    required
                />
                <TextField
                    onChange={handleOnInputChange}
                    name="category"
                    label="Category"
                    placeholder="Enter Nutrition category"
                    fullWidth
                    required
                />
                <TextField
                    onChange={handleOnInputChange}
                    name="calories"
                    label="Calories"
                    type="number"
                    placeholder="Enter Nutrition calories"
                    fullWidth
                    required
                />
                <TextField
                    onChange={handleOnInputChange}
                    name="quantity"
                    label="Quantity"
                    type="number"
                    placeholder="Enter Nutrition quantity"
                    fullWidth
                    required
                />
                <TextField
                    onChange={handleOnInputChange}
                    name="image_url"
                    label="Image_Url"
                    placeholder="Enter Nutrition image url"
                    fullWidth
                    required
                />
                <Button
                    onClick={handleOnSubmit}
                    type='submit'
                    variant="contained"
                    color='primary'
                    fullWidth
                >Record Nutrition
                </Button>
            </Paper>
        </Grid>
    )
}