import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getSlice, getPost } from "../../store/posts";
import * as Statuses from "../../store/statuses";
import { getSliceUsers, getUser } from "../../store/users";

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

  const dispatch = useDispatch();

  const { post, postComments, postRequestStatus, postCommentsRequestStatus } =
    useSelector(getSlice);

  const { user, userRequestStatus } = useSelector(getSliceUsers);

  useEffect(() => {
    if (params.id) {
      dispatch(getPost(params.id));
      dispatch(getComments(params.id));
    }
  }, [params.id, dispatch]);

  useEffect(() => {
    if (post?.userId) {
      dispatch(getUser(post.userId));
    }
  }, [post?.userId, dispatch]);

  return (
    <PostDetailWrapper>
      {postRequestStatus === Statuses.PENDING &&
        postCommentsRequestStatus === Statuses.PENDING && <CircularProgress />}
      {postRequestStatus === Statuses.FAILURE &&
        postCommentsRequestStatus === Statuses.FAILURE &&
        "some error..."}
      {post && postComments && (
        <>
          <Link to="/posts">Back</Link>
          <h1>{post.title}</h1>
          {userRequestStatus === Statuses.PENDING && <CircularProgress />}
          {userRequestStatus === Statuses.FAILURE && "some error..."}
          {user && <Link to={`/users/${user.id}`}>Author: {user.name}</Link>}
          <p>{post.body}</p>
          <h4>Comments:</h4>
          {postComments.map((comment) => (
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
