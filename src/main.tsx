import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import toast, { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='@container overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 min-h-screen flex flex-col justify-between'>

      <Toaster position="top-right" reverseOrder={false} />
      <App />

    </div>

  </StrictMode>,
)
toast.success('successfully loaded app');
// toast.error('Failed to borrow book');
toast('welcome to the library app!');