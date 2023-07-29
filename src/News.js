import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  static defaultProps = {
    country: 'in',
    category: 'general',
    headlines: 'Headlines',
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    headlines: PropTypes.string,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("Articles are called")
    this.state = {
      articles: [],
      loding: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News India`;
  }

  async componentDidMount() {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=58ff79ddba354483821d6b1817d37f02`;
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })
    this.props.setProgress(100);
  }

  fetchMoreData = async() => {
      this.setState({page: this.state.page + 1});
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=58ff79ddba354483821d6b1817d37f02`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({ articles: this.state.articles.concat(parsedData.articles), 
                      totalArticles: parsedData.totalResults,
                      loading: false,})
  };


  render() {
    return (
      <>
        <h2 className='text-center' style={{ margin: '35px 0px' }}>Todays Top {this.props.headlines}</h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}>
        
        <div className='container my-3'>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} 
              name={element.source.name} />
            </div>

          })}

        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
