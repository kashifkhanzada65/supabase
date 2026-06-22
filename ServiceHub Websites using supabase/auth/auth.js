import supabaseClient from "../script.js"
console.log(supabaseClient);

const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const userService = document.getElementById('userService')
const emailLogin = document.getElementById('emailLogin')
const passwordLogin = document.getElementById('passwordLogin')


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

        location.href = '../auth/login.html'

    }
}

const loginHandler = async () => {

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: emailLogin.value,
        password: passwordLogin.value,
    })

    if (error) {
        alert(error)
    } else {

        const { data: userData, error: userError } = await supabaseClient
            .from('users')
            .select()
            .eq('userId', data.user.id)
            .single()

        if (userError) {
            alert(userError)
        } else {

            if (userData.userService === 'Seller') {
                location.href = '../seller/seller.html'
            } else if (userData.userService === 'Buyer') {
                location.href = '../buyer/buyer.html'
            }

        }
    }



}






window.signUpNewUser = signUpNewUser
window.loginHandler = loginHandler