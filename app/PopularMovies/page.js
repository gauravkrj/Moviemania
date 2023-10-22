
'use client'
import React, { useEffect, useState } from 'react';
const YOUR_API_KEY='216340a2f5cce94dbaba8611d5a1e728';
import Link from 'next/link';
import styles from '../../styles/PopularMovies.module.css'


const PopularMovies = () => {
  
  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${YOUR_API_KEY}`
        );
        const data = await response.json();
        
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };


    fetchMovies();
  }, []); 

  return (
    <div className={styles.body}>

      <h1 className={styles.heading}>Popular Movies</h1>

      <ul className={styles.list}>
       
        {movies.map((movie) => (
        <Link href={`/PopularMovies/${movie.id}`}>
          <li className={styles.card} key={movie.id}>
            <img className={styles.img} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
            <h2 className={styles.h2}>{movie.title}</h2>
            <div className={styles.extra}>
            <p className={styles.p}>Rating: {movie.vote_average}</p>
            <p className={styles.p}>Language: {movie.original_language}</p>
            </div>
           
          </li>
        </Link>
        ))}
      </ul>

    </div>
  );
};

export default PopularMovies;
