import { useState } from 'react'
import SubscriptionCard from './components/SubscriptionCard'
import AddSubscription from './components/AddSubscription'
import Form from './components/Form'

function App() {

  const [form, setForm] = useState(false);

  return(
    <>
    <div className='bg-gray-950 h-dvh gap-5 flex flex-col'>
      <div className='flex justify-center items-center'>
        <h1 className='text-white mt-5 text-2xl font-inter'>Your subscriptions:</h1>
      </div>
      <div className='flex justify-center'>
        <AddSubscription form={form} setForm={setForm}/>
      </div>
      <div>
        <Form form={form}/>
      </div>
      <div className='flex justify-center'>
        <SubscriptionCard/>
      </div>
    </div>
    </>
  )

}

export default App
