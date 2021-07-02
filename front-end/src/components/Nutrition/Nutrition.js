import { Box, Typography , Button} from '@material-ui/core/'
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import NutritionCard from '../NutritionCard/NutritionCard'
import useRedirect from '../../hooks/useRedirect'
import { useAppStateContext } from '../../contexts/appStateContext';
import "./Nutrition.css"

export default function Nutrition(){
    const { appState } = useAppStateContext()

    //appState not being passed properly
    // useRedirect(appState)

    const navigate = useNavigate()
    // const defaultProps = {
    //     bgcolor: 'background.paper',
    //     m: 1,
    //     style: { width: '5rem', height: '5rem' },
    //     borderColor: 'text.primary',
    //   };

    useEffect(() => {
    // if user is already logged in,
    // redirect them to the home page
    if (!appState.isAuthenticated) {
        navigate("/invalidlogin")
    }
    }, [appState.isAuthenticated, navigate])
    return(
        <div className = "nutrition">
            <div className ="banner">
                <Typography variant="h3" gutterBottom>
                    Nutrition
                </Typography>
            </div>
            <div className = "overview">
                <Typography variant="h4" gutterBottom>
                    Overview
                </Typography>
                <Link to="/nutrition/form" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary" size = "small">
                        Add Nutrition
                    </Button>
                </Link>
            </div>
            <Box display="flex" flexDirection="row" flexWrap ="wrap" justifyContent="center" alignItems="center">
                {appState.nutritions.length !== 0?
                appState.nutritions.map((nutrition) => (<NutritionCard nutrition = {nutrition}/>)): 
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