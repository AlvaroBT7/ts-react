import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import NoUsersCard from "./components/NoUsersCard";
import { User } from "./utils/types";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  if (users) {
    return (
      <>
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
  return <NoUsersCard />;
};

export default App;
