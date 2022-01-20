import { render, screen } from '@testing-library/react'
import { getPrismicClient } from '../../services/prismic'
import { mocked } from 'jest-mock'
import Posts, { getStaticProps } from '../../pages/posts'

jest.mock('../../services/prismic')

const postsMocked = [
  { slug: 'mock-post-slug', title: 'My test post', excerpt: 'Test post', updatedAt: '10 de abril'}
]

describe('Posts page', () => {
  test('should render correctly', () => {
    render(<Posts posts={postsMocked}/>)

    expect(screen.getByText('My test post')).toBeInTheDocument()
  })

  test('should load initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'mock-post-slug',
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
          }
        ]
      }) 
    } as any)

    const response = await getStaticProps({})


    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [{
            slug: 'mock-post-slug', 
            title: 'My test post', 
            excerpt: 'Test post', 
            updatedAt: 'April 01, 2021'
          }]
        },
      })
    )
  })
})