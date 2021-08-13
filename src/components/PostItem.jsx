import React from 'react';
import MyButton from './UI/Button/MyButton';

const PostItem = ({remove, post, number}) =>{ 
    return (
      <div>
        <div className="post">
          <div className="post_content">
          <strong> {number}. {post.title}</strong>
            <div>
              {post.body}
            </div>
          </div>
          <div className="post_btns">
          <MyButton onClick={() => remove(post)}>X</MyButton>
          </div>
        </div>
      </div>
    );
};

export default PostItem