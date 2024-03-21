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

describe('Auth Module', () => {
   it('redirects to error page on signIn failure', async () => {
       
      const formData = new FormData()
      formData.append('email', 'test@example.com')

      await signIn(formData)
      expect(mockRedirect).toHaveBeenCalledWith('/login?error=Could not authenticate user: Test error')
   })

   it('show email sent message on signIn success', async () => {
       
      const formData = new FormData()
      formData.append('email', 'test@example.com')

      await signIn(formData)
      expect(mockRedirect).toHaveBeenCalledWith('/login?message=Check email to continue sign in process')
   })

   it('redirects to login page on signOut', async () => {
       
      await signOut()

      expect(mockRedirect).toHaveBeenCalledWith('/')
   })
})
