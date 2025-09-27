// Authentication helper functions
class AuthHelper {
    constructor() {
        this.supabase = null;
        this.init();
    }

    init() {
        const SUPABASE_URL = 'https://wqkejzehbhsvgzcfbecc.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indxa2VqemVoYmhzdmd6Y2ZiZWNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NjY0NTEsImV4cCI6MjA3NDU';
        this.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    }

    async checkAuth() {
        const { data: { session } } = await this.supabase.auth.getSession();
        return session;
    }

    async getCurrentUser() {
        const { data: { user } } = await this.supabase.auth.getUser();
        return user;
    }

    async logout() {
        await this.supabase.auth.signOut();
        window.location.href = 'index.html';
    }
}

// Initialize auth helper
window.authHelper = new AuthHelper();
