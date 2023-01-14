import React, { Component } from 'react';
import NewsArticle from './NewsArticle';

export default class News extends Component {
  render() {
    return (
      <div>
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
      </div>
    )
  }
}
