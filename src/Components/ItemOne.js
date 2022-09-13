import React from 'react'
import {SuccessToast, ErrorToast} from'../helperClass/toaster'
import{ Toaster } from 'react-hot-toast';

function ItemOne() {
  return (
    <div>
     <button className='bg-purple-700 px-4 py-3 text-white rounded-md' onClick={()=>SuccessToast("Suuccess Toast")}>Click for check Success toaster</button>
     <button className='bg-red-600 px-4 py-3 ml-4 text-white rounded-md' onClick={()=>ErrorToast("Error Toast")}>Click for check Error toaster</button>
    <Toaster />
    </div>
  )
}

export default ItemOne