import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

async function getUsers(): Promise<User[]> {
  const { data } = await api.get('/users');

  const users = data.users.map(user => {
      return {
          ...user,
          created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
          })
      }
  })
  return users;
}

export function useUsers() {
  return useQuery('users', getUsers, {
      staleTime: 5000,
  })
}