import React from 'react';
import { render, screen } from '@testing-library/react';
import ExpandButton from './ExpandButton';

it('ExpandButton renders a plus sign when active is false', () => { 
    render(<ExpandButton active={false}/>);
    const PlusButton = screen.getByText('+');
    expect(PlusButton).toBeInTheDocument();
    expect(PlusButton.className).toContain('active');
});

it('ExpandButton renders a minus sign when active is true', () => { 
    render(<ExpandButton active={true}/>);
    const MinusButton = screen.getByTestId('true-minus');
    expect(MinusButton).toBeInTheDocument();
    expect(MinusButton.className).toContain('active');
});

