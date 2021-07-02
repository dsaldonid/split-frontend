import Button from '@material-ui/core/Button';
import "./NavBar.css"
import { useNavigate, Link } from "react-router-dom"
import apiClient from '../../services/apiClient';
import { useAppStateContext } from '../../contexts/appStateContext';

export default function NavBar(){
    const { appState, setAppState} = useAppStateContext()
    const navigate = useNavigate()
    // check how states work for multiple users at once
    const emptyUser = async () => {
        await apiClient.logoutUser()
        navigate("/")
        setAppState({
            user: null,
            isAuthenticated: false,
            nutrition: [],
            sleep: [],
            exercise: [],
            token: ""
          })
        
    }

    const log = () =>{
        navigate("/login")
    }

    const reg = () =>{
        navigate("/signup")
    }
    
    return(
        <div className = "navbar">
            <img src = "http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg" alt = "logo" width="40px" height="40px"></img>
            <div className = "nav-buttons">
                <Link to="/activity" style={{ textDecoration: 'none' }}>
                    <Button color="primary">Activity</Button>
                </Link>
                
                <Link to="/exercise" style={{ textDecoration: 'none' }}>
                    <Button color="primary">Exercise</Button>
                </Link>

                <Link to="/nutrition" style={{ textDecoration: 'none' }}>
                    <Button color="primary">Nutrition</Button>
                </Link>
                
                <Link to="/sleep" style={{ textDecoration: 'none' }}>
                    <Button color="primary">Sleep</Button>
                </Link>

                {appState.user?
                 <Button onClick={emptyUser} color="primary">Sign Out</Button>:
                 <Button onClick={log} color="primary">Sign In</Button>}
        
                {appState.user?
                 <div></div>:
                 <Button onClick={reg} variant="contained" color="primary" disableElevation>
                    Sign Up
                 </Button>
                 }
            </div>
        </div>
    )
}