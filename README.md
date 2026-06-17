# LinkDrop

A modern link management platform built with Next.js where users can create, manage, and organize their personal links.

LinkDrop allows users to create their own profile-style link collection, manage links, and track basic engagement metrics.

---

## 🚀 Features

- 🔐 User authentication with Clerk
- 👤 User profiles
- 🔗 Create and manage links
- 📌 Organize links with custom ordering
- 👁️ Enable / disable links
- 📊 Track link click counts
- 🗄️ Persistent storage with PostgreSQL + Prisma

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Backend
- Next.js App Router
- API Routes
- Prisma ORM

### Authentication
- Clerk

### Database
- PostgreSQL

---

## 📂 Project Structure

```
LinkDrop/
│
├── app/
│   ├── api/
│   │   └── user/
│   │
│   ├── generated/
│   │   └── prisma/
│   │
│   └── pages/components
│
├── lib/
│   └── prisma.ts
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

Clone the repository:

```bash
git clone https://github.com/pushAbhi/LinkDrop.git
```

Enter the project:

```bash
cd LinkDrop
```

Install dependencies:

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

---

## 🗄️ Database Setup

Generate Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

---

## ▶️ Development

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📦 Available Scripts

```bash
npm run dev
```
Starts development server.


```bash
npm run build
```
Creates production build.


```bash
npm run start
```
Starts production server.


```bash
npm run lint
```
Runs ESLint checks.

---

## 🧩 Database Models

### User

Stores user profile information:

- Email
- Username
- Display name
- Bio
- Clerk user ID

### Link

Stores user links:

- Title
- URL
- Enabled status
- Click count
- Display order

---

## 🛣️ Future Improvements

- Custom public profile pages
- Analytics dashboard
- Link previews
- QR code generation
- Themes/customization
- Social media integrations
- Custom domains

---

## 📄 License

MIT License

---

## ⭐ Support

If you like this project, consider starring the repository.
