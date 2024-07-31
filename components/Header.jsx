import Link from 'next/link'
import { Button } from './ui/button'

// Components
import Nav from './Nav'
import MobileNav from './MobileNav'

function Header() {
  return ( 
      <header className='py-8 xl:py-12 m-0 text-white '>
            <div className='container mx-auto flex justify-between items-center'>
                  {/* LOGO */}
                  <Link href='/'>
                  <h1 className='text-4xl font-semibold'>Jeremy<span className='text-accent'>.</span></h1>
                  </Link>
                  {/* desktopNav & hireMeButton */}
                  <div className='hidden xl:flex iems-center gap-8'>
                        <Nav />
                        <Link href='/contact'>
                              <Button>Hire me</Button>
                        </Link>
                  </div>

                  {/* mobileNav */}
                  <div className='xl:hidden'><MobileNav /></div>
                  
            
                      
            </div>
      </header>
      


)
  
 
  
}

export default Header