import { render, screen } from '@testing-library/react'
import { stripe } from '../../services/stripe'
import { mocked } from 'jest-mock'
import Home, { getStaticProps } from '../../pages'

jest.mock('next/router')
jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null, false]
  }
})
jest.mock('../../services/stripe')

describe('Home page', () => {
  test('should render correctly', () => {
    render(<Home product={{
      priceId: 'price-id-fake', 
      amount: '$10.00'
    }} />)

    expect(screen.getByText('for $10.00 monthly')).toBeInTheDocument()
  })

  test('should load initial data', async () => {
    const getStripePricesMocked = mocked(stripe.prices.retrieve)

    getStripePricesMocked.mockResolvedValueOnce({
      id: 'price-id-fake',
      unit_amount: 1000,
    } as any)

    const response = await getStaticProps({})


    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'price-id-fake', 
            amount: '$10.00'
          }
        },
        revalidate: 86400
      })
    )
  })
})