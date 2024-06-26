import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// // import * as React from 'react';
// import Button from '@mui/material/Button'
// import Dialog from '@mui/material/Dialog'
// import DialogActions from '@mui/material/DialogActions'
// import DialogContent from '@mui/material/DialogContent'
// import DialogContentText from '@mui/material/DialogContentText'
// import DialogTitle from '@mui/material/DialogTitle'
// import Paper from '@mui/material/Paper'
// import Draggable from 'react-draggable'
function Batches () {
  // const [show, setShow] = useState(false)
  // const [open, setOpen] = React.useState(false)
  // function PaperComponent (props) {
  //   return (
  //     <Draggable
  //       handle='#draggable-dialog-title'
  //       cancel={'[class*="MuiDialogContent-root"]'}
  //     >
  //       <Paper {...props} />
  //     </Draggable>
  //   )
  // }

  // const handleClickOpen = () => {
  //   setOpen(true)
  // }

  // const handleClose = () => {
  //   setOpen(false)
  // }

  return (
    <div className=' mt-24 m-10 '>
      {/* <h1 class='mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white '>
        जिल्हा क्रीडा अधिकारी यवतमाळ अंतर्गत
      </h1> */}

      <h1 class='mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        जिल्हा क्रीडा संकुल " जलतरण -तलाव" आझाद मैदान,यवतमाळ
      </h1>
      <div className=' relative'>
        <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' class='px-6 py-3'>
                  अ. क्र.
                </th>
                {/* <th scope='col' class='px-6 py-3'>
                  Qty
                </th> */}
                <th scope='col' class='px-6 py-3'>
                  वयोगट
                </th>
                <th scope='col' class='px-6 py-3'>
                  मासिक फी
                </th>

                <th scope='col' class='px-6 py-3'>
                  ऑफर/सूट
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  1
                </td>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  १८ वर्षांखालील जनरल
                </td>
                <td class='px-10 py-4 font-semibold text-gray-900 dark:text-white'>
                  १००० रु
                </td>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  -------
                </td>
              </tr>
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  2
                </td>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  १८ वर्षांखालील कोचिंग
                </td>
                <td class='px-10 py-5 font-semibold text-gray-900 dark:text-white'>
                  १५०० रु
                </td>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  ------
                </td>
              </tr>
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  3
                </td>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  १८ वर्षांखालील जनरल
                </td>
                <td class='px-10 py-5 font-semibold text-gray-900 dark:text-white'>
                  ५०० रु
                </td>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  ------
                </td>
              </tr>

              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'></td>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  १८ वर्षांखालील कोचिंग
                </td>
                <td class='px-10 py-5 font-semibold text-gray-900 dark:text-white'>
                  ७५० रु
                </td>
              </tr>
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  4
                </td>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  १८ वर्षांवरील जनरल
                </td>
                <td class='px-10 py-5 font-semibold text-gray-900 dark:text-white'>
                  १२०० रु
                </td>

                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  ------
                </td>
              </tr>
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  5
                </td>
                <td class='px-6 py-4 font-semibold text-gray-900 dark:text-white'>
                  १८ वर्षांवरील कोचिंग
                </td>
                <td class='px-10 py-5 font-semibold text-gray-900 dark:text-white'>
                  १७०० रु
                </td>

                <td class='px-6 py-4 font-semibold  text-gray-900 dark:text-white'>
                  ------
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='m-5  absolute right-2 b-5'>
          {/* <Link to='/process'> */}
          <a
            href='#'
            className='inline-flex items-center px-7 py-3 text-xl mr-7 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            // onClick={handleClickOpen}
          >
            get batches
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>
          {/* </Link> */}
        </div>
      </div>
      {/* {
        <React.Fragment>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby='draggable-dialog-title'
          >
            <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
              Subscribe
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <p className=' text-black text-xl'>
                  कृपया दिलेल्या योजेनेचा लाभ घेण्या साठी आणि सभासद होण्या करिता
                  काही शिल्क स्वीकारण्यात येत आहेस
                </p>
              </DialogContentText>
            </DialogContent>
            <div className=' px-2 py-4 flex items-center justify-evenly'>
              <div>
                <p className=' text-black font-semibold py-2'>
                  सभासद होण्या करी
                </p>
                <Link to='/user-registration'>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleClose}
                  >
                    proceed
                  </Button>
                </Link>
              </div>
              <Button autoFocus onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </Dialog>
        </React.Fragment>
      } */}
    </div>
  )
}

export default Batches
