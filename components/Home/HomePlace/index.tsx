import { useEffect, Dispatch, SetStateAction, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './HomePlace.module.scss'
import CircularProgress from '@mui/material/CircularProgress';

interface HomePlaceProps {
  value: unknown
}

const HomePlace = ({
  value,
}: HomePlaceProps) => {
  const [trends, setTrends] = useState<any[]>([])
  const [images, setImages] = useState<string[]>([])
  const [place, setPlace] = useState<{
    lat: number
    lng: number
  } | null>(null) // null

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchPlace = () => {
    setPlace({
      lat: 59.95,
      lng: 30.33
    })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchImages = () => {
    setImages(['1', '2', '3', '4', '5', '6'])
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchTrends = () => {
    setTrends([])
  }
  
  useEffect(() => {
    setTimeout(() => {
      fetchPlace()
      fetchImages()
      fetchTrends()
    }, 1000)
  }, [value, fetchImages, fetchPlace, fetchTrends])

  return (
    <div>
      <div className={styles.visuals}>
        <div className={styles.map}>
          {place
            ?
            <GoogleMapReact
              defaultCenter={{
                lat: 59.95,
                lng: 30.33
              }}
              defaultZoom={11}
            />
            : 
            <CircularProgress/>
          }
        </div>
        <div className={styles.trends}>
          {trends.length > 0
            ?
            <div>

            </div>
            :
            <CircularProgress/>
          }
        </div>
      </div>
      
      <div className={styles.images}>
        {images.length > 0
          ?
          <div className={styles.image_list}>
            {images.map((url) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                key={url}
                src={url}
                alt="place"
              />
            ))}
          </div>
          :
          <CircularProgress/>
        }
      </div>
    </div>
  )
}

export default HomePlace
