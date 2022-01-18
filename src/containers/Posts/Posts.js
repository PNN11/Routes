import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { CircularProgress } from "@mui/material";

import Post from "../../components/Post";
import { getPosts, getSlice } from "../../store/posts";
import * as Statuses from "../../store/statuses";

const PostsWrapper = styled("section")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 4px;
  box-sizing: border-box;
`;

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, postsRequestStatus } = useSelector(getSlice);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <PostsWrapper>
      {postsRequestStatus === Statuses.PENDING && <CircularProgress />}
      {postsRequestStatus === Statuses.FAILURE && "some error..."}
      {posts && posts?.map((post) => <Post key={post.id} {...post} />)}
    </PostsWrapper>
  );
};

export default Posts;
