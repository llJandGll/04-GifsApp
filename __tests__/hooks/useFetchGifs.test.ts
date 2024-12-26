import { test, describe, expect } from 'vitest';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('Pruebas en useFetchGifs.ts', () => { 
  
  test('debe retornar el estado inicial', () => { 
    
    const { result } = renderHook(() => useFetchGifs('goku'));
    const { gifs , isLoading } = result.current;

    expect( gifs.length ).toBe( 0 );
    expect( isLoading ).toBeTruthy();
  })

  test('debe retornar un arreglo de imágenes y isLoading en false', async () => { 
    
    const { result } = renderHook(() => useFetchGifs('goku'));

    await waitFor(
      () => expect( result.current.gifs.length ).toBeGreaterThan(0)
    )

    const { gifs , isLoading } = result.current;
    expect( isLoading ).toBeFalsy();
    expect( gifs.length ).toBeGreaterThan(0);
    expect( gifs[0] ).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  })

  test('debe manejar los errores correctamente', async () => {
    const { result } = renderHook(() => useFetchGifs('invalid-category'));

    await waitFor(
      () => expect( result.current.isLoading ).toBeTruthy()
    )

    const { gifs , isLoading } = result.current;
    expect( gifs.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  })
})