import { useContext } from 'react'
import { AppContext } from '../App';

const Header = () => {
  const {tab} = useContext(AppContext);
  return (
    <div className='bg-slate-600 p-4'>
        <h1 className='text-4xl text-blue-100'>React 25 : {tab}</h1>
    </div>
  )
}

export default Header