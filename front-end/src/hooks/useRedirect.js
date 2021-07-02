import { useEffect,useState } from "react";
import { useNavigate } from "react-router"; 
import apiClient from '../services/apiClient';



export default function useRedirect({ appState }){
    const navigate = useNavigate()
    useEffect(() => {
        // if user is already logged in,
        // redirect them to the home page
        if (!appState.isAuthenticated) {
          navigate("/invalidlogin")
        }
      }, [appState.isAuthenticated, navigate])
}