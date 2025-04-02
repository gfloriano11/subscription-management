import { Outlet } from 'react-router-dom'

function App() {

  return(
    <>
    <div className='bg-slate-950 h-dvh gap-5 flex flex-col'>
      <Outlet/>
    </div>
    </>
  )

}

export default App
