import React from 'react'

function RepositoryItem({repository, description, link}) {
  return (
    <li>
        <strong>{repository}</strong>
        <p>{description}</p>
        <a href={link}>Acessar repositorio</a>
    </li>
  )
}

export default RepositoryItem
