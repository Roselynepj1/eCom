import { useState } from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    subject: '',
    email: '', 
    body: '',
  })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    let tempErrors = {}
    if (!formData.fullname) tempErrors.fullname = 'Fullname is required'
    if (!formData.subject) tempErrors.subject = 'Subject is required'
    if (!formData.email) tempErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = 'Email is invalid' 

    if (formData.fullname.length < 3) tempErrors.fullname = 'Fullname must be at least 3 characters'
    if (formData.subject.length < 3) tempErrors.subject = 'Subject must be at least 3 characters'
    if (formData.body.length < 3) tempErrors.body = 'Message must be at least 3 characters'
    if (!formData.body) tempErrors.body = 'Message is required'

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData)
      setShowSuccess(true)
      setFormData({
        fullname: '',
        subject: '',
        email: '', 
        body: '',
      })
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  return (
    <Layout>
      <div className='container mx-auto px-4 py-8 sm:px-8 lg:px-8'>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full md:w-1/2 px-4 mb-8'>
            <h2 className='text-2xl font-bold mb-4'>
              Contact us for any questions
            </h2>
            <form onSubmit={handleSubmit}>
              <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='fullname'
                  >
                    Fullname*
                  </label>
                  <input
                    className='shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='fullname'
                    type='text'
                    min={3}
                    name='fullname'
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                  {errors.fullname && (
                    <p className='text-red-500 text-xs italic'>
                      {errors.fullname}
                    </p>
                  )}
                </div>
                <div className='mb-4'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='email'
                  >
                    Email*
                  </label>
                  <input
                    className='shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='email'
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-xs italic'>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='subject'
                >
                  Subject*
                </label>
                <input
                  className='shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='subject'
                  type='text'
                  min={3}
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && (
                  <p className='text-red-500 text-xs italic'>
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Repeat similar input fields for subject, email, phone, and body */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='body'
                >
                  How can we help?
                </label>
                <textarea
                  className='shadow appearance-none border border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='body'
                  name='body'
                  rows='4'
                  min={3}
                  value={formData.body}
                  onChange={handleChange}
                ></textarea>
                {errors.body && (
                  <p className='text-red-500 text-xs italic'>{errors.body}</p>
                )}
              </div>
              <button
                className='hover:bg-black hover:text-white bg-white text-black border border-black px-4 py-2'
                type='submit'
              >
                Send Message
              </button>
            </form>
            {showSuccess && (
              <div className='mt-4 p-4 bg-green-100 text-green-700 border-black'>
                Message sent successfully!
              </div>
            )}
          </div>
          <div className='w-full md:w-1/2 px-4'>
            <h2 className='text-2xl font-bold mb-4'>Contact info</h2>
            <p className='mb-4'>
              <strong>Call to Us:</strong>
              <br />
              We&apos;re available from 10 am - 10 pm EST, 7 days a week.
            </p>
            <p className='mb-4'>
              <strong>Customer Service</strong>
              <br />
              (000) XXX-XXXX (XXX) XXX-XXX
            </p>
            <p className='mb-4'>
              <strong>Technical Service</strong>
              <br />
              (XXX)XXX-XXXX
            </p>
            <p className='mb-4'>
              <strong>Email to Us</strong>
              <br />
              contact@cheapreme.com
            </p>
            <p className='mb-4'>
              <strong>Find Us</strong>
              <br />
              121 Cheapreme Street, Cheapreme
              <br />
              Victoria 3000 Australia
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
