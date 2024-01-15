import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders content', () => {
  render(<App />)

  const element = screen.getByText('Sääsovellus')
  expect(element).toBeDefined()
})