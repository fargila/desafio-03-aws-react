// ToggleForm.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import AddCardExp from '../components/AddCardExp';

describe('ToggleFormCreateCardExp as a functional component', () => 
{
  it('should open a form to create a card via toggle with .active in the className', () =>
{
    render(<AddCardExp />)

    const form = screen.getByRole('form')
    expect(form).not.toHaveClass('active')

    fireEvent.click(screen.getByText(/Criação de card/i))
    expect(form).toHaveClass('active')

    fireEvent.click(screen.getByText(/Criação de card/i))
    expect(form).not.toHaveClass('active')
  })
})
