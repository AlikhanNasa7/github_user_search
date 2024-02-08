import React from 'react'
import classes from './Body.module.css'
import { useState,useEffect } from 'react'
const Body = ({data, feedback}) => {

    const [date, setDate] = useState({
        year:'',
        month:'',
        day:''
    })
    useEffect(()=>{
        if (data && feedback==='good'){
            console.log(data,feedback)
            const timeCreated = data.created_at.split('T')[0].split('-')
            const [dataYear,dataMonth,dataDay] = timeCreated
            const date = new Date()
            date.setMonth(parseInt(dataMonth)-1)
            const monthname = date.toLocaleString('en-US',{
                month: 'short',
              })
            setDate({
                year: dataYear,
                month: monthname,
                day: dataDay
            })
            // monthname = new Date().setMonth(+dataMonth-1).toLocaleString('en-US')
        }
    },[data])
  return (
    feedback==='good' && data ? (
    <div className={classes.data}>
        <img className={classes.avatarka} src={data.avatar_url}></img>
        <div className={classes.bio}>
            <div className={classes.basicdata}>
                <div>
                    <h2>{data.login}</h2>
                    <p>{`Joined ${date.day} ${date.month} ${date.year}`}</p>  
                </div>
                <p>@octocat</p> 
                {data.bio && <p>{data.bio}</p>}
                {!data.bio && <p>This profile has no bio</p>}
            </div>
            <div className={classes.specificdatas}>
                <div className={classes.specificdata}>
                    <p className={classes['sd-name']}>Repos</p>
                    <h3 className={classes['sd-value']}>{data.public_repos}</h3>
                </div>
                <div className={classes.specificdata}>
                    <p className={classes['sd-name']}>Followers</p>
                    <h3 className={classes['sd-value']}>{data.followers}</h3>
                </div>
                <div className={classes.specificdata}>
                    <p className={classes['sd-name']}>Following</p>
                    <h3 className={classes['sd-value']}>{data.following}</h3>
                </div>
            </div>
            <div className={classes.links}>
                <p>San Francisco</p>
                <p>Not Available</p>
                <p>https://github.blog</p>
                <p>@github</p>
            </div>
        </div>
    </div>
    ) : <p>No data</p>
  )
}

export default Body