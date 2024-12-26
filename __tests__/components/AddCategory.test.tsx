import { test, describe, expect, vi } from 'vitest';  import { fireEvent, render, screen } from '@testing-library/react';
  import { AddCategory } from '../../src/components/AddCategory';
  import React from 'react';

  describe('Test in AddCategory.tsx', () => { 
    test('should change the input value', () => { 
      render(<AddCategory onNewCategory={ () => {} } handleError={ () => ({
        errorMessage: '',
        setErrorMessage: () => {}
      })} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;

      fireEvent.input(input, { target: { value: 'Hola Mundo' } });

      expect(input.value).toBe('Hola Mundo');
    });

    test('should call onNewCategory if input has value', () => { 
      const value :string = 'goku';
      const onNewCategory = vi.fn();

      render(<AddCategory onNewCategory={ onNewCategory } handleError={ () => ({
        errorMessage: '',
        setErrorMessage: () => {}
      })} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      const form = screen.getByRole('form');

      fireEvent.input(input, { target: { value: value }});
      fireEvent.submit(form);
      
      expect(input.value).toBe('');
      expect(onNewCategory).toHaveBeenCalledTimes(1);
      expect(onNewCategory).toHaveBeenCalledWith(value.toLowerCase());
    });

    test('Should not call onNewCategory if input is empty', () => { 
      const onNewCategory = vi.fn();
      render(<AddCategory onNewCategory={ onNewCategory } handleError={ () => ({
        errorMessage: '',
        setErrorMessage: () => {}
      })} />);
    
      const form = screen.getByRole('form') as HTMLFormElement;
      fireEvent.submit(form);
    
      expect(onNewCategory).toHaveBeenCalledTimes(0);
      expect(onNewCategory).not.toHaveBeenCalled();
    });

    test('should show an error message if input is empty', () => {

      const setErrorMessage = vi.fn();
      render(<AddCategory onNewCategory={ () => {} } handleError={ () => ({
        errorMessage: '',
        setErrorMessage: setErrorMessage
      })} />);

      const form = screen.getByRole('form') as HTMLFormElement;
      fireEvent.submit(form);

      
      expect(setErrorMessage).toHaveBeenCalledWith('the field is empty');
    });



    test('should call onNewCategory when Add Category button is clicked', () => {
      const value: string = 'vegeta';
      const onNewCategory = vi.fn();

      render(<AddCategory onNewCategory={ onNewCategory } handleError={ () => ({
        errorMessage: '',
        setErrorMessage: () => {}
      })} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      const button = screen.getByRole('button', { name: /add category/i });

      fireEvent.input(input, { target: { value: value }});
      fireEvent.click(button);

      expect(input.value).toBe('');
      expect(onNewCategory).toHaveBeenCalledTimes(1);
      expect(onNewCategory).toHaveBeenCalledWith(value);
    });
  });
