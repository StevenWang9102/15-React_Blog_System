import React from "react";

const PopularTages = props => {
  return (
    <div class='col-md-3'>
      <div class='sidebar'>
        <p>Popular Tags</p>

        <div class='tag-list'>
          <a href='#top' class='tag-pill tag-default'>
            programming
          </a>
          <a href='#top' class='tag-pill tag-default'>
            javascript
          </a>
          <a href='#top' class='tag-pill tag-default'>
            emberjs
          </a>
          <a href='#top' class='tag-pill tag-default'>
            angularjs
          </a>
          <a href='#top' class='tag-pill tag-default'>
            react
          </a>
          <a href='#top' class='tag-pill tag-default'>
            mean
          </a>
          <a href='#top' class='tag-pill tag-default'>
            node
          </a>
          <a href='#top' class='tag-pill tag-default'>
            rails
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularTages;
