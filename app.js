const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const contact = document.getElementById("contact");


///// For Sign Up Page

const setData = (form) => {
    const userObj = {
        firstname : firstname.value,
        lastname : lastname.value,
        email : email.value,
        password : password.value,
        contact : contact.value
    }

    const user = JSON.parse(localStorage.getItem("users")) || []

    const userObjIndex = user.findIndex((value) => {
        return value.email === userObj.email
    })

    if (userObjIndex == -1) {
        user.push(userObj)
        localStorage.setItem("users", JSON.stringify(user))
        window.confirm("Account Created Successfully")
        form.setAttribute("action", "./login.html")
    }
    else {
        window.confirm("Account with this Email already exists.")
    }

}

const showPass = (i) => {
    const password = document.getElementById("password")
    if(i.className === "far fa-eye-slash") {
        i.className = "far fa-eye"
        password.type = "text"
    }
    else {
        i.className = "far fa-eye-slash"
        password.type = "password"
    }
}

////// For Login Page 

const login = (e) => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const userData = JSON.parse(localStorage.getItem("users"));

    const checkUser = userData.find((objIndex) => {
        return objIndex.email === email.value && objIndex.password === password.value
    })

    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        window.confirm("Login Successful")
        e.setAttribute("action", "./dashboard.html")
    }
    else {
        window.confirm("Credential Errors")
    }    
}

////// Viewing Dashboard Page 

const showData = () => {
    const p = document.getElementById("p");
    const tr = document.getElementById("tr")
    const userData = JSON.parse(localStorage.getItem("currentUser"));
    p.innerHTML = `Hello, ${userData.firstname}!`
    tr.innerHTML = `<td>${userData.firstname} ${userData.lastname}</td>
                    <td>${userData.email}</td>
                    <td>${userData.password}</td>
                    <td>${userData.contact}</td>`
}

const logout = () => {
    localStorage.removeItem("currentUser")
    window.location.assign("./login.html")
}

const toLogIn = () => {
    window.location.assign("./login.html")
}

const toSignIn = () => {
    window.location.assign("./index.html")
}

