import PostItem from './PostItem';

const PostList = ({posts, remove}) =>{ 

    return (
      
      <div>
        {posts.length
          ?<h1 style={{textAlign: 'center'}}>Список постов</h1>
          :<h2 style={{textAlign: 'center'}}>Посты не найдены</h2>
        }  
        {posts.map((post, index) => 
            <PostItem remove={remove} number={index+1} post={post} key={post.id}/>
        )}
      </div>
    );
};

export default PostList