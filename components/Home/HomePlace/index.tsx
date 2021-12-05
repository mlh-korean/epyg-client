import { useEffect, useMemo, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './HomePlace.module.scss'
import CircularProgress from '@mui/material/CircularProgress';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';
import { IMAGES } from './constants';

interface HomePlaceProps {
  value: unknown
}

const HomePlace = ({
  value,
}: HomePlaceProps) => {
  const [imageApiDone, setImageApiDone] = useState(false)
  const trendRef = useRef<HTMLDivElement>(null);
  const [trends, setTrends] = useState<any[]>([])
  const [images, setImages] = useState<string[]>([])
  const [place, setPlace] = useState<{
    lat: number
    lng: number
  } | null>(null) // null

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchPlace = async () => {
    try {
      const response = await axios.post('http://localhost:5000/location', {
        place: (value as any).structured_formatting.main_text
      })
      console.log('place api : ', response)
      if (response?.data) {
        setPlace(response?.data)
      }
    } catch(err) {
      console.log('error : ', err)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchImages = async () => {
    try {
      const response = await axios.post('http://localhost:5000/images', {
        place: (value as any).structured_formatting.main_text
      })
      console.log('images api : ', response)
      if (response?.data) {
        setImages(IMAGES)
      }
    } catch(err) {
      console.log('error : ', err)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchTrends = async () => {
    try {
      const response = await axios.post('http://localhost:5000/trends', {
        place: (value as any).structured_formatting.main_text
      })
      console.log('trend api : ', response)
      setImageApiDone(true)
      if (response?.data) {
        setTrends(response?.data)
      }
    } catch(err) {
      console.log('error : ', err)
    }
  }
  
  useEffect(() => {
    fetchPlace()
    fetchImages()
    fetchTrends()
  }, [value])

  const convertedTrends = useMemo(() => {
    const convertedData: {
      time: any
      count: any
    }[] = []
    trends?.forEach((trend: any) => {
      const destructured = Object.entries(trend)[0]
      convertedData.push({
        time: destructured[0],
        count: destructured[1]
      })
    })
    return convertedData
  }, [ trends ])

  return (
    <div>
      <div className={styles.visuals}>
        <div className={styles.map}>
          {place
            ?
            <GoogleMapReact
              defaultCenter={place}
              defaultZoom={11}
            />
            : 
            <CircularProgress/>
          }
        </div>
        <div 
          className={styles.trends}
          ref={trendRef}
        >
          {trends.length > 0
            ?
            <LineChart
              width={trendRef?.current?.clientWidth ?? 400}
              height={trendRef?.current?.clientHeight ?? 300}
              data={convertedTrends}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="count" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
            </LineChart>
            :
            <CircularProgress/>
          }
        </div>
      </div>
      
      <div className={styles.images}>
        {imageApiDone
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
