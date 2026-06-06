const { createClient } = supabase

// Create a single supabase client for interacting with your database
const PROJECT_URL = 'https://pwmrwkxqcqpbtogolgrd.supabase.co'
const PUBLISH_KEY = 'sb_publishable_nsmPKf6FK6Gm8oU3aCHBqA_n8r45Sgs'
const supabaseClient = createClient(PROJECT_URL, PUBLISH_KEY)
console.log(supabaseClient);



let fullName = document.getElementById('fullName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let phoneNumber = document.getElementById('phoneNumber')



const signupHalder =  async () => {
  
    // e.preventDefault()

    try {
        const { data, error } = await supabaseClient.auth.signUp({
            email: email.value,
            password: password.value,

        })

        const user = {
            phoneNumber : phoneNumber.value,
            email :email.value,
            fullName : fullName.value,
        }

        if (data) {
            const { data,error } = await supabaseClient
                .from('UserData')
                .insert(user)
        }

        if (error) {
  console.log("Signup error:", error.message)
  return
}



    } catch (error) {
  console.log(error);
  
    }


}
// const loginHandler = ()=>{

// }







window.signupHalder = signupHalder 