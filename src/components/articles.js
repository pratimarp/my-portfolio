import React, { useEffect, useState } from "react";
import axios from "axios";

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect (() => {
        axios
          .get("https://run.mocky.io/v3/e8200a57-45f6-4e5e-a517-ffab959ca153") 
          .then((response) => setArticles(response.data.articles))
          .catch((error) => console.error("Error fetching data", error));
      }, []);

      return(
        <section className="articles">
            <h2 className="section-title">Articles</h2>
            {articles.map((article) => (
                <div key={article.id} className="article">
                    <div className="article-info">
                        <p className="year">{article.year}</p>
                        <h3 className="article-title">{article.title}</h3>
                        <p className="brief">{article.brief}</p>
                    </div>
                </div>
            ))}
            <a href="#articles" target="_blank" className="view-all">View all articles &#8594;</a>
        </section>
      );
}

export default Articles;