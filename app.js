/* 
=====================================================
SKILLSYNC - CORE CLIENT LOGIC
=====================================================
*/

// Check if user is logged in
async function checkAuth() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    return user;
}

// Get user profile data
async function getProfile(userId) {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Error fetching profile:', error);
        return null;
    }
    return data;
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Handle Logout
async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = 'index.html';
}

// Setup common UI elements (if they exist)
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});
