import PostItem from './PostItem';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const PostList = ({posts, remove}) =>{ 

    if(!posts.length) {
      return <h2 style={{textAlign: 'center'}}>Посты не найдены</h2>
    }
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Список постов</h1>
        <TransitionGroup>
        {posts.map((post, index) => 
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} number={index+1} post={post}/>
          </CSSTransition>
        )}
        </TransitionGroup>
      </div>
    );
};

export default PostList