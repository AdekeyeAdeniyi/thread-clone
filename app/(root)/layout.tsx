import { ClerkProvider } from '@clerk/nextjs';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Bottombar from '@/components/shared/Bottombar';
import Rightsidebar from '@/components/shared/Rightsidebar';
import Leftsidebar from '@/components/shared/Leftsidebar';
import Topbar from '@/components/shared/Topbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Threads-Clone',
  description: 'A Next.js 13 Meta Thread Application',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />
          <main className="flex">
            <Leftsidebar />
            <section className="main-container">
              <div className="w-full mx-w-4xl">{children}</div>
            </section>
            <Rightsidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
