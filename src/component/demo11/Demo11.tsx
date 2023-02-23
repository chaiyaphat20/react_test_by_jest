import { useState, useEffect } from "react";
import axios from "axios"
import { add } from '../../utils/cal';
interface UserType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface propsType {
  id: number;
}

const Demo11 = ({ id }: propsType) => {
  const [user, serUser] = useState<UserType | null>(null);

  async function getUserAPi() {
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
      <div>ADD: {add(6,2)}</div>
    </div>
  );
};

export default Demo11;
