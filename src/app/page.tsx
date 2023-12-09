import * as React from "react";

import fetchPopularList from "@/apis/fetchPopularList";

import Layout from "@/components/Layout";
import MovieSimpleCard from "@/components/MovieSimpleCard";
import Grid from "@/components/Grid";

export default async function Home() {
  const data = await fetchPopularList();

  return (
    <Layout>
      <Grid container>
        {data.results.map((el) => (
          <Grid key={el.id}>
            <MovieSimpleCard
              href={`/movie/${el.id}`}
              title={el.title}
              posterPath={el.poster_path}
              releaseDate={el.release_date}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
