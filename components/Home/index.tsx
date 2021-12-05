import styles from './Home.module.scss'
import HomeInput from './HomeInput'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.introduction}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>
              <strong>EPYG</strong> will find<br/>
              the 0000 for<br/>
              Every Place You Go
            </h1>
            <p>
              this is the description part
            </p>
          </div>
          <div className={styles.input_container}>
            <HomeInput/>
          </div>
        </div>

        <div className={styles.service}>
          
        </div>
      </div>
    </div>
  )
}

export default Home
