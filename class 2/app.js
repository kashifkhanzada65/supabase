let { createClient } = supabase;

const PROJECT_URL = 'https://wvgfjuzaqrlqxazgjsxw.supabase.co';
const PROJECT_KEY = 'sb_publishable_s-aHRNhlx1EKW8z2ArQMrQ_FJ1Tq2Rf';


const supabaseClient = createClient(PROJECT_URL, PROJECT_KEY);

const dataCall = async () => {

    const { error } = await supabase
        .from('countries')
        .insert({ id: 1, name: 'Mordor' })
}