import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {
    let [user, setUser]=useState("")

    useEffect(()=>{
        async function getData() {
            let{data} = await axios.get("https://api.github.com/users")
            // console.log(data);
            setUser(data)  
        }
        getData()
    },[])

  return (
    <div>
      <table border={2} cellPadding={10}>
      <tr>
        <th>User Id</th>
        <th>User Name</th>
        <th>Profile</th>
        
        <th>Link</th>
      </tr>

      {
        user && user.map ((ele)=>{
            return(
                <tr>
                    <td>{ele.id}</td>
                    <td>{ele.login}</td>
                    <td>
                        <img src={ele.avatar_url} alt="" height={100}/>
                    </td>
                    <td>
                        <a href="">{ele.repos_url}</a>
                    </td>
                </tr>
            )
        })
      }
      </table>
    </div>
  )
}

export default Axios