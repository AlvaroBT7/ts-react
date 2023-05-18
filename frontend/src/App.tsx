import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import NoUsersCard from "./components/NoUsersCard";
import Nav from "./components/NAv";
import { User, Pages } from "./utils/types";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [page, setPage] = useState<
    Pages["home"] | Pages["start"] | Pages["help"]
  >("home");

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  if (users) {
    return (
      <>
        <Nav>{page}</Nav>
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              description={user.description || null}
            />
          );
        })}
      </>
    );
  }
  return (
    <>
      <Nav>{page}</Nav>
      <NoUsersCard />
    </>
  );
};

export default App;
