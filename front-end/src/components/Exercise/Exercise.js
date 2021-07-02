import { Box, Typography , Button} from '@material-ui/core/'
import "./Exercise.css"
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import ExerciseCard from '../exerciseCard/exerciseCard'
import { useAppStateContext } from '../../contexts/appStateContext';
import useRedirect from '../../hooks/useRedirect'

export default function Exercise(){
    const { appState } = useAppStateContext()
    //appState not being passed properly
    // useRedirect(appState)

    const navigate = useNavigate()
    return(
        <div className = "exercise">
            <div className ="banner">
                <Typography variant="h3" gutterBottom>
                    Exercise
                </Typography>
            </div>
            <div className = "overview">
                <Typography variant="h4" gutterBottom>
                    Overview
                </Typography>
                <Link to="/exercise/form" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary" size = "small">
                        Add Exercise
                    </Button>
                </Link>
            </div>
            <Box display="flex" flexDirection="row" flexWrap ="wrap" justifyContent="center" alignItems="center">
                {appState.exercises.length !== 0?
                appState.exercises.map((exercise) => (<ExerciseCard exercise = {exercise}/>)): 
                <div className = "content">
                    <Box m= {1} border={1} display="flex" justifyContent="center" alignItems="space-between">
                        <Typography contained variant="h4" gutterBottom>
                            Nothing to show here
                        </Typography>
                    </Box>
                </div>
                }
            </Box>
        </div>
        
       
    )
}