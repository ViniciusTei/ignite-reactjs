import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/client'  
import { mocked } from 'jest-mock'
import { SigninButton } from '.'

jest.mock('next-auth/client')

describe('SigninButton Component', () => {
  test('renders correctly when user not logged in', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])
    render(
      <SigninButton />

    )
  
    expect(screen.getByText('Sigin with github')).toBeInTheDocument()
  })

  test('renders correctly when user is logged in', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([{user: { name: "John Doe"}}, false])
    render(
      <SigninButton />

    )
  
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

})

