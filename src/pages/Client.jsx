import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { backendUrl } from '../Url/backendUrl';
import { useFetch } from '../hook/useFetch';


function Client() {
    const navigate = useNavigate();
    const [ categories, error ] = useFetch('categories');
    const categoriesList = categories && categories.map(el => 
        <div className='w-[230px] text-center shadow-lg p-4 hover:shadow-xl'>
            <img src={el.image} alt={el.name} />
            <h2>{el.name}</h2>
            <button onClick={() => handleDelete(el._id)} className='bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'>Delete</button>
        </div>
    )
    const errorResult = <h1>There is some error ocured fetching data</h1>
    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: token,
            }
            const response = await axios.delete(`${backendUrl}/categories/${id}`, {
                headers: headers
            })
            if(response.data) {
                navigate(0)
            }
        } catch(err) {
            console.log('Xatolik yuz berdi ', err);
        }
    }
    return (
    <div className='grid grid-cols-3 justify-evenly'>{error ? errorResult : categoriesList}</div>
  )
}

export default Client
