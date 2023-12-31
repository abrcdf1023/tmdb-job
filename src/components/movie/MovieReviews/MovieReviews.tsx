import * as React from "react";

import { Reviews } from "@/interfaces/entities";

import Card from "../../common/Card";
import Typography from "../../common/Typography";

import classNames from "classnames/bind";
import styles from "./MovieReviews.module.css";
const cx = classNames.bind(styles);

export interface MovieReviewsProps extends React.ComponentPropsWithoutRef<"div"> {
  reviews?: Reviews;
}

export const MovieReviews = (props: MovieReviewsProps) => {
  const { className, reviews, ...other } = props;

  return (
    <div className={cx("root", className)} {...other}>
      {reviews?.results.map((el) => (
        <Card key={el.id} className={cx("card")}>
          <Typography component="h3" fontSize={24} fontWeight={700}>
            A review by {el.author}
          </Typography>
          <div className={cx("card-body")}>
            <Typography>{el.content}</Typography>
          </div>
        </Card>
      ))}
      {reviews?.results.length === 0 && (
        <Typography component="h3" fontSize={24} fontWeight={700}>
          No Reviews Found
        </Typography>
      )}
    </div>
  );
};
