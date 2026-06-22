let { createClient } = supabase;

const PROJECT_URL = 'https://wvgfjuzaqrlqxazgjsxw.supabase.co'
const PROJECT_KEY = 'sb_publishable_s-aHRNhlx1EKW8z2ArQMrQ_FJ1Tq2Rf'


const supabaseClient = createClient(PROJECT_URL, PROJECT_KEY);

console.log(supabaseClient);

const dataCall = async () => {

    const { error } = await supabaseClient
        .from('countries')
        .insert({ id: 1, name: 'Mordor' })

}




pppppppppppp 




