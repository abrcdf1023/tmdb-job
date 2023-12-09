import * as React from 'react'

import { Reviews } from '@/interfaces/entities'

import Card from '../Card'
import Typography from '../Typography'

import classNames from 'classnames/bind'
import styles from './MovieReviews.module.css'
const cx = classNames.bind(styles)

export interface MovieReviewsProps extends React.HTMLAttributes<HTMLDivElement> {
  reviews?: Reviews
}

const MovieReviews = (props: MovieReviewsProps) => {
  const { className, reviews, ...other } = props

  return (
    <div className={cx('root', className)} {...other}>
      {reviews?.results.map(el => (
        <Card key={el.id} className={cx('review-card')}>
          <Typography component="h3" fontSize={24} fontWeight={700}>A review by {el.author}</Typography>
          <div className={cx('review-card-body')}>
            <Typography>{el.content}</Typography>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default MovieReviews