import React, { Component } from "react";
import NewsItem from "./NewsItem";

import styled from "styled-components";
import Spinner from "./Spinner";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=a6f30bf16cc241dda6f2810d1c019a02&page=1pageSize=20";
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a6f30bf16cc241dda6f2810d1c019a02&page=${
      this.state.page - 1
    }&pageSize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a6f30bf16cc241dda6f2810d1c019a02&page=${
        this.state.page + 1
      }&pageSize=20`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    let { background, color } = this.props;
    return (
      <>
        <h1
          className="text-center"
          style={{ color: color, background: background }}
        >
          NewsMonkey -Top HeadLines
        </h1>
        {this.state.loading && <Spinner background={background} />}
        <div style={{ background: background, height: "100%" }}>
          <div className="container py-3" style={{ background: background }}>
            <>
              <Flex style={{ height: "100%" }}>
                {!this.state.loading &&
                  this.state.articles.map((element) => {
                    return (
                      <NewsItem
                        background={background}
                        color={color}
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                      />
                    );
                  })}
              </Flex>
            </>
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-warning"
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
              }
              type="button"
              className="btn btn-warning"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
const Flex = styled.div`
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;
  @media (max-width: 765px) {
    flex-direction: column;
    padding-left: 5rem;
  }
`;
