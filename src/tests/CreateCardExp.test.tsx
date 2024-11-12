// CreateCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import CreateCardExp from '../components/CreateCardExp'

describe('CreateCard', () => 
{
    it('should disable the save button if any of the required inputs are empty', () => 
    {
        render(<CreateCardExp onAddCard={jest.fn()} />)
        const createButton = screen.getByRole('button', { name: /salvar/i })
        expect(createButton).toBeDisabled()

        fireEvent.change(screen.getByPlaceholderText(/titulo/i), 
        { target: { value: 'projectName' }, })
        fireEvent.change(screen.getByPlaceholderText(/periodo de atuacao/i), 
        { target: { value: 'duration' }, })
        fireEvent.change(screen.getByPlaceholderText(/habilidades/i), 
        { target: { value: 'skills' }, })
        fireEvent.change(screen.getByPlaceholderText(/descrevas sua/i), 
        { target: { value: 'description' }, })
        fireEvent.change(screen.getByPlaceholderText(/link do repositorio/i), 
        { target: { value: 'url' }, })

        expect(createButton).toBeEnabled()

        fireEvent.change(screen.getByPlaceholderText(/titulo/i), 
        { target: { value: '' }, })
        expect(createButton).toBeDisabled()
    })

    it('should call onCreate when all the required (and non-required) values are filled', () => 
    {
        render(<CreateCardExp onAddCard={jest.fn()} />)

        const titleInput = screen.getByPlaceholderText(/titulo/i)
        const durationInput = screen.getByPlaceholderText(/periodo de atuacao/i)
        const skillInput = screen.getByPlaceholderText(/habilidades/i)
        const descriptionInput = screen.getByPlaceholderText(/descrevas sua/i)
        const urlInput = screen.getByPlaceholderText(/link do repositorio/i)
        const saveButton = screen.getByRole('button', { name: /salvar/i })

        fireEvent.change(titleInput, { target: { value: 'title' } })
        fireEvent.change(durationInput, { target: { value: 'duration' } })
        fireEvent.change(skillInput, { target: { value: ['1', '2', '...', 'n'] } })
        fireEvent.change(descriptionInput, { target: { value: 'description' } })
        fireEvent.change(urlInput, { target: { value: 'url' } })

        fireEvent.click(saveButton)

        expect(jest.fn()).toHaveBeenCalledWith(
        {
            projectName: 'title',
            duration: 'duration',
            skills: ['1', '2', '...', 'n'],
            description: 'description',
            repLink: 'url'
        })
    })
})