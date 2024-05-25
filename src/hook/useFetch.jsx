import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../Url/backendUrl";

export function useFetch(url) {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    useEffect(() => {
        async function getFetch() {
            try {
                const response = await axios.get(`${backendUrl}/${url}`);
                setData(response.data)
            } catch(error) {
                setError(error)
            }
        }
        getFetch()
    }, [url]);
    return [    data, error ]
}