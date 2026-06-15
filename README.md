# 🐙 CargoSync - Full Website + Admin Panel

A clean, professional Next.js website with a contact form that saves leads to a JSON file, plus a full admin panel to manage them.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set your admin password
Copy `.env.example` to `.env.local` and set your password:
```bash
cp .env.example .env.local
```
Edit `.env.local`:
```
ADMIN_PASSWORD=your_secure_password_here
```

### 3. Run the dev server
```bash
npm run dev
```

Visit:
- **Website** → [http://localhost:3000](http://localhost:3000)
- **Admin Panel** → [http://localhost:3000/admin](http://localhost:3000/admin)

Default admin password: `octopus2024` (change this!)

---

## 📁 Project Structure

```
octopus-tech/
├── app/
│   ├── page.tsx              # Main homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # All styles
│   ├── admin/
│   │   ├── page.tsx          # Admin panel (login + dashboard)
│   │   └── layout.tsx
│   └── api/
│       ├── submit-form/
│       │   └── route.ts      # POST: saves lead to JSON file
│       └── admin/
│           ├── leads/
│           │   └── route.ts  # GET: fetch all leads | PATCH: update status
│           └── delete-lead/
│               └── [id]/
│                   └── route.ts  # DELETE: remove a lead
├── components/
│   ├── Navbar.tsx            # Sticky responsive navigation
│   ├── Hero.tsx              # Animated hero with particle canvas
│   ├── Services.tsx          # 6-card services grid
│   ├── About.tsx             # About + Why Us sections
│   ├── ContactForm.tsx       # Contact form with validation
│   └── Footer.tsx            # Full footer
├── data/
│   └── leads.json            # All form submissions stored here
├── .env.local                # Your environment variables (not in git)
└── .env.example              # Template for env vars
```

---

## ✏️ Customise Your Content

### Company Info
Search & replace these across the project:
- `CargoSync` → Your company name
- `+91 98765 43210` → Your phone number
- `hello@octopustech.in` → Your email
- `Baner, Pune, Maharashtra 411045` → Your address

### Colors (in `tailwind.config.ts`)
```ts
"electric-blue": "#1E6FFF",  // Main accent
"navy": "#0A1628",            // Dark background
```

### Services (in `components/Services.tsx`)
Edit the `services` array to match your offerings.

---

## 🔐 Admin Panel Features

- 🔑 Password-protected login
- 📊 Stats: Total, New, Read, Contacted counts
- 🔍 Search by name, email, phone, service
- 📋 Filter by status (All / New / Read / Contacted)
- 👁 Expand lead to see full message + quick actions
- ✉️ One-click reply by email
- 📞 One-click call back
- 🏷 Update lead status (New → Read → Contacted)
- 🗑 Delete leads
- 📤 Export all leads as CSV

---

## 📦 Data Storage

All form submissions are saved to `data/leads.json`. Each lead looks like:

```json
{
  "id": "uuid-here",
  "name": "Rahul Sharma",
  "email": "rahul@company.com",
  "phone": "+91 98765 43210",
  "company": "My Company",
  "service": "Web Development",
  "message": "I need a website...",
  "preferredContact": "callback",
  "status": "new",
  "submittedAt": "2024-01-15T10:30:00.000Z"
}
```

**Backup tip:** The `data/` folder is excluded from git by default. Back it up manually or copy to a safe location regularly.

---

## 🌐 Deploy to Vercel

```bash
npm run build
vercel deploy
```

Set `ADMIN_PASSWORD` as an environment variable in your Vercel project settings.

> ⚠️ **Note for Vercel:** Vercel's serverless functions use ephemeral file systems - the JSON file won't persist between deployments. For production, consider using a simple database like PlanetScale, Supabase, or Airtable. For a small team using the same server, this file-based approach works perfectly.

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom CSS
- **Fonts:** Syne (display) + Inter (body) from Google Fonts
- **Data:** JSON file (no database needed)
- **TypeScript:** Yes

---

Built with ❤️ by CargoSync Team
