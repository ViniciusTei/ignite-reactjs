import React, { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';

//https://api.github.com/users/ViniciusTei/repos
export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ViniciusTei/repos')
          .then(response => response.json()
          .then(data => setRepositories(data)))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repo) => {
          return (
          <RepositoryItem 
            key={repo.id}
            repository={repo.name} 
            description={repo.description}
            link={repo.html_url}
          />
          )})}
      </ul>
    </section>
  );
}
