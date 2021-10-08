const login = () => {

    const form = document.querySelector('form');

    let user = Object.values(form).reduce((user, field) => {
        if (field.value)
            user[field.name] = field.value;
        return user;
    }, {});
    
    if (user?.email && user?.password)
        setUserLogin(user)
}

const setUserLogin = (user) => {
    set("userLogin", user)
}