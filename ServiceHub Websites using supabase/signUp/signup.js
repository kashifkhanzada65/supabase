import supabaseClient from "../script.js"
console.log(supabaseClient);

const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const userService = document.getElementById('userService')


const signUpNewUser = async () => {

    const { data, error } = await supabaseClient.auth.signUp({
        email: email.value,
        password: password.value,
    })
  
    const userData = {
        fullName: fullName.value,
        email: email.value,
        userService: userService.value,
        userId: data.user.id
    }

    if (error) {
        alert(error)

    } else {
        console.log(data);
        alert('user register')

        const { error } = await supabaseClient
            .from('users')
            .insert(userData)

        if (error) {
            alert(error)
        }

    }
}




window.signUpNewUser = signUpNewUser