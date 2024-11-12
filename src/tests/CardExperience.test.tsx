import { render, screen, fireEvent } from '@testing-library/react';
import CardExperience from '../components/CardExperience';

describe('CardExperience as a functional component', () => 
{
    const mockOnDelete = jest.fn()
    it('should render each card with the information from props', () => 
    {
        render(<CardExperience projectName={'string'} duration={'string'} skills={['1', '2', '...', 'n']}
        description={'string'} repLink={'string'} onDelete={mockOnDelete} onFocus={jest.fn()} />)
        expect(screen.getByText(/sample title/i)).toBeInTheDocument()
        expect(screen.getByText(/sample description/i)).toBeInTheDocument()
    })

    it('should call onDelete when the delete button is clicked', () => 
    {
        render(<CardExperience projectName={'string'} duration={'string'} skills={['1', '2', '...', 'n']}
            description={'string'} repLink={'string'} onDelete={mockOnDelete} onFocus={jest.fn()} />)
        const deleteButton = screen.getByLabelText('deleteCard')
        fireEvent.click(deleteButton)
        expect(mockOnDelete).toHaveBeenCalled()
    })

    it('should open the edit popup (<EditCardExp />) when the edit button is clicked', () => 
    {
        render(<CardExperience projectName={'string'} duration={'string'} skills={['1', '2', '...', 'n']}
            description={'string'} repLink={'string'} onDelete={mockOnDelete} onFocus={jest.fn()} />)
        const editButton = screen.getByLabelText('editCard')
        fireEvent.click(editButton)

        expect(screen.getByPlaceholderText(/titulo/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/periodo de atuacao/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/habilidades/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/descreva sua/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/link do repositorio/i)).toBeInTheDocument()
    })

    it('should close the edit popup when cancel button is clicked', () => 
    {
        render(<CardExperience projectName={'string'} duration={'string'} skills={['1', '2', '...', 'n']}
        description={'string'} repLink={'string'} onDelete={mockOnDelete} onFocus={jest.fn()} />)
        const editButton = screen.getByLabelText('editCard')
        fireEvent.click(editButton)

        const cancelButton = screen.getByRole('button', { name: /cancelar/i })
        fireEvent.click(cancelButton)

        expect(screen.getByPlaceholderText(/titulo/i)).not.toBeInTheDocument()
        expect(screen.getByPlaceholderText(/periodo de atuacao/i)).not.toBeInTheDocument()
        expect(screen.getByPlaceholderText(/habilidades/i)).not.toBeInTheDocument()
        expect(screen.getByPlaceholderText(/descreva sua/i)).not.toBeInTheDocument()
        expect(screen.getByPlaceholderText(/link do repositorio/i)).not.toBeInTheDocument()
    })
})
