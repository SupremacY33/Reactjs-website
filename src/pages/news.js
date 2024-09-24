import React from 'react';
import newsData from './newsData';
import '../styles/newsPage.css';

const NewsPage = () => {
    return (
        <div className="news-container">
            {newsData.map(article => (
                <div key={article.id} className="news-article">
                    <img src={article.image} alt={article.title} className="news-image" />
                    <h2 className="news-title">{article.title}</h2>
                    <p className="news-date">{article.date}</p>
                    <p className="news-description">{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsPage;