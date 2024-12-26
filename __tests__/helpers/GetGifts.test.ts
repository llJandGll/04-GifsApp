import { test, describe, expect } from 'vitest';
import { getGifs } from '../../src/helpers/getGifts';
import { Gif } from '../../src/interfaces';
describe('Test in getGift.tsx', () => { 
  test('it should return a gifs arrays', async () => { 
    const gifs : Gif[] = await getGifs('One Punch');
    const gifSign: Gif = {
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    }
    expect(gifs.length).toBeGreaterThan(0);

    expect( gifs[0]).toEqual( gifSign);
  })
})