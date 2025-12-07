import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    console.log('useParams', useParams());
    const { id } = useParams();
  return (
    <div>
      <h2>User Profile For ID : {id}</h2>
    </div>
  )
}

export default User
