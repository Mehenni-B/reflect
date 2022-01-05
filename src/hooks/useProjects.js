import useSWR from 'swr'
import axios from 'axios'
import _setAuthHeader from '../services/_setAuthHeader'
import { GET_PROJECTS } from '../services/_endPointes'

export function useProjects(){
    const fetcher = ()=>{
        const token = localStorage.getItem("APP_TOKEN")
        _setAuthHeader(token)
        return axios.get(GET_PROJECTS)
    }
    const { data, error, mutate } = useSWR('use-projects', fetcher, {revalidateOnMount:true, dedupingInterval: 10000})
    return {
        mutate,
        error,
        isLoading: !error && !data,
        projects : data
    }
}