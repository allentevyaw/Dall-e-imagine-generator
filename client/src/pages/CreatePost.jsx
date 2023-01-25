import React, {useState} from 'react'
import {Loader, FormField} from '../components'
import {useNavigate} from 'react-router-dom'
import {getRandomPrompt} from '../utils'
import { preview } from '../assets'


const CreatePost = () => {

  const navigate = useNavigate()
  const [form, setform] = useState({
    name: '',
    prompt: '',
    photo: '',
  })

  const [generatingImg, setgeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = () => {

  }

  return (
    <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
            <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
                Create imaginative and 
                visually stunning images through DALL-E AI and share with community
            </p>
        </div>

        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
          <div flex flex-col gap-5>
            <FormField
              LabelName='Your name' 
              type='text'
              name='name'
              placeholder='John Doe'
              value={form.name}
              handleChange={handleChange}
            />

            <FormField
              LabelName='prompt' 
              type='text'
              name='prompt'
              placeholder='an oil pastel drawing of an annoyed cat in a spaceship'
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSupriseMe={handleSurpriseMe}
            />

            <div className='relative bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500 
             focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
                {form.photo ? (
                  <img
                    src={form.photo}
                    alt={form.prompt}
                    className='w-full h-full object-contain'
                  />
                ) : (
                  <img
                  src={preview}
                  alt='preview'
                  className='w-full h-full object-contain'
                  />
                )}
            </div>

          </div>
        </form>
    </section>
  )
}

export default CreatePost