import { useState, useEffect } from "react";
import axios from "axios"
interface UserType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface propsType {
  id: number;
}

const Demo8 = ({ id }: propsType) => {
  const [user, serUser] = useState<UserType | null>(null);

  async function getUserAPi() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    serUser(response.data);
  }

  useEffect(() => {
    getUserAPi();
  }, []);
  if (!user) {
    return <div>....Loading</div>;
  }
  return (
    <div>
      <div data-testid="userId">UserId: {user.userId}</div>
      <div>Title: {user.title}</div>
      <div>IsActive: {user.completed ? "True" : "False"}</div>
    </div>
  );
};

export default Demo8;
