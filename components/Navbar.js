import styles from '../styles/Navbar.module.css'
import Link from 'next/Link'
import Image from 'next/Image'
import { 
  FiHome,
  FiCode,
  FiServer,
  FiMessageSquare,
  FiUser,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';

export default function Navbar() {

  return (
      <div className={styles.sidebar}>
        <div className={styles.logo_content}>
          <div className={styles.logo}>Projetinho</div>
        </div>
        <ul className='nav_list'>
          <li>
            <Link href='/'>
              <a>
                <FiHome className={styles.icon} />
                <span className='links_name'>Home</span>
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href='/list'>
              <a>
                <FiCode className={styles.icon} />
                <span className='links_name'>Crud 1</span>
              </a>
            </Link>
          </li> */}
          <li>
            <Link href='/crud'>
              <a>
                <FiCode className={styles.icon} />
                <span className='links_name'>Crud</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/control'>
              <a>
                <FiServer className={styles.icon} />
                <span className='links_name'>Control</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/messages'>
              <a>
                <FiMessageSquare className={styles.icon} />
                <span className='links_name'>Messages</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/team'>
              <a>
                <FiUser className={styles.icon} />
                <span className='links_name'>Team</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/settings'>
              <a>
                <FiSettings className={styles.icon} />
                <span className='links_name'>Settings</span>
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.profile_content}>
          <div className={styles.profile}>
            <div className={styles.profile_details}>
              <Image 
              src="/images/profile.jpg" 
              alt='profile' 
              width={45} 
              height={45}
              className={styles.img}/>
              <div className={styles.name_job}>
                <div className={styles.name}>Luis Gustavo</div>
                <div className={styles.job}>Desenvolvedor Web</div>
              </div>    
            </div>
            <Link href="/">
              <a>
                <FiLogOut className={styles.log_out}/>
              </a>
            </Link>
          </div>
        </div>
      </div>
  )
  
}
