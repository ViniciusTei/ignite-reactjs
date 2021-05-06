import React, { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';

interface IRepository {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

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
            repository={repo} 
          />
          )})}
      </ul>
    </section>
  );
}
