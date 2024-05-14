import React, { useState } from 'react'

export const Refgform = () => {

    const [user, setUser] = useState({
        name : "gowtham",
        age : 20
    })

    const namehandler = (e) => {
      const name = e.target.name

      const value = e.target.type == "checkbox" ? e.target.checked : e.target.value



      setUser( {...user, [name] : value});
           }
  return (

    <>
    
    <div>Registration form</div>

      <p>{user.name}<br/>
      {user.age}
      </p>

      <form action="">

        
    <input type="text" placeholder='enter your name' value={user.name} name='name' onChange={namehandler} />

    <input type="text" placeholder='enter your age' value={user.age} name='age' onChange={namehandler} />


      </form>


    </>
    
    
  )
}
