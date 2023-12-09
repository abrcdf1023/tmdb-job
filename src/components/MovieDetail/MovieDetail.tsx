import * as React from 'react'

import getImageUrl from '@/utils/getImageUrl'

import Container from '@/components/Container'
import Typography from '@/components/Typography'
import Grid from '@/components/Grid'
import PosterImage from '@/components/PosterImage'
import { Crew, Movie } from '@/interfaces/entities'

import className from 'classnames/bind'
import styles from './MovieDetail.module.css'
const cx = className.bind(styles)

const getHourMinutes = (minutes: number) => {
  const date = new Date(0, 0, 0, 0, minutes)
  return `${date.getHours()}h ${date.getMinutes()}m`
}
export interface MovieDetailProps {
  movie?: Movie
  directors?: Crew[]
  writers?: Crew[]
}

const MovieDetail = (props: MovieDetailProps) => {
  const { movie, directors, writers } = props
  
  return (
    <div className={cx('root')} style={{ backgroundImage: `url(${getImageUrl(movie?.backdrop_path || "", 1920, 800)})` }}>
      <Container className={cx('container')}>
        <PosterImage src={movie?.poster_path} alt={movie?.title || ""} width={300} height={450} />
        <div className={cx('main')}>
          <Typography component="h1" fontSize={32} fontWeight={700}>{movie?.title}</Typography>
          <Typography fontSize={12}>{movie?.release_date} {movie?.genres?.map(el => el.name).join(', ')} {getHourMinutes(movie?.runtime || 0)}</Typography>
          <div className={cx('overview')}>
            <Typography color='text-secondary' style={{ fontStyle: 'italic' }}>{movie?.tagline}</Typography>
            <Typography fontSize={24} style={{ marginTop: 10, marginBottom: 8 }}>Overview</Typography>
            <Typography fontSize={16} >{movie?.overview}</Typography>
          </div>
          <Grid container className={cx('authors')}>
            {
              directors?.map((director) => (
                <Grid className={cx('author')} key={director.id}>
                  <Typography fontSize={16} fontWeight={700}>{director?.name}</Typography>
                  <Typography fontSize={12}>Director</Typography>
                </Grid>
              ))
            }
            {
              writers?.map((writer) => (
                <Grid className={cx('author')} key={writer.id}>
                  <Typography fontSize={16} fontWeight={700}>{writer?.name}</Typography>
                  <Typography fontSize={12}>Writer</Typography>
                </Grid>
              ))
            }
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default MovieDetail