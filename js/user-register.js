const getUserValues = () => {
  const inputName = document.querySelector('[name="name"]');
  const inputEmail = document.querySelector('[name="email"]');
  const inputPassword = document.querySelector('[name="password"]');

  return {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  }
}

const register = (event) => {
  event.preventDefault();
  try {
    const newUser = getUserValues();
    if (getUsers().find((user) => user.email === newUser.email)) {
      throw new Error("Usuário já cadastrado!")
    }
    addUser(newUser);
    window.location.href = "/pages/list.html";
  } catch (msg) {
    alert(msg || "Erro ao salvar o usuário");
  }
};
