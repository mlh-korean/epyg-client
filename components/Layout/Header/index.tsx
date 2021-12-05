import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Link href="/">
            <a className={styles.logo}>
              EPYG
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
