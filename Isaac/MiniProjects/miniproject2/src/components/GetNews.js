import React,  { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import NewsCard from '../components/NewsCard'
import Grid from '@mui/material/Grid';

function GetNews() {
    const [news, setNews] = useState([])
        useEffect(() => {
            axios.get('https://fortnite-api.com/v2/news')
              .then(response => {
              let newNews = response.data.data.br.motds;
              setNews(newNews)
              console.log(newNews)
              })}, []
    )
  return (
      <div>
            <Grid wrap='wrap' container spacing={60} padding={5}>
                        {news.map((news) => 
                        <Grid item xs={6} md={3} lg={2} key={news.id} >
                              <NewsCard title={news.title} body={news.body} image={news.image}/>
                        </Grid>)}
            </Grid>
      </div>
)
}
    
export default GetNews