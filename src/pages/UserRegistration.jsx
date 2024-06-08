import React from 'react'
import { useForm } from 'react-hook-form'

import Input from '../Components/ui/Input'
const UserRegistration = () => {
  const { register } = useForm()

  return (
    <div>
      <div>
        <div>
          <div className='p-8 rounded border border-gray-200 mt-10'>
            <h1 className='font-medium text-3xl'>Add User</h1>
            <p className='text-gray-600 mt-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos dolorem vel cupiditate laudantium dicta.
            </p>

            <form>
              <div className='mt-8 grid lg:grid-cols-2 gap-4'>
                {/* <div>
                  <label
                    htmlFor='name'
                    className='text-sm text-gray-700 block mb-1 font-medium'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    // value={registerData.username}
                    // onChange={handleUserInput}
                    className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full'
                    placeholder='Enter your name'
                  />
                </div> */}

                <Input
                  label='Full Name: '
                  placeholder='Enter your full name'
                  {...register('name', {
                    required: true
                  })}
                />
                <div>
                  <label
                    htmlFor='email'
                    className='text-sm text-gray-700 block mb-1 font-medium'
                  >
                    Email Adress
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    // value={registerData.email}
                    // onChange={handleUserInput}
                    className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full'
                    placeholder='yourmail@provider.com'
                  />
                </div>
                <div>
                  <label
                    htmlFor='contact'
                    className='text-sm text-gray-700 block mb-1 font-medium'
                  >
                    Mobile number
                  </label>
                  <input
                    type='number'
                    name='contact'
                    id='contact'
                    // value={registerData.contact}
                    // onChange={handleUserInput}
                    className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full'
                    placeholder='+91XXXXXXXXXX'
                  />
                </div>
                <div className=' flex gap-7 items-center'>
                  <label
                    htmlFor='job'
                    className='text-sm text-gray-700 block mb-1 font-medium'
                  >
                    Gender
                  </label>
                  <select
                    // onChange={handleUserInput}
                    // value={registerData.gender}
                    name='gender'
                    id='gender'
                    className=' border px-5 py-2'
                  >
                    <option>-Select-</option>
                    <option className=' capitalize font-semibold' value='male'>
                      male
                    </option>
                    <option
                      className=' capitalize font-semibold'
                      value='female'
                    >
                      female
                    </option>
                    <option className=' capitalize font-semibold' value='other'>
                      other
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='text-sm text-gray-700 block mb-1 font-medium'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    // value={registerData.password}
                    // onChange={handleUserInput}
                    className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full'
                    placeholder='Pass@123'
                  />
                </div>
              </div>

              <div className='space-x-4 mt-8'>
                <button
                  className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50'
                  // onClick={handleSaveButton}
                >
                  Save
                </button>
                <button className='py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50'>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserRegistration
