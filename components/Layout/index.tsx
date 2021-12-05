import { ReactNode } from "react"
import Header from "./Header"
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({
  children
}: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}

export default Layout
