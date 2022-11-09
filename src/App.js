import React from 'react'
import { useState, useEffect } from 'react'
import './App.css';
import Loading from './Loading'
import img from './image1.jpeg'

const App = () => {


  const [articles, setArticles] = useState([])
  const [pagination, setPagination] = useState(1);

  useEffect((e) => {
    fetchArticles();
    //  document.body.onscroll = (e) => {
    //   console.log(document.body.scrollTop);
    // }

  }, [])

  const scroll = (e) => {

    console.log(e.target.scrollTop);
    if (e.target.scrollTop > (e.target.scrollHeight - 800 - 600)) {
      if (pagination > 3) {
        return
      }
      setTimeout(() => {

        fetchArticles();
      }, 1000)

    }

    // console.log(e.target.scrollTop, e.target.scrollHeight - 800);
  }



  const fetchArticles = async () => {


    const request = await fetch(`http://localhost:5000/app-api/v1/photo-gallery-feed-page/page/${pagination}`);

    const response = await request.json();

    setArticles([...articles, ...response.nodes]); //Updating articles.
    setPagination(pagination + 1);


  }


  return (

    <div className='header'>

      <h1>ARTICLES INFINITE SCROLL</h1>
      <div className='card-container' onScroll={scroll}>
        <div className="wrap" style={{ height: "max-content" }}>
          {articles.map((article, i) => {
            return (<div className='card-body' key={i}>
              <div className='card-media'>
                <img src={article.node.field_photo_image_section} />

              </div>
              <div className='card-content'>
                <p> {article.node.title}</p>
                <div>{article.node.path}</div>
                {/* <div>{new Date().toString()}</div> */}

              </div>

            </div>
            )
          })
          }
          {pagination <= 3 && <Loading />}

        </div>
      </div>

    </div>
  )
}

export default App