import { getUser, updateUser } from './user'
import { USER_ERROR, USER_UPDATE_ERROR } from './user.strings'

const TEST_EMAIL = 'user@mail.com'
const TEST_NAME = 'User Name'

jest.mock('../utils/supabase/server', () => ({
   createClient: jest.fn().mockReturnValue({
      auth: {
         getUser: jest.fn()
            .mockReturnValueOnce({ data: { user: null }, error: 'Test Error' })
            .mockReturnValueOnce({ data: { user: { email: 'user@mail.com' } }, error: null })
            .mockReturnValueOnce({ data: { user: { email: 'user@mail.com' } }, error: null }),
      },
      from: jest.fn().mockReturnValue({
         select: jest.fn().mockReturnValue({
            eq: jest.fn()
               .mockReturnValueOnce({ data: [], error: null })
               .mockReturnValueOnce({ data: [{ name: 'User Name' }], error: null }),
         }),
         upsert: jest.fn().mockReturnValue({
            eq: jest.fn().mockReturnValue({
               single: jest.fn()
                  .mockReturnValueOnce({ data: { profile: null }, error: 'Test Error' })
                  .mockReturnValueOnce({ data: { profile: { name: 'User Name' } }, error: null }),
            })
         })
      })
   })
}))

describe('Get User', () => {

   it('returns error on invalid session', async () => {
      const res = await getUser()
      expect(res).toEqual({
         data: { profile: {} },
         error: USER_ERROR
      })
   })

   it('returns user on valid session', async () => {
      const res = await getUser()
      expect(res).toEqual({
         data: { user: { email: TEST_EMAIL } },
         error: null
      })
   })

   it('returns user and profile on valid session', async () => {
      const res = await getUser()
      expect(res).toEqual({
         data: {
            user: { email: TEST_EMAIL },
            profile: { name: TEST_NAME }
         },
         error: null
      })
   })
})

describe('Update User', () => {

   it('returns error on invalid session', async () => {

      const formData = new FormData()
      formData.set('email', TEST_EMAIL)
      formData.set('name', TEST_NAME)

      const res = await updateUser({}, formData)
      expect(res).toEqual({
         data: { profile: {} },
         error: USER_UPDATE_ERROR
      })
   })

   it('returns user on valid session', async () => {

      const formData = new FormData()
      formData.set('email', TEST_EMAIL)
      formData.set('name', TEST_NAME)

      const res = await updateUser({}, formData)
      expect(res).toEqual({
         data: { profile: { name: TEST_NAME } },
         error: null
      })
   })
})
