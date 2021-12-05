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
              the 0000 for<br/>
              Every Place You Go
            </h1>
            <p>
              this is the description part
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
            0000 of<br/>
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
