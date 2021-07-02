import apiClient from '../services/apiClient';
import { useNavigate } from "react-router";
import { useEffect, useState } from "react"

//will be used by both of my login components
export default function useLoginHook({ setAppState }) {
    const [isProcessing, setIsProcessing] = useState(false)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        username: "",
        password: "",
    })

    const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))

        const { data, error } = await apiClient.loginUser({ username: form.username, password: form.password })
        if (error) {
            setErrors((e) => ({ ...e, form: error }))
        }
        if (data?.user) {
            setAppState((a) => (
                {
                    ...a, user: data.user, isAuthenticated: true
                }
            ))
            apiClient.setToken(data.token)
        }
        setIsProcessing(false)
        navigate("/activity")
    }

    return { handleOnSubmit, handleOnInputChange, form, setForm, setErrors }
}