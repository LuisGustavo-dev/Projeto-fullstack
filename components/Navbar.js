import styles from '../styles/Navbar.module.css'
import Link from 'next/Link'
import Image from 'next/Image'
import { 
  FiMenu,
  FiGrid,
  FiUser,
  FiType,
  FiClipboard,
  FiFile,
  FiLogOut,
  FiGithub,
} from 'react-icons/fi';
import { useEffect } from 'react';

export default function Navbar() {

  useEffect(() => {
    let btn = document.querySelector('#btn');
    let sidebar = document.querySelector('.sidebar');
  
    btn.onclick = function() {
      sidebar.classList.toggle('active');
    }
  }, []);

  return (
      <div className={styles.sidebar}>
        <div className={styles.logo_content}>
          <FiGithub className={styles.logo_icon} />
          <div className={styles.logo}>Projetinho</div>
          <FiMenu className={styles.btn} id='btn'/>
        </div>
        <ul className='nav_list'>
          <li>
            <Link href='/'>
              <a>
                <FiGrid className={styles.icon} />
                <span className='links_name'>Dashboard</span>
              </a>
            </Link>
            {/* <span className={styles.tooltip}>Dashboard</span> */}
          </li>
          <li>
            <Link href='/user'>
              <a>
                <FiUser className={styles.icon} />
                <span className='links_name'>User</span>
              </a>
            </Link>
            {/* <span className={styles.tooltip}>User</span> */}
          </li>
          <li>
            <Link href='/'>
              <a>
                <FiType className={styles.icon} />
                <span className='links_name'>Messages</span>
              </a>
            </Link>
            {/* <span className={styles.tooltip}>Messages</span> */}
          </li>
          <li>
            <Link href='/'>
              <a>
                <FiClipboard className={styles.icon} />
                <span className='links_name'>Analytics</span>
              </a>
            </Link>
            {/* <span className={styles.tooltip}>Analytics</span> */}
          </li>
          <li>
            <Link href='/'>
              <a>
                <FiFile className={styles.icon} />
                <span className='links_name'>File Manager</span>
              </a>
            </Link>
            {/* <span className={styles.tooltip}>Files</span> */}
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
            <FiLogOut className={styles.log_out}/>
          </div>
        </div>
      </div>
  )
  
}
