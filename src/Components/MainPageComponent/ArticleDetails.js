import React from "react";

const ArticleDetails = props => {
    
  return (
    <div class='article-page'>
      <div class='banner'>
        <div class='container'>
          <h1>How to build webapps that scale</h1>

          <div class='article-meta'>
            <a href=''>
              <img src='http://i.imgur.com/Qr71crq.jpg' alt='author'/>
            </a>
            <div class='info'>
              <a href='' class='author'>
                name: Eric Simons
              </a>
              <span class='date'>January 20th</span>
            </div>
          </div>
        </div>
      </div>

      <div class='container page'>
        <div class='row article-content'>
          <div class='col-md-12'>
            <p>
              Web development technologies have evolved at an incredible clip
              over the past few years.
            </p>
          </div>
        </div>
        <hr/>

        <div class='row'>
          <div class='col-xs-12 col-md-8 offset-md-2'>
            <form class='card comment-form'>
              <div class='card-block'>
                <textarea
                  class='form-control'
                  placeholder='Write a comment...'
                  rows='3'></textarea>
              </div>
              <div class='card-footer'>
                <img
                  src='http://i.imgur.com/Qr71crq.jpg'
                  class='comment-author-img'
                  alt="author"
                />
                <button class='btn btn-sm btn-primary'>Post Comment</button>
              </div>
            </form>


            <div class='card'>
              <div class='card-block'>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div class='card-footer'>
                <a href='' class='comment-author'>
                  <img
                    src='http://i.imgur.com/Qr71crq.jpg'
                    class='comment-author-img'
                                      alt="author"

                  />
                </a>
                &nbsp;
                <a href='' class='comment-author'>
                  Jacob Schmidt
                </a>
                <span class='date-posted'>Dec 29th</span>
                <span class='mod-options'>
                  <i class='ion-edit'></i>
                  <i class='ion-trash-a'></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
