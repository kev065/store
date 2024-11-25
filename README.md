# Modern E-commerce Store

A cutting-edge online storefront leveraging advanced web technologies to deliver a smooth shopping experience, featuring product management, secure payment solutions, and real-time order tracking.

## 🚀 Technologies Used

- **Next.js**: Framework for building server-side rendered React applications and APIs.
- **React**: Library for developing interactive and dynamic user interfaces.
- **TypeScript**: Typed JavaScript to ensure robust and maintainable code.
- **Prisma**: Database ORM for schema management and database operations.
- **Clerk**: Handles user authentication and role-based access control.
- **Stripe**: Embedded checkout and payment processing.
- **Vercel**: Hosting and deployment platform.

## 📑 Key Features

- **Product Management**: Create, edit, or remove products with detailed descriptions and media.
- **Cart & Checkout**: Cart interface with Stripe's secure payment gateway.
- **Order Tracking**: Real-time order confirmation and history page for users.
- **Admin Dashboard**: Manage products, view sales data, and oversee user orders through a dedicated dashboard.
- **Responsive Design**: Optimized for all devices.

## 🔧 Installation & Setup

1. **Clone the repository**:

```bash
git clone git@github.com:kev065/store.git
cd store
```

2. **Install dependencies**:

```bash
npm install
```

3. **Environment variables**: Configure the .env file with the following keys:

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
DATABASE_URL
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_ADMIN_USER_ID
DB_password
DIRECT_URL
ADMIN_USER_ID
SUPABASE_URL
SUPABASE_KEY
```

6. **Start the development server**:

```bash
npm run dev
```

## 📂 Project Structure

- **/app**: Main application directory with API routes and pages.

- **/components**: UI components and forms.

- **/utils**: Utility functions for formatting, database, and API helpers.

- **/prisma**: Prisma schema and migrations.

- **/public**: Static assets and images.
