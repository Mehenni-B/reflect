import axios from 'axios'
import setAuthHeader from './_setAuthHeader'
import { LOGIN, SIGNUP, UPDATE_PROFILE, CREATE_PROJECT, EDIT_PROJECT, DELETE_PROJECT } from './_endPointes'

// login call
export const loginCall = (requestBody) => {
    return axios.post(LOGIN, requestBody)
}

// signup call
export const signupCall = (requestBody) => {
    return axios.post(SIGNUP, requestBody)
}

// update profile info
export const UpdateProfileCall = (requestBody)=>{
    const token = localStorage.getItem("APP_TOKEN")
    setAuthHeader(token)
    return axios.put(UPDATE_PROFILE, requestBody)
}

// create Project
export const createProjectCall = (requestBody)=>{
    const token = localStorage.getItem("APP_TOKEN")
    setAuthHeader(token)
    return axios.post(CREATE_PROJECT, requestBody)
}

// edit Projects
export const editProjectCall = (requestBody)=>{
    const token = localStorage.getItem("APP_TOKEN")
    setAuthHeader(token)
    return axios.put(EDIT_PROJECT, requestBody)
}

// delete Projects
export const deleteProjectCall = (id)=>{
    const token = localStorage.getItem("APP_TOKEN")
    setAuthHeader(token)
    return axios.delete(`${DELETE_PROJECT}/${id}`)
}