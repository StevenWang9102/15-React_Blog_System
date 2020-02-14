import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import dateFormat from "dateformat";
import {
  loadUserProfileDetail,
  favoritedArticleClicked
} from "../../ReduxStore/FeedDetails/feedActions";

const InternalUserProfile = props => {
  
  // 这个UserName不需要从URL获取，应该是从内存访问的
  const userName = sessionStorage.getItem("TokenUserName") || null;

  useEffect(() => {
    if (userName) {
      props.loadUserProfileDetail(userName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div> 
      <div className='profile-page'>

        {/* ---------------- User Information ---------------- */}
        <div className='user-info'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12 col-md-10 offset-md-1'>
                <img
                  src={
                    props.currentProfileData.profile &&
                    props.currentProfileData.profile.image
                  }
                  className='user-img'
                  alt='au'
                />
                <h4>{userName}</h4>
                <p>
                  {props.currentProfileData.profile &&
                    props.currentProfileData.profile.bio}
                </p>
                <button className='btn btn-sm btn-outline-secondary action-btn'>
                  <i className='ion-plus-round'></i>
                  &nbsp; + Follow {userName}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-10 offset-md-1'>

              {/* ---------------- Navigation ---------------- */}
              <div className='articles-toggle'>
                <ul className='nav nav-pills outline-active'>
                  <li className='nav-item'>
                    <a className='nav-link active' href='#top'>
                      My Articles
                    </a>
                  </li>

                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      href='#top'
                      onClick={userName => {
                        props.onFavoritedArticleClicked(userName);
                      }}>
                      Favorited Articles
                    </a>
                  </li>
                </ul>
              </div>

              {/* ---------------- One Article ----------------  */}
              {(props.favoritedArticles || props.currentUsersArticles).map(
                (article, index) => {
                  return (
                    <div className='article-preview' key={index}>
                      <div className='article-meta'>
                        <a href='#top'>
                          <img src={article.author.image} alt='au' />
                        </a>
                        <div className='info'>
                          <a href='#top' className='author'>
                            {article.author.username}
                          </a>
                          <span className='date'>
                            {dateFormat(article.updatedAt, "ddd mmm dd yyyy")}
                          </span>
                        </div>
                        <button className='btn btn-outline-primary btn-sm pull-xs-right'>
                          <i className='ion-heart'></i> {article.favoritesCount}
                        </button>
                      </div>
                      <a href='#top' className='preview-link'>
                        <h1>{article.title}</h1>
                        <p>{article.description}</p>
                        <span>Read more...</span>
                      </a>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InternalUserProfile.propTypes = {
  currentProfileData: PropTypes.object.isRequired,
  currentUsersArticles: PropTypes.array.isRequired,
  loadUserProfileDetail: PropTypes.func.isRequired,
  favoritedArticles: PropTypes.array,
  userInfo: PropTypes.object
};

const mapStateToProps = ({
  currentProfileData,
  currentUsersArticles,
  onFavoritedArticleClicked,
  favoritedArticles,
  userInfo
}) => {
  return {
    currentProfileData,
    currentUsersArticles,
    onFavoritedArticleClicked,
    userInfo,
    favoritedArticles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUserProfileDetail: userName =>
      dispatch(loadUserProfileDetail(userName)),
    onFavoritedArticleClicked: userName =>
      dispatch(favoritedArticleClicked(userName))
  };
};

export const UserProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalUserProfile);
