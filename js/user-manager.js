const addUser = ({ name, email, password }) => {
  const currentUsers = get("users", []);
  set("users", [...currentUsers, { name, email, password }]);
};

const getUsers = () => {
  const users = get("users", []);
  return users;
};


const getUser = ({ email, password }) => {  

  const msg = "Usuário não cadastrado";

  try {

    if (getUsers().find((user) => user.email === email && user.password === password)) {
      return true;
    }    

    alert(msg);

  } catch (error) {
    alert(error || msg);
  }

}