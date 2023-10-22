// app/page.js
'use client'

// pages/index.js
import { useState } from 'react';
import MovieList from './MovieList/page';
import PopularMovies from './PopularMovies/page';
import styles from '../styles/Home.module.css';

const YOUR_API_KEY='216340a2f5cce94dbaba8611d5a1e728';


const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${YOUR_API_KEY}&query=${query}`
      );

      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
   
<div>
    
      <h1 className={styles.heading}>Moviemania</h1>
    
      <div className={styles.body}>

      <div className={styles.tagline}>
       <h2 className={styles.h2}>Discover Your Next Cinematic Adventure</h2>
       <h3 className={styles.h3}>Explore, Search, and Find Movies with Ease!</h3>
      </div>

      <div className={styles.search}><input className={styles.input} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie"/>
      <button className={styles.button} onClick={handleSearch}>Search</button>
      </div>

      <MovieList movies={movies}/>

      <PopularMovies/>
      
    </div>
</div>
  );
};

export default Home;
