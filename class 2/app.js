<<<<<<< HEAD
let { createClient } = supabase;

const PROJECT_URL = 'https://wvgfjuzaqrlqxazgjsxw.supabase.co';
const PROJECT_KEY = 'sb_publishable_s-aHRNhlx1EKW8z2ArQMrQ_FJ1Tq2Rf';


const supabaseClient = createClient(PROJECT_URL, PROJECT_KEY);

const dataCall = async () => {

    const { error } = await supabase
        .from('countries')
        .insert({ id: 1, name: 'Mordor' })
}
=======
const { createClient } = supabase

// Create a single supabase client for interacting with your database
const PROJECT_URL = "https://ydvaktcdacglpbvohobd.supabase.co"
const PUBLISH_KEY = "sb_publishable_GDZDRYphfSJ53roKnfKakw_409jU8Fk"

const supabaseClient = createClient(PROJECT_URL,  PUBLISH_KEY)
// console.log(supabaseClient);

>>>>>>> 421a4512072d6a3340ac4aad3bf4f1e6edfe65d7
