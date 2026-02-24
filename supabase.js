/* 
=====================================================
SUPABASE CONFIGURATION
To get these values:
1. Go to Supabase Dashboard (supabase.com)
2. Go to Settings > API
3. Copy "Project URL" and "anon public key"
=====================================================
*/

const SUPABASE_URL = 'https://vqlnjfckrhweosynvqno.supabase.co'; // YOUR_PROJECT_URL
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // YOUR_ANON_KEY

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
