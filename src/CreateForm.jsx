import React, { useRef } from 'react'

const CreateForm = () => {
    const nameInput = useRef("");
    const priceInput = useRef(0);
    const stockInput = useRef(0);

    const submitBtnHandler = (e) => {
        e.preventDefault();
        console.log(nameInput.current.value);
        console.log(priceInput.current.value);
        console.log(stockInput.current.value);
    }
  return (
    <form onSubmit={submitBtnHandler}>
      <input type="text" ref={nameInput} className='border border-gray-500 rounded-md ps-3 p-1' placeholder='Enter fruit' required/>
      <input type="number" ref={priceInput} className='border border-gray-500 rounded-md ps-3 p-1' placeholder='Price' required/>
      <input type="number" ref={stockInput} className='border border-gray-500 rounded-md ps-3 p-1' placeholder='Stock' required/>
      <button className=' bg-blue-600 px-6 py-2 rounded-md text-gray-50'>Add</button>
    </form>
  )
}

export default CreateForm
