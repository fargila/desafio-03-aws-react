// ExampleComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import AddLink from '../components/AddLink';

describe('AddLink as a functional component', () => 
{
    it('should disable the save button if the input is empty', () => 
    {
        render(<AddLink onSaveLink={jest.fn()} />)
        const button = screen.getByRole('button', { name: /salvar/i })
        expect(button).toBeDisabled()
    })

    it('should enable the save button if the input is not empty', () => 
    {
        render(<AddLink onSaveLink={jest.fn()} />)
        const input = screen.getByPlaceholderText(/digite a url/i)
        const button = screen.getByRole('button', { name: /salvar/i })

        fireEvent.change(input, { target: { value: 'any string bigger than 1' } })
        expect(button).toBeEnabled()
    })

    it('should call the onSaveLink function if the input contains:'
    + 'linkedin.com", "instagram.com", "facebook.com", "x.com" or "youtube.com"', () => 
    {
        const mockOnSave = jest.fn()
        render(<AddLink onSaveLink={mockOnSave} />)
        const input = screen.getByPlaceholderText(/digite a url/i)
        const button = screen.getByRole('button', { name: /salvar/i })

        fireEvent.change(input, { target: { value: 'linkedin.com' } })
        fireEvent.click(button)
        expect(mockOnSave).toHaveBeenCalledWith('linkedin.com')

        fireEvent.change(input, { target: { value: 'instagram.com' } })
        fireEvent.click(button)
        expect(mockOnSave).toHaveBeenCalledWith('instagram.com')

        fireEvent.change(input, { target: { value: 'facebook.com' } })
        fireEvent.click(button)
        expect(mockOnSave).toHaveBeenCalledWith('facebook.com')

        fireEvent.change(input, { target: { value: 'x.com' } })
        fireEvent.click(button)
        expect(mockOnSave).toHaveBeenCalledWith('x.com')

        fireEvent.change(input, { target: { value: 'youtube.com' } })
        fireEvent.click(button)
        expect(mockOnSave).toHaveBeenCalledWith('youtube.com')
    })

    it(`should not call the onSaveLink function if the input doesn't contain said social links`, () => 
    {
        const mockOnSave = jest.fn()
        render(<AddLink onSaveLink={mockOnSave} />)
        const input = screen.getByPlaceholderText(/digite a url/i)
        const button = screen.getByRole('button', { name: /salvar/i })

        fireEvent.change(input, { target: { value: 'anything-else.com' } })
        fireEvent.click(button)

        expect(mockOnSave).not.toHaveBeenCalled()
    })
})
