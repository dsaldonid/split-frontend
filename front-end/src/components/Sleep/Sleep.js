import { Box, Typography , Button} from '@material-ui/core/'
import { useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import SleepCard from '../SleepCard/SleepCard'
import useRedirect from '../../hooks/useRedirect'
import { useAppStateContext } from '../../contexts/appStateContext';
import "./Sleep.css"

export default function Sleep(){
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
        <div className = "Sleep">
            <div className ="banner">
                <Typography variant="h3" gutterBottom>
                    Sleep
                </Typography>
            </div>
            <div className = "overview">
                <Typography variant="h4" gutterBottom>
                    Overview
                </Typography>
                <Link to="/Sleep/form" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary" size = "small">
                        Add Sleep
                    </Button>
                </Link>
            </div>
            <Box display="flex" flexDirection="row" flexWrap ="wrap" justifyContent="center" alignItems="center">
                {appState.sleep.length !== 0?
                appState.sleep.map((sleep) => (<SleepCard sleep = {sleep}/>)): 
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