import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// export default class News extends Component {
  const News = ({ category, country, apiKey, pageSize, setProgress, mode }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


  // static defaultProps = {
  //   country: "in",
  //   pageSize: 9,
  //   category: "general",
  // };

  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     totalResults:0
  //   };
  //   document.title=`${this.props.category}-NewsMonkey`;
  // }
  useEffect(() => {
    document.title = `${category}-NewsPaws`;
    updateNews();
     // eslint-disable-next-line
  }, [category]);

  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pagesize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  
  // async componentDidMount() {

  //   this.updateNews();
  // };
  const fetchMoreData = async() => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pagesize=${pageSize}`;
    setPage(page + 1);
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults
    // });
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  // handlePrevClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

 const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    // const { navigation } = this.props;

    return (
      <>
        <h2
        className="text-center"
          style={{
            color: mode === "light" ? "black" : "white",
            paddingTop: "100px",
          }}
        >
          NewsPaws-Top {capitalizeFirstLetter(category)} Headlines
        </h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<Spinner/>}>



      <div className="container">
        <div className="row">
          {/* {!this.state.loading && */}
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88) + "..."
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    page={page}
                    mode={mode}
                    source={element.source.name}
                  />
                </div>
                
              );
            })}
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className={`btn btn-${
              this.props.mode === "light" ? "primary" : "dark"
            }`}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className={`btn btn-${
              this.props.mode === "light" ? "primary" : "dark"
            }`}
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button> 
        </div> */}
      </>
    );
  }

  News.defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
export default News;