/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';


    export default () => {
   
   const [moviteList, setMovieList] = useState([]);
   const [featuredData, setFeaturedData] = useState(null);
   const [blackHeader, setBlackHeader] = useState(false);
   
   
    useEffect(() => {
       const loadAll = async () => {
        let list = await Tmdb.getHomeList();
        setMovieList(list)
       
        let originals = list.filter(i=>i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
        let chosen = originals[0].items.results[randomChosen]
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
        setFeaturedData(chosenInfo);
        
    }
   loadAll();

  },  []);

  useEffect(()=>{
      const scrollListener = () => {
          if(window.scrollY > 10) {
              setBlackHeader(true)
          } else {
              setBlackHeader(false);
          }
        }
          window.addEventListener('scroll', scrollListener);
          return () => {
              window.removeEventListener('scroll', scrollListener)
          }
      
  }, []);

    return (
        <div className="page">

            <Header black={blackHeader} />

            {featuredData &&
            <FeaturedMovie item={featuredData} />
}
           <section className="lists">
                    {moviteList.map((item, key)=>(
                <div>
                <MovieRow key={key} title={item.title} items={item.items}/>
                </div>
                    ))}
           </section>
           {moviteList.length <=0 &&
           <div className='loading'>
               <img src='https://66.media.tumblr.com/5bf8ba688ff3553b900a40dad2bbc1e0/tumblr_inline_p7qvpcxHIr1seki23_500.gif' alt='Carregando!'/>
           </div>
    }
        </div>
    );
}

