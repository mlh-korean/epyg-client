import { useEffect, useMemo, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './HomePlace.module.scss'
import CircularProgress from '@mui/material/CircularProgress';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';

interface HomePlaceProps {
  value: unknown
}

const HomePlace = ({
  value,
}: HomePlaceProps) => {
  const trendRef = useRef<HTMLDivElement>(null);
  const [trends, setTrends] = useState<any[]>([])
  const [images, setImages] = useState<string[]>([])
  const [place, setPlace] = useState<{
    lat: number
    lng: number
  } | null>(null) // null


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchPlace = async () => {
    const response = await axios.post('http://localhost:2000/location', {
      place: (value as any).structured_formatting.main_text
    })
    console.log('response : ', response)
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
    setTrends([{
      '2022-02-01': 20,
    }, {
      '2022-02-02': 30
    }, {
      '2022-02-03': 40
    }, {
      '2022-02-04': 35
    }, {
      '2022-02-05': 30
    }, {
      '2022-02-06': 40
    }, {
      '2022-02-07': 60
    }, {
      '2022-02-08': 20
    }, {
      '2022-02-09': 10
    }, {
      '2022-02-10': 40
    }, {
      '2022-02-11': 30
    }, {
      '2022-02-12': 35
    }])
  }
  
  useEffect(() => {
    setTimeout(() => {
      fetchPlace()
      fetchImages()
      fetchTrends()
      console.log('done!')
    }, 1000)
  }, [value])

  const convertedTrends = useMemo(() => {
    const convertedData: {
      time: any
      count: any
    }[] = []
    trends.forEach((trend: any) => {
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
