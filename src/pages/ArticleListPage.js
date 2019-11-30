import React, { Component } from 'react'
import articleContent from './article-content'
import ArticleList from '../components/ArticleList'


export class ArticleListPage extends Component {
    render() {
        return (
            <>
            <h2>Articles</h2>
            <ArticleList articles={articleContent}/>
            </>
        )
    }
}

export default ArticleListPage
