# SkillSync | Modern Collaboration Platform

SkillSync is a high-end, premium web application designed for students (BCA, MCA, CS, IT) to connect, collaborate, and build projects together.

## 🚀 Technology Stack
- **Frontend**: Pure HTML5, CSS3 (Modular Styles), and Vanilla JavaScript (ES6+).
- **Backend**: **Supabase** (Serverless PostgreSQL + Authentication).
- **Icons**: Font Awesome 6.
- **Typography**: Inter (Google Fonts).
- **Hosting**: Optimized for **Vercel** & **GitHub**.

## ✨ Key Features
- **Modern Landing Page**: Premium, dark-mode design with smooth animations.
- **Secure Authentication**: Built-in login/register using Supabase Auth.
- **Teammate Discovery**: Search students by skills using intelligent filtering.
- **Project Browsing**: Find and join public student project teams.
- **Dynamic Portfolios**: Showcase skills, bio, and professional links (GitHub/LinkedIn).

## 🛠 Setup & Deployment

### 1. Supabase Configuration
1. Create a project on [Supabase.com](https://supabase.com).
2. Go to **Settings > API** and copy your `Project URL` and `anon public key`.
3. Open `assets/js/supabase.js` and paste your credentials.

### 2. Database Schema
Run the following inside your Supabase **SQL Editor**:
```sql
CREATE TABLE users (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    course TEXT,
    college TEXT,
    skills TEXT,
    bio TEXT,
    github_profile TEXT,
    linkedin_profile TEXT,
    status TEXT DEFAULT 'Pending',
    role TEXT DEFAULT 'student',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    required_skills TEXT,
    leader_id UUID REFERENCES users(id) ON DELETE CASCADE,
    is_public BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. Deploy to Vercel
1. Push this project to **GitHub**.
2. Go to **Vercel.com**, add a new project, and import this repository.
3. No environment variables are needed for the static version (credentials are in `supabase.js`).

## 🤝 Contributing
Built for students, by students. Feel free to fork and enhance!
