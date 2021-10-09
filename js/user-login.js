const login = (event) => {
    const form = document.querySelector('form');

    let user = Object.values(form).reduce((user, field) => {

        if (field.value)
            user[field.name] = field.value;
        return user;
    }, {});

    event.preventDefault();
    if (user?.email && user?.password && getUser(user))
        setUserLogin(user)
}

const setUserLogin = (user) => {
    set("userLogin", user)
}

const getUserLogin = () => {
    const userLogin = get("userLogin", {});

    return userLogin?.email && userLogin?.password
};

const isUserLogin = () => {
debugger;
    if (getUserLogin()) {
        document.getElementById('notUserLogin').style.visibility = "hidden";
        document.getElementById('isUserLogin').style.visibility = "visible";
        return;
    }

    document.getElementById('notUserLogin').style.visibility = "visible";
    document.getElementById('isUserLogin').style.visibility = "hidden";    
}