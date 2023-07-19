import React from "react";
import style from "../css/news.css";
import {PropTypes} from 'prop-types';
function NewsCard(props){
    const {url,name,description,imageUrl,time} = props;
return (
    <div className="cardDiv" style={style}>
        <div className="card" style={style}>
            <img className="card-img-top"src={imageUrl} alt="Img"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Published : {new Date(time).toDateString()}</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
            </div>
            </div>
    </div>
)
}
NewsCard.propTypes ={
    news: PropTypes.array,
}
export default NewsCard;