import React from 'react';
import { connect } from 'react-redux';

const InternalPopularTages = props => {
  const tempTagList = [];

  const reducer = (allElements, element) => {
    if (element in allElements) allElements[element]++;
    else allElements[element] = 1;
    return allElements;
  };

  const PopularTagesCounter = () => {
    // 数据输入进来
    if(props.articleLibrary){
      props.articleLibrary.forEach(article => {
        console.log(article.tagList);
        if (article.tagList.length !== 0)
          article.tagList.forEach(item => {
            tempTagList.push(item);
          });
      });
    }
       
    // 数据统计，显示前五
    const myObject = tempTagList.reduce(reducer, {});
    return Object.keys(myObject).slice(0, 5);
  };

  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          {PopularTagesCounter().map((tag, index) => {
            return (
              <a href="#top" className="tag-pill tag-default" key={index}>
                {tag}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDismatchToProps = dispatch => {
  return {};
};

export const PopularTages = connect(
  mapStateToProps,
  mapDismatchToProps
)(InternalPopularTages);