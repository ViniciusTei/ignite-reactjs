interface IRepositoryItem {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

function RepositoryItem({ repository }: IRepositoryItem ){
  return (
    <li>
        <strong>{repository.name}</strong>
        <p>{repository.description}</p>
        <a href={repository.html_url}>Acessar repositórios</a>
    </li>
  )
}

export default RepositoryItem
