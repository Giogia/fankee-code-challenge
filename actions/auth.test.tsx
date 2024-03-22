import * as nextNavigation from 'next/navigation'

import { signIn, signOut } from './auth'
import { EMAIL_ERROR, EMAIL_SUCCESS } from './auth.strings'

const FIXED_TIME_STAMP = new Date('1995-12-12T13:05:00Z').getTime()
const TEST_ERROR = 'Test Error'

jest.mock('next/navigation')
jest.mock('../utils/supabase/server', () => ({
   createClient: jest.fn().mockReturnValue({
      auth: {
         signInWithOtp: jest.fn()
            .mockReturnValueOnce({ error: 'Test Error' })
            .mockReturnValueOnce({ data: {} }),
         signOut: jest.fn().mockReturnValue({ error: 'Test Error' }),
      }
   })
}))

const mockRedirect = jest.spyOn(nextNavigation, 'redirect')

describe('Auth Module', () => {

   beforeAll(() => jest.spyOn(Date, 'now').mockImplementation(() => FIXED_TIME_STAMP))
   afterAll(() => jest.spyOn(Date, 'now').mockRestore())

   it('redirects to error page on signIn failure', async () => {

      await signIn('test@example.com')
      expect(mockRedirect).toHaveBeenCalledWith(`/login?reqId=${FIXED_TIME_STAMP}&error=${EMAIL_ERROR}: ${TEST_ERROR}`)
   })

   it('show email sent message on signIn success', async () => {

      await signIn('test@example.com')
      expect(mockRedirect).toHaveBeenCalledWith(`/login?reqId=${FIXED_TIME_STAMP}&message=${EMAIL_SUCCESS}`)
   })

   it('redirects to login page on signOut', async () => {

      await signOut()
      expect(mockRedirect).toHaveBeenCalledWith('/')
   })
})
