import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import NavBar from '../NavBar/NavBar';
import Hero from "../Hero/Hero"
import Activity from '../Activity/Activity';
import Login from '../Login/Login';
import Exercise from '../Exercise/Exercise';
import Nutrition from '../Nutrition/Nutrition';
import Sleep from '../Sleep/Sleep';
import SignUp from '../SignUp/SignUp';
import InvalidLogin from '../InvalidLogin/InvalidLogin';
import ExerciseForm from "../ExerciseForm/ExerciseForm"
import NutritionForm from "../NutritionForm/NutritionForm"
import SleepForm from "../SleepForm/SleepForm"
// import apiClient from '../../services/apiClient';
import { AppStateProvider} from "../../contexts/appStateContext"

export default function AppContainer(){
  return(
    <AppStateProvider>
      <App/>
    </AppStateProvider>
  )
}

function App() {
  // const [user, setUser] = useState({})
  // const [error , setError] = useState(null)
  // const [exercise, setExercise] = useState([])
  // const [isAuthenticated, setAuthentication] = useState(false)

  // const [appState, setApp] = useState({
  //   user: null,
  //   isAuthenticated: false,
  //   nutrition: [],
  //   sleep: [],
  //   exercise: [],
  //   token: ""
  // })

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data, error } = await apiClient.fetchUserFromToken()
  //     if (data){
  //       setUser(data.user)
  //       setAuthentication(true)
  //     } 
  //     if (error) setError(error)
  //   }

  //   const token = localStorage.getItem("fitness_app_token")
  //   if (token) {
  //     apiClient.setToken(token)
  //     fetchUser()
  //   }
  // }, [])

  // useEffect(() => {
  //   const fetchExercise = async () => {
  //     const { data, error } = await apiClient.listUserExercise()
  //     if (data) setExercise(data.exercises)
  //     if (error) setError(error)
  //   }
  //     fetchExercise()
  
  // }, [exercise])
//  just in case i fuk it up 
// return (
  //   <div className="App">
  //     <BrowserRouter>
  //       <NavBar user={user} setUser={setUser} setExercise={setExercise}/>
  //       <Routes>
  //         <Route path = "/" element={<Hero/>}/>
  //         <Route path=  "/activity" element={<Activity user={user}/>}></Route>
  //         <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
  //         <Route path="/signup" element={<SignUp user={user} setUser={setUser}/>}/>
  //         <Route path="/exercise" element={<Exercise user={user} exercises={exercise}/>}/>
          // <Route path="/nutrition" element={<Nutrition user={user}/>}/>
  //         <Route path="/sleep" element={<Sleep user={user}/>}/>
  //         <Route path="/invalidlogin" element={<InvalidLogin user={user} setUser={setUser}/>}/>
  //         <Route path="/exercise/form" element={<ExerciseForm setExercise={setExercise}/>}/>
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = "/" element={<Hero/>}/>
          <Route path=  "/activity" element={<Activity />}></Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/exercise" element={<Exercise/>}/>
          <Route path="/nutrition" element={<Nutrition/>}/>
          <Route path="/sleep" element={<Sleep/>}/>
          <Route path="/invalidlogin" element={<InvalidLogin/>}/>
          <Route path="/exercise/form" element={<ExerciseForm />}/>
          <Route path="/nutrition/form" element={<NutritionForm />}/>
          <Route path="/sleep/form" element={<SleepForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

