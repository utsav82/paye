### Paye

Paye is a web application that allows users to track their expenses, split bills with friends, and manage their financial activities efficiently. Built using modern web technologies, Paye leverages Next.js for the frontend, Shadcn UI for styling, and Supabase for backend services including database management and user authentication.

![image](https://github.com/utsav82/paye/assets/92868052/d9dd0956-40a6-4265-b6ae-33476a8d6d17)

![image](https://github.com/utsav82/paye/assets/92868052/4510d400-c5d8-46f1-8c96-383c2ce3f797)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [Supabase Account](https://supabase.io/)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/paye.git
   cd paye
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Supabase**
   - Go to the [Supabase Dashboard](https://app.supabase.io/).
   - Create a new project and obtain the `API URL` and `Anon Key`.
   - Create the necessary tables (`expenses`, `shares`, `users`, etc.) as per the schema provided earlier.

4. **Environment Variables**
   - Create a `.env.local` file in the root directory and add your Supabase credentials:
     ```bash
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Core Features

### 1. User Authentication

Paye uses Supabase for user authentication. Users can sign up, log in, and log out.

### 2. Expense Tracking

Users can create and manage their expenses. Each expense includes a title, amount, description, category, and date.

### 3. Bill Splitting

Users can split expenses with friends. Each friend's share is recorded, and the status of each share can be tracked (e.g., pending, paid).

### 4. Notifications

Users receive notifications when someone marks their share as paid. The notification system allows users to accept or reject the payment status.


Feel free to customize the project and add more features as needed. Happy coding!
