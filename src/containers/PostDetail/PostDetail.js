import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

import { getComments, getPost } from "../../api/posts";

const PostDetailWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
  > a {
    font-size: 20px;
    text-decoration: none;
  }
`;

const PostDetail = () => {
  const params = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    getPost(params.id)
      .then((post) => setPost(post))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [params.id]);

  const [comments, setComments] = useState(null);
  const [loadingComments, setLoadingComments] = useState(false);
  const [errorComments, setErrorComments] = useState(false);

  useEffect(() => {
    setLoadingComments(true);

    getComments(params.id)
      .then((comments) => setComments(comments))
      .catch(() => setErrorComments(true))
      .finally(() => setLoadingComments(false));
  }, [params.id]);

  return (
    <PostDetailWrapper>
      {loading && loadingComments && "loading..."}
      {error && errorComments && "some error..."}
      {post && comments && (
        <>
          <Link to="posts">Back</Link>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <h4>Comments</h4>
          {comments.map((comment) => (
            <div>
              <h5>{comment.name}</h5>
              <p>{comment.body}</p>
            </div>
          ))}
        </>
      )}
    </PostDetailWrapper>
  );
};

export default PostDetail;
