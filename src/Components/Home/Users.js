import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Chip } from 'primereact/chip'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

function Users({ list }) {
  const [searchTerm, setSearchTerm] = useState('')
  const searchHandler = (value) => setSearchTerm(value || '')
  return (
    <>
      <Searchbar searchTerm={searchTerm} searchHandler={searchHandler} />
      <div className="user-list">
        {list
          .filter((User) =>
            User.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((user, key) => (
            <Link to={`${user.username}`} key={`avatar-${key}`}>
              <Chip image={user.avatar} className="p-m-2" label={user.name} />
            </Link>
          ))}
      </div>
    </>
  )
}

Users.propTypes = {
  list: PropTypes.array.isRequired,
}

export default Users
