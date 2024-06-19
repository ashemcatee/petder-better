import { render, screen } from '@testing-library/react';
import React from 'react';
import LoginSignup from '../pages/LoginSignup.jsx';

describe('App tests', () => {
    it('should contains the heading 1', () => {
    render(<LoginSignup />);
        const heading = screen.getByText(/Already have an account/i);
        expect(heading).toBeInTheDocument()
    });
});