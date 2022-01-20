import { render, screen, fireEvent } from '@testing-library/react'
import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { mocked } from 'jest-mock'
import { SubscribeButton } from '.'

jest.mock('next-auth/client')

jest.mock('next/router')

describe('SubscribeButton Component', () => {
  test('renders correctly', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    render(
      <SubscribeButton />

    )
  
    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    const signInMocked = mocked(signIn)

    render(<SubscribeButton/>)

    const subscribeBtn = screen.getByText('Subscribe now')

    fireEvent.click(subscribeBtn)
    
    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects user to posts when has a active subscription', () => {
    const useRouterMocked = mocked(useRouter)
    const useSessionMocked = mocked(useSession)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce([
      { 
        user: {
          name: 'user',
          email: 'user@example.com'
        },
        expires: 'fake',
        activeSubscription: 'active'
      }, 
      false
    ])

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

  
    render(<SubscribeButton/>)

    const subscribeBtn = screen.getByText('Subscribe now')

    fireEvent.click(subscribeBtn)
    
    expect(pushMock).toHaveBeenCalledWith('/posts')
  })
})

