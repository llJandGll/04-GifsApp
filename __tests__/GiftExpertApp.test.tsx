import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import { GiftExpertApp } from '../src/GiftExpertApp';


describe('test in <GiftExperApp/>', () => { 
  test('should return the aplication of title ', () => { 
    render(<GiftExpertApp/>);
    
    expect( screen.getByText('GiftExpertApp')).toBeTruthy();
  }) 
  
  test('should change the funcional component when insert input value ', () => { 
    render(<GiftExpertApp/>);

    const inputValue = 'goku';
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;
    fireEvent.input( input , { target : {  value : inputValue } } )
    fireEvent.submit( form );

    expect( screen.getByRole('heading', { level : 2 }).textContent).toBe( inputValue )
    expect( screen.getByText('Loading...') ).toBeTruthy();
    screen.debug();
    
  })

  test('should delete a category', () => {
    render(<GiftExpertApp />);
    
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;
    
    // Add a category
    fireEvent.input(input, { target: { value: 'goku' } });
    fireEvent.submit(form);
    
    // Delete the category
    const deleteButton = screen.getByText('Delete Gifs');
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('goku')).toBeNull();
  });

  test('should show error message for duplicate category', () => {
    render(<GiftExpertApp />);
    
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;
    
    // Add a category
    fireEvent.input(input, { target: { value: 'goku' } });
    fireEvent.submit(form);
    
    // Try to add the same category again
    fireEvent.input(input, { target: { value: 'goku' } });
    fireEvent.submit(form);
    
    expect(screen.getByText('The category already exist')).toBeTruthy();
  });
})