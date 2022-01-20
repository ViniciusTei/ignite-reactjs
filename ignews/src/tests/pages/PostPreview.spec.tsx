import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/client'
import { getPrismicClient } from '../../services/prismic'
import { mocked } from 'jest-mock'
import Post, { getStaticProps } from '../../pages/posts/preview/[slug]'
import { useRouter } from 'next/router'

jest.mock('../../services/prismic')
jest.mock('next-auth/client')
jest.mock('next/router')

const postMocked = { 
    slug: 'mock-post-slug', 
    title: 'My test post', 
    content: '<p>Test post</p>', 
    updatedAt: '10 de abril'
  }

describe('Post Preview page', () => {
  test('should render correctly', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<Post post={postMocked}/>)

    expect(screen.getByText('My test post')).toBeInTheDocument()
    expect(screen.getByText('Test post')).toBeInTheDocument()
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument()
  })


  test('should redirect user to full post when user is subscribed', async () => {
    const useSessionMocked = mocked<any>(useSession)
    const useRouterMocked = mocked(useRouter)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce([{ activeSubscription: 'fake-active-subscription' }, false])

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(<Post post={postMocked} />)

    expect(pushMock).toHaveBeenCalledWith('/posts/mock-post-slug')
  })

  test('should load initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)
    
    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            {
              type: 'heading', text: 'My test post'
            }
          ],
          content: [
            {
              type: 'paragraph', text: 'Test post'
            }
          ]
        },
        last_publication_date: '04-01-2021'
      })
    } as any)

    const response = await getStaticProps({
      params: {
        slug: 'mock-post-slug'
      }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'mock-post-slug',
            title: 'My test post',
            content: '<p>Test post</p>',
            updatedAt: 'April 01, 2021'
          }, 
        },
        redirect: 1800
    }))
  })
})