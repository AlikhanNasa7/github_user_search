import React, { useEffect } from 'react'
import './Search.css'
import { useRef } from 'react'
import { useState } from 'react'
const Search = ({getUserData}) => {

    const usernameRef = useRef('')

    const [userData, setUserData] = useState(null)
    const [apiFeedback, setApiFeedback] = useState('good')

    useEffect(()=>{
        getUserData(userData,apiFeedback)
    },[userData])
    const usernameHandler = (e)=>{
        usernameRef.current = e.target.value
    }
    const whenSubmit = (e) => {
        e.preventDefault()
        const originalName = usernameRef.current.split(' ').join('')
        const fetchingData = fetch("https://api.github.com/users/"+originalName).then(result=>{
            if (!result.ok){
                setApiFeedback('bad')
            }else{
                setApiFeedback('good')
            }
            return result.json()
        }).then(data=>setUserData(data))
        
    }
  return (
    <form method="get" className="search-bar" onSubmit={whenSubmit}>
        <input type="text" className='inp' placeholder="Search GitHub username..." name= "g" onChange={usernameHandler}></input>
        <button type= "submit" className='btn'>Search</button>
    </form>
  )
}

export default Search