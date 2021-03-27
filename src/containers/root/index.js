import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import UserForm from "../../components/UserForm";
import UserTable from "../../components/UserTable";
import { getUsersListSagaAction } from "./state/actions";
import "./styles.css";

const RootContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersListSagaAction());
  }, []);

  const { usersList, isLoading } = useSelector((state) => state.root);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <UserForm />
          <UserTable usersList={usersList} />
        </div>
      )}
    </div>
  );
};

export default RootContainer;
