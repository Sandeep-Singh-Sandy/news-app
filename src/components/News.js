import React, { useEffect, useState } from "react";
import style from "../css/news.css";
import NewsCard from "./NewsCard";
import axios from 'axios';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
function News(props) {
    const [newsText, setNewsText] = useState([]);
    const [totalResults,setTotalResults] = useState(0);
    const [page,setPage]=useState(1);
    const options = {
        method: 'GET',
        url: `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=12`,
    };
    function fetchNews(){
        axios.request(options).then(response => {
            if (response.status === 200) {
                setNewsText(response.data.articles);
                setTotalResults(response.data.totalResults);
            }
        });
    }
    useEffect(() => {
        fetchNews();
    }, []);
    
    const fetchMoreData =  ()=>{
        const options = {
            method: 'GET',
            url: `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page+1}&pageSize=12`,
        };
         setPage(page+1);
        axios.request(options).then(response => {
            if (response.status === 200) {
                setTotalResults(response.data.totalResults)
                setNewsText(newsText.concat(response.data.articles))
            }
        });
            
    }
    return (
        <>
            <div className="newsAreaTitle">
                <strong className="heading">Todays News - {props.category.charAt(0).toUpperCase() + props.category.slice(1)}</strong>
            </div>
                <InfiniteScroll
                    dataLength={newsText.length}
                    next={fetchMoreData}
                    hasMore={newsText.length!==totalResults}
                    loader={newsText.length>totalResults?"":<Spinner />}
                >
            <div className="newsContainer" style={style}>
                    {newsText.map((item) => {
                        return <NewsCard url={item.url} name={item.title} description={item.description} imageUrl={item.urlToImage ? item.urlToImage : "https://thumbs.dreamstime.com/b/headline-news-11638557.jpg"} time={item.publishedAt} />
                    })}
            </div>
                </InfiniteScroll>
        </>
    )
}
News.propTypes = {
    category: PropTypes.string,
}
News.defaultProps = {
    category: "general",
}
export default News;