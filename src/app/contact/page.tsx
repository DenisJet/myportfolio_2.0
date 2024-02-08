// 'use client';
// import { FormEvent, useState } from 'react';

export default function Contact(): JSX.Element {
  // const [isSubmitted, setSubmitted] = useState<boolean>(false);
  // const [name, setName] = useState<string>('');
  // const [email, setEmail] = useState<string>('');
  // const [message, setMessage] = useState<string>('');

  // const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   try {
  //     const res = await fetch('/api', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         message,
  //       }),
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     });
  //     if (res.status === 200) {
  //       setSubmitted(true);
  //     } else {
  //       console.error('Err');
  //     }
  //   } catch (err: any) {
  //     console.error('Err', err);
  //   }
  // };

  return isSubmitted ? (
    <div className='container p-4 mx-auto max-w-4xl'>
      <h1 className='gradient text-6xl font-bold mt-6 mb-10'>Thank you for your message!</h1>
    </div>
  ) : (
    <main>
      <div className='container p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl font-bold mt-6 mb-10'>Contact Me</h1>
        <form onSubmit={onSubmit} className='rounded border border-accent-2 bg-accent-1 p-4'>
          <div className='mb-2'>
            <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id='name'
              name='name'
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              name='email'
              type='text'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='message' className='block text-gray-700 text-sm font-bold mb-2'>
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id='message'
              name='message'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                focus:outline-none focus:shadow-outline'
              rows={4}
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-indigo-500 p-2 text-white rounded shadow-sm hover:shadow-lg hover:bg-opacity-90 
              disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none'
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
