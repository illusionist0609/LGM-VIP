import React from 'react'
const Users = ({loading,users}) => {
    return loading ? (
          <div id="main">
            
          </div>
          
        ) :
        (
          <div className='row' id="main">  
          {users.map(user =>
                      <div className="row row-cols-1  row-cols-md-3 ">
                       
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <p>User ID: {user.id}</p>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <h4 className="email">{user.email}</h4>
                        </div>
                       
                      </div>
            )
          }
          </div>
        )
}

export default Users