import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const DefaultLayout = () => {
  return ( 
    <div className='default-layout'>
      <Navbar/>
      <div className="default-layout-content">
        <Outlet/>
      </div>
    </div>
  )
}
 
export default DefaultLayout