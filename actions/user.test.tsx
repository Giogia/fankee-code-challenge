
import { getUser } from './user'

const TEST_ERROR = 'Test Error'
const TEST_EMAIL = 'user@mail.com'

jest.mock('../utils/supabase/server', () => ({
   createClient: jest.fn().mockReturnValue({
      auth: {
         getUser: jest.fn()
            .mockReturnValueOnce({ data: { user: null }, error: 'Test Error' })
            .mockReturnValueOnce({ data: { user: { email: 'user@mail.com' } }, error: {} }),
      }
   })
}))

describe('Auth Module', () => {

   it('returns error on invalid session', async () => {

      const formData = new FormData()
      formData.set('email', 'not-valid-email')

      const res = await getUser()
      expect(res).toEqual({
         data: { user: null },
         error: TEST_ERROR
      })
   })

   it('returns user on valid session', async () => {

      const formData = new FormData()
      formData.set('email', TEST_EMAIL)

      const res = await getUser()
      expect(res).toEqual({
         data: { user: { email: TEST_EMAIL } },
         error: {}
      })
   })
})
