import styles from './Home.module.scss'
import HomeInput from './HomeInput'
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import HomePlace from './HomePlace';

const Home = () => {
  const [value, setValue] = useState<unknown | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.introduction}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>
              <strong>EPYG</strong> will find<br/>
              the congestion<br/>
              for winter vacation
            </h1>
            <p className={styles.description}>
              This is perfect time to go winter vacation with your beloved people.<br/>
              We will help you to find quiet place that you do not need to worry about COVID-19. EPYG is for Every Place You Go!
            </p>
          </div>
          <div className={styles.input_container}>
            <HomeInput
              value={value}
              setValue={setValue}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
        </div>

        <div className={styles.image}/>
      </div>

      {value &&
        <div className={styles.result}>
          <h2>
            congestion level of<br/>
            {(value as any).structured_formatting.main_text}
          </h2>

          {value
            ?
            <div className={styles.response_container}>
              <HomePlace
                value={value}
              />
            </div>
            : 
            <div className={styles.loading_container}>
              <CircularProgress/>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Home
