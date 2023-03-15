import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ViewBlog({ match }) {
  const { id } = useParams();
  const post = useSelector(state => state.post.post);

  const dispatch = useDispatch();

  const token = useSelector(state => state.admin.token);
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`/blogs/posts/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        dispatch({ type: 'VIEW_POST', payload: response.data });
        setLiked(response.data.liked);
        setLikesCount(response.data.likesCount);
        setComments(response.data.comments);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogPost();
  }, [dispatch,id,token]);
 

  const handleLike = async () => {
    try {
      const response = await axios.post(`/blogs/posts/${id}/like`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLiked(response.data.liked);
      setLikesCount(response.data.likesCount);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/blogs/posts/${id}/comments`,
        { text: commentText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComments([...comments, response.data]);
      setCommentText('');
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) {
    return <div>Loading post...</div>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.description}</p>
      <div>
        <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
        <span>{likesCount} likes</span>
      </div>
      <div>
        <h2>Comments</h2>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            placeholder="Add a comment"
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.text}</p>
            <p>By {comment.user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewBlog