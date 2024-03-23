import * as nextNavigation from 'next/navigation'

import { signIn, signOut } from './auth'
import { EMAIL_ERROR, EMAIL_SUCCESS, EMAIL_VALIDATION_ERROR } from './auth.strings'

const TEST_ERROR = 'Test Error'
const TEST_EMAIL = 'user@mail.com'

jest.mock('next/navigation')
jest.mock('../utils/supabase/server', () => ({
   createClient: jest.fn().mockReturnValue({
      auth: {
         signInWithOtp: jest.fn()
            .mockReturnValueOnce({ error: { message: 'Test Error' } })
            .mockReturnValueOnce({ data: {} }),
         signOut: jest.fn().mockReturnValue({ error: { message: 'Test Error' } }),
      }
   })
}))

const mockRedirect = jest.spyOn(nextNavigation, 'redirect')

describe('Auth Module', () => {

   it('returns error on invalid email address', async () => {

      const formData = new FormData()
      formData.set('email', 'not-valid-email')

      const res = await signIn({}, formData)
      expect(res).toEqual({
         message: '',
         error: EMAIL_VALIDATION_ERROR
      })
   })

   it('returns error on signIn failure', async () => {

      const formData = new FormData()
      formData.set('email', TEST_EMAIL)

      const res = await signIn({}, formData)
      expect(res).toEqual({
         message: '',
         error: `${EMAIL_ERROR}: ${TEST_ERROR}`
      })
   })

   it('show email sent message on signIn success', async () => {

      const formData = new FormData()
      formData.set('email', TEST_EMAIL)

      const res = await signIn({}, formData)
      expect(res).toEqual({
         message: EMAIL_SUCCESS
      })
   })

   it('redirects to login page on signOut', async () => {

      await signOut()
      expect(mockRedirect).toHaveBeenCalledWith('/')
   })
})
