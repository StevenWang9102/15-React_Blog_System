import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import dateFormat from "dateformat";
import { loadInitArticleDetail, onEditArticleClicked } from "../../ReduxStore/FeedDetails/feedActions";
import { useParams } from "react-router-dom";
import { ArticleComments } from "./ArticleComments";
import { getUserInformation } from "../../ReduxStore/FeedDetails/feedSagas";

import { Link } from "react-router-dom";

const InternalArticleDetails = props => {
  const { article_slug } = useParams();
  let history = useHistory();

  useEffect(() => {
    props.loadInitArticleDetail(article_slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='article-page'>
      <div className='banner'>
        <div className='container'>

          {/* ---------------- Article Title  ---------------- */}
          {props.currentArticleDetails.author && (
            <div>
              <h1>{props.currentArticleDetails.title}</h1>

              <div className='article-meta article-source'>
                <Link
                  to={
                    "/user-profile/" +
                    props.currentArticleDetails.author.username
                  }>
                  <img
                    className='author-image'
                    src={props.currentArticleDetails.author.image}
                    alt='au'
                  />
                  <div className='info author'>
                    {props.currentArticleDetails &&
                      props.currentArticleDetails.author.username}
                    <span className='date'>
                      {dateFormat(
                        props.currentArticleDetails.author.updatedAt,
                        "ddd mmm dd yyyy"
                      )}
                    </span>
                  </div>
                </Link>
              </div>

              {/* ---------------- Edit and Delete Button ----------------  */}
              {(getUserInformation().username === props.currentArticleDetails.author.username) && (
                <div className='edit-button'>
                  <Link to={`/new_post/${article_slug}`}>
                    <button
                      type="button"
                      className='btn btn-sm btn-info'
                      onClick={event => {
                        // 清空flag
                        props.onEditArticleClicked(false)
                      }}>
                      Edit Article
                    </button>
                  </Link>

                  <button
                    className='btn btn-sm btn-warning'
                    onClick={event => {
                      // props.onPostCommentsClicked(props.currentSlug, myComment)
                    }}>
                    Delete Article
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ---------------- Article Details ----------------  */}
      <div className='container page'>
        <div className='row article-content'>
          <div className='col-md-12 article-detail'>
            {props.currentArticleDetails.body}
          </div>
        </div>
        <hr />
      </div>

      {/* ---------------- Sign in options  ----------------  */}
      {!getUserInformation() && (
        <div className='container page'>
          <div className='row'>
            <div className='col-md-12'>
              <Link to='sign_in' onClick={() => history.push("sign_in")}>
                Sign in
              </Link>
              or
              <Link to='sign_up'> sign up </Link>
              to add comments on this article.
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Comments ----------------  */}
      {getUserInformation() && <ArticleComments />}
    </div>
  );
};

InternalArticleDetails.propTypes = {
  currentArticleDetails: PropTypes.object.isRequired
};

const mapStateToProps = ({ currentArticleDetails, currentProfileData }) => {
  return { currentArticleDetails, currentProfileData };
};

const mapDispatchToProps = dispatch => {

  return {
    loadInitArticleDetail: article_slug =>
      dispatch(loadInitArticleDetail(article_slug)),
      onEditArticleClicked: flag => dispatch(onEditArticleClicked(flag))
  };
};

export const ArticleDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalArticleDetails);
