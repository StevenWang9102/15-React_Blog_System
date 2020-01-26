import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import dateFormat from "dateformat";
import { loadInitArticleDetail } from "../../ReduxStore/FeedDetails/feedActions";
import { useParams } from "react-router-dom";
import {ArticleComments} from "./ArticleComments"

const InternalArticleDetails = props => {
  const { slug } = useParams();

  useEffect(() => {
    props.loadInitArticleDetail(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          {/* 文章标题部分 */}
          {props.currentArticleDetails.author && (
            <div>
              <h1>{props.currentArticleDetails.title}</h1>
              <div className="article-meta">
                <a href="#top">
                  <img
                    className="author-image"
                    src={props.currentArticleDetails.author.image}
                    alt="au"
                  />
                </a>
                <div className="info">
                  <a href="#top" className="author">
                    {props.currentArticleDetails.author.username}
                  </a>
                  <span className="date">
                    {dateFormat(
                      props.currentArticleDetails.author.updatedAt,
                      "ddd mmm dd yyyy"
                    )}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 文章内容部分 */}
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12 article-detail">
            {props.currentArticleDetails.body}
          </div>
        </div>
        <hr />

        <ArticleComments/>

      </div>
    </div>
  );
};

InternalArticleDetails.propTypes = {
  currentArticleDetails: PropTypes.object.isRequired
};

const mapStateToProps = ({currentArticleDetails }) => {
  return {currentArticleDetails };
};

const mapDispatchToProps = dispatch => {
  return {
    loadInitArticleDetail: slug => dispatch(loadInitArticleDetail(slug))
  };
};

export const ArticleDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalArticleDetails);