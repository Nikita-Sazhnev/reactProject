import PostItem from './PostItem';

const PostList = ({posts, remove}) =>{ 

    if(!posts.length) {
      return <h2 style={{textAlign: 'center'}}>Посты не найдены</h2>
    }
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Список постов</h1>
        {posts.map((post, index) => 
            <PostItem remove={remove} number={index+1} post={post} key={post.id}/>
        )}
      </div>
    );
};

export default PostList