import React from 'react'
import { useState } from 'react'

function CardForm({addCards}) {
  const [formState, setFormState] = useState({
      title: "",
      img: "",
      description: "",
      isRead: false,
  })
  const handleImputChange = (e) => {
      const {name, value, checked, type} = e.target;
      const inputValue = type === "checkbox" ? checked : value;
      setFormState({
        ...formState, 
        [name]: inputValue,
    });   
  };

  const handleSubmit = (e) => {
    e.preventDefault()
      const card = {
        id: Math.random(),
        title: formState.title,
        img: formState.img,
        description: formState.description,
        isRead: formState.isRead,
    };
      addCards(card);
  }
  return (
    <form className='bg-zinc-50 shadow-lg flex flex-col gap-3 max-w-96 p-10 rounded-lg my-10 mx-auto' 
    onSubmit={handleSubmit}>
        <div className='flex flex-col'>
            <label>記事の名前</label>
            <input type='text' name='title' className='bg-zinc-200' 
            value={formState.title} onChange={handleImputChange}>
            </input>
        </div>
        <div className='flex flex-col'>
            <label>記述</label>
            <textarea name='description'className='bg-zinc-200'
            value={formState.description} onChange={handleImputChange}>
            </textarea>
        </div>
        <div className='flex flex-col'>
            <label>イメージ</label>
            <input type='text' name='img' className='bg-zinc-200' 
            value={formState.img} onChange={handleImputChange}/>
        </div>
        <div className='flex flex-col'>
            <label>記事を読んだことがありますか</label>
            <input type='checkbox' name='isRead' className='p-3'
            checked={formState.isRead} onChange={handleImputChange} />
        </div>
        <button type='submit' 
        className='p-3 bg-red-500 hover:bg-red-700 text-white text-md rounded-full'>新しい記事を書いてください</button>
    </form>
  )
}

export default CardForm