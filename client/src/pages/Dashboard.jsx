import React from "react";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      axios.get("/user").then(({ data }) => {
        setUser(data);
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {isLoading ? <div>Loading...</div> : children}
    </UserContext.Provider>
  );
}

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      {user ? <h1>Welcome {user.name}</h1> : <h1>You are not logged in</h1>}
    </div>
  );
}
