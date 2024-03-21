import * as nextNavigation from 'next/navigation'

import { signIn, signOut } from './auth'

jest.mock('next/navigation')
jest.mock('../utils/supabase/server', () => ({
   createClient: jest.fn().mockReturnValue({
      auth: {
         signInWithOtp: jest.fn()
            .mockReturnValueOnce({error: 'Test error'})
            .mockReturnValueOnce({ data: {} }),
         signOut: jest.fn().mockReturnValue({error: 'Test error'}),
      }
   })
}))

const mockRedirect = jest.spyOn(nextNavigation, 'redirect')

const fixedTimestamp = new Date('1995-12-12T13:05:00Z').getTime()

describe('Auth Module', () => {

   beforeAll(() => jest.spyOn(Date, 'now').mockImplementation(() => fixedTimestamp))
   afterAll(() => jest.spyOn(Date, 'now').mockRestore())
    
   it('redirects to error page on signIn failure', async () => {

      await signIn('test@example.com')
      expect(mockRedirect).toHaveBeenCalledWith('/login?reqId=818773500000&error=Could not authenticate user: Test error')
   })

   it('show email sent message on signIn success', async () => {
       
      await signIn('test@example.com')
      expect(mockRedirect).toHaveBeenCalledWith('/login?reqId=818773500000&message=Check email to continue sign in process')
   })

   it('redirects to login page on signOut', async () => {
       
      await signOut()
      expect(mockRedirect).toHaveBeenCalledWith('/')
   })
})
