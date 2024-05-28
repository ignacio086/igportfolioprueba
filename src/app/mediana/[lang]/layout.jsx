
import { Inter} from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "Portfolio Estándar",
};
export default function Layout({ children}) {
  return (

      <div className='overflow-x-hidden w-screen bg-sky-500' style={inter.style}>
        <Navbar />
        {children}
      </div>

  )
}
