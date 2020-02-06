export const INITIALDATA_LOADED = Symbol("INITIALDATA_LOADED");
export const ARTICLE_DATA_LOADED = Symbol("ARTICLE_DATA_LOADED")
export const TAGS_DATA_LOADED = Symbol("TAGS_DATA_LOADED")
export const ARTICLE_TITLE_CLICKED = Symbol("ARTICLE_TITLE_CLICKED")
export const INIT_ARTICLE_COMMENT_GET = Symbol("INIT_ARTICLE_COMMENT_GET")
export const ARTICLE_COMMENTS_LOADED = Symbol("ARTICLE_COMMENTS_LOADED")
export const ARTICLE_CONTENT_LOADED = Symbol("ARTICLE_CONTENT_LOADED")
export const POPULAR_TAG_CLICKED = Symbol("POPULAR_TAG_CLICKED")
export const POPULAR_TAG_DISPLAYED = Symbol("POPULAR_TAG_DISPLAYED")
export const TAG_RELATED_ARTICLE_LOADED = Symbol("TAG_RELATED_ARTICLE_LOADED")
export const RELATED_TAG_LOADED = Symbol("RELATED_TAG_LOADED")
export const GLOBLE_FEED_CLICKED = Symbol("GLOBLE_FEED_CLICKED")
export const USERS_NAME_LOADED = Symbol("GLOBLE_FEED_CLICKED")
// USERS_RELATED_ARTICLES_LOADED
export const USERS_PROFILE_LOADED = Symbol("USERS_PROFILE_LOADED")
export const USERS_RELATED_ARTICLES_LOADED = Symbol("USERS_PROFILE_LOADED")
// FAVERATED_ARITICLE_CLICKED
export const FAVERATED_ARITICLE_CLICKED = Symbol("FAVERATED_ARITICLE_CLICKED")
// FAVERATED_ARITICLE_LOADED
export const FAVERATED_ARITICLE_LOADED = Symbol("FAVERATED_ARITICLE_LOADED")
// SIGN_IN_BUTTON_CLICKED
export const SIGN_IN_BUTTON_CLICKED = Symbol("SIGN_IN_BUTTON_CLICKED")


export const loadInitialData = () => {
    return { type: INITIALDATA_LOADED };
};

export const loadInitArticleDetail = (slug) =>{
    return { type: INIT_ARTICLE_COMMENT_GET, slug };
}

export const articleDataLoaded = (articleData) =>{
    return { type: ARTICLE_DATA_LOADED, articleData};
}

// 这个是特定文章的返回值
export const articleContentLoaded = (initArticleData) => {
    return { type: ARTICLE_CONTENT_LOADED, initArticleData};
}

export const tagsDataLoaded = (tagsData) =>{
    return { type: TAGS_DATA_LOADED, tagsData};
}

export const articleCommentsLoaded = (initCommentData) =>{
    return { type: ARTICLE_COMMENTS_LOADED, initCommentData};
}

export const articleTitleClicked = (title, slug) => {
    return { type: ARTICLE_TITLE_CLICKED, title, slug };
}

export const popularTagClicked = (tagName) => {
    return { type: POPULAR_TAG_CLICKED, tagName }; 
}

export const popularTagIsDiplayed = (tagName) => {
    return { type: POPULAR_TAG_DISPLAYED, tagName }; 
}

export const tagRelatedArticleLoaded = (tagRelatedArticles) => {
    return { type: TAG_RELATED_ARTICLE_LOADED, tagRelatedArticles };
}

export const globeFeedClicked = () => {
    return { type: GLOBLE_FEED_CLICKED };
}

export const relatedTagLoaded = (tagName) => {
    return { type: RELATED_TAG_LOADED, tagName };
}

// loadUserProfileDetail
export const loadUserProfileDetail = (userName) => {
    return { type: USERS_NAME_LOADED, userName };
}
// userProfileDataLoaded
export const userProfileDataLoaded = (userProfileData) => {
    return { type: USERS_PROFILE_LOADED, userProfileData };
}

// userRelatedArticlesLoaded
export const userRelatedArticlesLoaded = (userRelatedArticles) => {
    return { type: USERS_RELATED_ARTICLES_LOADED, userRelatedArticles };
}

//favoritedArticleClicked
export const favoritedArticleClicked = (userName) => {
    return { type: FAVERATED_ARITICLE_CLICKED, userName };
}
// favoritedArticleLoaded
export const favoritedArticleLoaded = (favoritedArticles) => {
    return { type: FAVERATED_ARITICLE_LOADED, favoritedArticles };
}

// signInClick
export const signInClicked = (email, password) => {
    return { type: SIGN_IN_BUTTON_CLICKED, email: email, password: password };
}

// userTokedLoaded
export const userTokedLoaded = (token) => {
    return { type: SIGN_IN_BUTTON_CLICKED, token: token };
}