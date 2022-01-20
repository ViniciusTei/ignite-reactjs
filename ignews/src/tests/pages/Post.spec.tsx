import { render, screen } from '@testing-library/react'
import { getSession } from 'next-auth/client'
import { getPrismicClient } from '../../services/prismic'
import { mocked } from 'jest-mock'
import Post, { getServerSideProps } from '../../pages/posts/[slug]'

jest.mock('../../services/prismic')
jest.mock('next-auth/client')

const postMocked = { 
    slug: 'mock-post-slug', 
    title: 'My test post', 
    content: '<p>Test post</p>', 
    updatedAt: '10 de abril'
  }

describe('Post page', () => {
  test('should render correctly', () => {
    render(<Post post={postMocked}/>)

    expect(screen.getByText('My test post')).toBeInTheDocument()
    expect(screen.getByText('Test post')).toBeInTheDocument()
  })

  test('should redirect user with no subscription', async () => {
    const getSessionMocked = mocked(getSession)

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: null
    })


    const response = await getServerSideProps({
      req: {
        cookies: {}
      },
      params: {
        slug: 'mock-post-slug'
      }
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        redirect: {
          destination: '/',
          permanent: false
        }
    }))
  })

  test('should load initial data', async () => {
    const getSessionMocked = mocked(getSession)
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

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: 'fake-active-subscription'
    })

    const response = await getServerSideProps({
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
          }
        }
    }))
  })
})