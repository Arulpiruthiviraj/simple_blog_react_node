import React from 'react'
import articleContent from './article-content'
import ArticleList from '../components/ArticleList';
import NotFoundPage from './NotFoundPage';

 const ArticlePage = ({match}) => {
    const name=match.params.name;
    const article=articleContent.find(article=>article.name===name);
    const otherArticles=articleContent.filter(article=>article.name!==name);
    if(!article) return <NotFoundPage/>
    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph,key)=>(
                <p key={key}>{paragraph}</p>
            ))}
            <h4>Other Articles</h4>
            <ArticleList articles={otherArticles}/>
        </>
    )
}
export default ArticlePage
