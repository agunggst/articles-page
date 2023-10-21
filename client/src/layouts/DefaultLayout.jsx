import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return ( 
    <div className='default-layout'>
      default layout
      <Outlet/>
    </div>
  )
}
 
export default DefaultLayout