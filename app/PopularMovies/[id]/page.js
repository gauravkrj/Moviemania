
'use client'
import { useState, useEffect } from "react";
import styles from '../../../styles/[id].module.css'
const YOUR_API_KEY = '216340a2f5cce94dbaba8611d5a1e728';

export default function PopularMovies({ params }){

  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${YOUR_API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setInfo(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

   
    fetchDetails();
  }, [params.id]); 
  return (
    <div className={styles.body}>


     <h1 className={styles.heading}>Movie Details</h1>

     <div className={styles.list}>
       <h2 className={styles.h2}>{info.title}</h2>
       <img className={styles.img} src={`https://image.tmdb.org/t/p/w200${info.poster_path}`} alt={`${info.title} Poster`} />
       <h3 className={styles.tagline}>"{info.tagline}"</h3>
       <p className={styles.overview}><div className={styles.field}>Overview</div><div className={styles.value}>{info.overview}</div></p>

       
       <p className={styles.p}><div className={styles.field}>Rating </div><div className={styles.value}>{info.vote_average}/10</div></p>
       <p className={styles.p}><div className={styles.field}>Original Language</div><div className={styles.value}>{info.original_language}</div></p>
       <p className={styles.p}><div className={styles.field}>Duration</div><div className={styles.value}>{info.runtime} Minutes</div></p>
       <p className={styles.p}><div className={styles.field}>Status</div><div className={styles.value}>{info.status}</div></p>
       <p className={styles.p}><div className={styles.field}>Release Date</div><div className={styles.value}>{info.release_date}</div></p>
       <p className={styles.p}><div className={styles.field}>Total Collection</div><div className={styles.value}>Rs.{info.revenue}</div></p>
      
    </div>


    </div>
  );
};
