import React from "react"
import { instance as axios } from "../utils/axios"

const useFetchUser = () => {
    const [ data, setData ] = React.useState([])
    const [ loading, setLoading ] = React.useState(false)
    const [ error, setError ] = React.useState(null)

    React.useEffect(() => {
        (async () => {
            setLoading(true)
            await axios.get('users')
            .then(r => {
                if(r.status == 200) {
                    setData(r.data)
                }
            })
            .catch(e => {
                setError(e.response)
            })
            .finally(() => {
                setLoading(false)
            })
        })()
    }, [])

    return { data, loading, error }
}

export default useFetchUser