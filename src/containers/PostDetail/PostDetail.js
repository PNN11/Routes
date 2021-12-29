import React, { useCallback, useMemo } from "react";

import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

import { getComments, getPost } from "../../api/posts";
import { getUser } from "../../api/users";
import useRequest from "../../hooks/useRequest";
import useRequests from "../../hooks/useRequests";
import { CircularProgress } from "@mui/material";

const PostDetailWrapper = styled("section")`
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
  > h1 {
    width: 100%;
  }
  > a {
    font-size: 22px;
    text-decoration: none;
  }
`;

const PostDetail = () => {
  const params = useParams();

  const requestPostById = useCallback(() => getPost(params.id), [params.id]);

  const requestPostComments = useCallback(
    () => getComments(params.id),
    [params.id]
  );

  const requests = useMemo(() => {
    return [requestPostById, requestPostComments];
  }, [requestPostById, requestPostComments]);

  const { data, loading, error } = useRequests(requests);

  const [post, comments] = data || ["", ""];

  const requestUser = useCallback(() => {
    if (!post.userId) return Promise.resolve();
    return getUser(post.userId);
  }, [post.userId]);

  const { data: user, loadingUser, errorUser } = useRequest(requestUser);

  return (
    <PostDetailWrapper>
      {loading && <CircularProgress />}
      {error && "some error..."}
      {post && comments && (
        <>
          <Link to="/posts">Back</Link>
          <h1>{post.title}</h1>
          {!loadingUser && !errorUser && user && (
            <Link to={`/users/${user.id}`}>Author: {user.name}</Link>
          )}
          <p>{post.body}</p>
          <h4>Comments:</h4>
          {comments.map((comment) => (
            <div key={comment.id}>
              <h5>{comment.name}</h5>
              <span>{comment.email}</span>
              <p>{comment.body}</p>
            </div>
          ))}
        </>
      )}
    </PostDetailWrapper>
  );
};

export default PostDetail;
