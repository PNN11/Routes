import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getSliceUsers, getUser } from "../../store/users";
import * as Statuses from "../../store/statuses";

import { CircularProgress } from "@mui/material";
import { Email, Home, Language, Person, Phone } from "@mui/icons-material";
import { UserDetailWrapeer } from "./UserDetailStyle";

const UserDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user, userRequestStatus } = useSelector(getSliceUsers);

  useEffect(() => {
    if (params.id) {
      dispatch(getUser(params.id));
    }
  }, [dispatch, params.id]);

  return (
    <UserDetailWrapeer>
      {userRequestStatus === Statuses.PENDING && <CircularProgress />}
      {userRequestStatus === Statuses.FAILURE && "some error..."}
      {user && (
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
