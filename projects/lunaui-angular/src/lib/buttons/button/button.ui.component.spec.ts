import { render, screen } from '@testing-library/angular'
import { ButtonComponent } from './button.component'

describe('Button component ui', () => {
  it('should render the button', async () => {
    await render(ButtonComponent)
    const button = await screen.findByTestId('button')
    expect(button).toBeTruthy()
  })
})
