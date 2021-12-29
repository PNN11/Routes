import React, { useCallback } from "react";

import { useParams, Link } from "react-router-dom";

import { getUser } from "../../api/users";

import useRequest from "../../hooks/useRequest";

import { CircularProgress } from "@mui/material";
import { Email, Home, Language, Person, Phone } from "@mui/icons-material";
import { UserDetailWrapeer } from "./UserDetailStyle";

const UserDetail = () => {
  const params = useParams();

  const requestUser = useCallback(() => getUser(params.id), [params.id]);

  const { data: user, loading, error } = useRequest(requestUser);

  return (
    <UserDetailWrapeer>
      {loading && <CircularProgress />}
      {error && "some error..."}
      {!loading && !error && user && (
        <>
          <Link to="/users">Back</Link>
          <h4>{user.name}</h4>
          <h5>Contact information:</h5>
          <div>
            <p>
              <Person /> {user.username}
            </p>
            <p>
              <Email /> {user.email}
            </p>
            <p>
              <Phone /> {user.phone}
            </p>
            <p>
              <Language />
              <a target="_blank" rel="noopener noreferrer" href={user.website}>
                {user.website}
              </a>
            </p>
            <p>
              <Home />{" "}
              {`${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}`}
            </p>
          </div>
          <h5>Work:</h5>
          <p>
            {user.company.name}
            <p>{user.company.catchPhrase}</p>
          </p>
        </>
      )}
    </UserDetailWrapeer>
  );
};

export default UserDetail;
