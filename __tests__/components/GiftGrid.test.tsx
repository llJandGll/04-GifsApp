import React from 'react';
import { describe, expect, Mock, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GiftGrid } from '../../src/components/GiftGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

vi.mock('../../src/hooks/useFetchGifs');

describe('Test in <GiftGrid/>', () => { 
  const category: string = 'One Punch';



  test('should view loading initialized', () => { 

   (useFetchGifs as Mock).mockReturnValue({
      gifs: [],
      isLoading: true
    });
    render(<GiftGrid category={ category } onDeleteCategory={ () => {}} />);

    expect(screen.getByText('Loading...')).toBeTruthy();
  });


  test('should items views when its loading  the gifs', () => { 
    
    const gifs = [
      {
        id: 'ABC',
        title: 'Cualquier cosa',
        url: 'https://localhost/cualquier.jpg'
      },
      {
        id: 'ABCD',
        title: 'Cualquier cosa 2',
        url: 'https://localhost/cualquier2.jpg'
      }
    ];

    (useFetchGifs as Mock).mockReturnValue({
      gifs: gifs,
      isLoading: false
    });

    render(<GiftGrid category={ category } onDeleteCategory={ () => {}} />);

    screen.debug();
    expect( screen.getAllByRole('img').length).toBe(gifs.length);
    expect(screen.getByText(category)).toBeTruthy();
    expect(screen.queryByText('Loading...')).toBeNull();
    expect(screen.getByText(gifs[0].title)).toBeTruthy();
    // expect(screen.getByAltText(gifs[0].title)).toBeTruthy
  })
});