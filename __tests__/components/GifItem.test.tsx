import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';
import React from 'react';

describe('Test in GiftItem.tsx', () => { 
  
  const id : string = '1';
  const title : string = 'goku';
  const url : string = 'https://localhost/goku.gif';

  test('should show a snapshot', () => {
    const { container } = render(<GifItem id={ id } title={ title } url={ url } />);
    expect(container).toMatchSnapshot();
  });

  test('It should display the image with the indicated url and alt. ',() => {
    render(<GifItem id={ id } title={ title } url={ url } />);
    
    const { src , alt} = screen.getByRole('img') as HTMLImageElement;
    expect(src ).toBe(url);
    expect( alt ).toBe( title);

  });

  test('it should dispaly title in the component', () => { 
    
    render( <GifItem id={ id } title={ title } url={ url } />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeTruthy();
  })
})