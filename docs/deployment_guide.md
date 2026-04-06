# 📘 Aurelius Hub: 5-Minute Deployment Master Guide
### Go from Local to Live (Professional Portfolio Ready)

Both **Vercel** and **Netlify** are industrial-standard, free-for-personal-use platforms. Follow these 3 easy phases to launch your project.

---

## 🏗️ Phase 1: GitHub Setup (The Source)
Vercel and Netlify work by connecting directly to your GitHub repository.

1.  **Create a New Repository**: Go to [GitHub.com](https://github.com/new) and name it `aurelius-hub`.
2.  **Upload Your Files**:
    - If you are comfortable with the command line:
      ```bash
      git init
      git add .
      git commit -m "feat: initial enterprise hub launch"
      git branch -M main
      git remote add origin https://github.com/YOUR_USERNAME/aurelius-hub.git
      git push -u origin main
      ```
    - **OR** if you prefer a GUI: Use [GitHub Desktop](https://desktop.github.com/) to simply drag-and-drop the folder and "Publish."

---

## 🚀 Phase 2: Launching on Vercel (Recommended)
Vercel is the best fit for Vite-based React projects like yours.

1.  **Sign Up**: Go to [Vercel.com](https://vercel.com/) and Sign Up using your GitHub account.
2.  **Import Project**: Click **"Add New"** → **"Project."**
3.  **Select Repository**: Find `aurelius-hub` in your list and click **"Import."**
4.  **Configure Project**:
    - **Framework Preset**: Vite (detected automatically).
    - **Root Directory**: `./` (detected automatically).
    - **Build Command**: `npm run build`
    - **Output Directory**: `dist`
5.  **DEPLOY**: Click the **"Deploy"** button. In ~60 seconds, your site will be live!

---

## 🌐 Phase 3: Alternative Launch on Netlify
If you prefer Netlify:

1.  **Sign Up**: Go to [Netlify.com](https://www.netlify.com/) and login with GitHub.
2.  **Import**: Click **"Add new site"** → **"Import an existing project"** → **"GitHub."**
3.  **Authorize**: Select your `aurelius-hub` repo.
4.  **Build Settings**:
    - **Build Command**: `npm run build`
    - **Publish Directory**: `dist`
5.  **DEPLOY**: Click **"Deploy aurelius-hub."**

---

## 🛠️ Post-Deployment Tips for Success
- **Custom Domain**: You will get a link like `aurelius-hub.vercel.app`. You can keep this for free!
- **Auto-Updates**: Every time you change a file locally and "Push" to GitHub, your live site will update itself automatically.
- **Environment Variables**: If you eventually add real API keys (MS Graph / SAP), you can securely add them in the "Settings" → "Environment Variables" tab of Vercel/Netlify.

---
> [!TIP]
> **Stand Out Visibility**: Put your live URL in your LinkedIn Profile's "Featured" section with the title: **"Enterprise AI-Ops Control Tower & Guidewire Integration Demo"**.
