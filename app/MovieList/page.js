

import React from 'react'
import Link from 'next/link';
import styles from '../../styles/MovieList.module.css'
const MovieList = ({movies}) => {
  return (
    <div className={styles.body}>

      <ul className={styles.list}>
        {movies.map((movie) => (
          <Link href={`/MovieList/${movie.id}`}>
          <li className={styles.card} key={movie.id}>
                <img className={styles.img} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                <h2 className={styles.h2}>{movie.title}</h2>
                <p className={styles.p}>Release Date: {movie.release_date}</p>
                <p className={styles.p}>Language: {movie.original_language}</p>
            
          </li>
          </Link>
        ))}
      </ul>



      
    </div>
  )
}

export default MovieList;