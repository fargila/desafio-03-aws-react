// Header.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import PortifolioPage from '../pages/PortifolioPage';

describe('Header Component', () => 
{
    beforeAll(() => {window.scrollTo = jest.fn()})

    it('should render all navigation buttons the different sections of the page', () => 
    {
        render(<Header />)

        expect(screen.getByText('inicio')).toBeInTheDocument()
        expect(screen.getByText('minha historia')).toBeInTheDocument()
        expect(screen.getByText('experiencias')).toBeInTheDocument()
        expect(screen.getByText('contato')).toBeInTheDocument()
    })

    test('should redirect to the login page when logout is clicked', () => 
    {
        render(
        <MemoryRouter initialEntries={['/portifolio']}>
            <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/portifolio" element={<PortifolioPage />} />
            </Routes>
        </MemoryRouter>
        )

        const logout = screen.getByRole('button', { name: /sair/i })
        fireEvent.click(logout)

        expect(screen.getByText('digite o nome do usuario')).toBeInTheDocument()
    })
})
