import { renderHook } from '@testing-library/react'

import { useMediaQuery } from './useMediaQuery'

let originalMatchMedia: typeof window.matchMedia

describe('useMediaQuery', () => {

   beforeAll(() => {
      originalMatchMedia = window.matchMedia
   })

   afterAll(() => {
      window.matchMedia = originalMatchMedia
   })

   it('returns true when the query matches', () => {
      window.matchMedia = jest.fn().mockImplementation(query => ({
         matches: true,
         media: query,
         addListener: jest.fn(),
         removeListener: jest.fn(),
         addEventListener: jest.fn(),
         removeEventListener: jest.fn(),
         dispatchEvent: jest.fn(),
      }))

      const { result } = renderHook(() => useMediaQuery('(min-width: 300px)'))
      expect(result.current).toBe(true)
   })

   it('returns false when the query does not match', () => {
      window.matchMedia = jest.fn().mockImplementation(query => ({
         matches: false,
         media: query,
         addListener: jest.fn(),
         removeListener: jest.fn(),
         addEventListener: jest.fn(),
         removeEventListener: jest.fn(),
         dispatchEvent: jest.fn(),
      }))

      const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'))
      expect(result.current).toBe(false)
   })
})
