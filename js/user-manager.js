const addUser = ({ name, email, password }) => {
  const currentUsers = get("users", []);
  set("users", [...currentUsers, { name, email, password }]);
};

const getUsers = () => {
  const users = get("users", []);
  return users;
};
