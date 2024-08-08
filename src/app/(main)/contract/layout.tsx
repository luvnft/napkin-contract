import '@/shared/style/globals.css';

import { ReactNode } from 'react';
import { ThirdwebProvider } from 'thirdweb/react';

import { Header } from '@/widgets';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Napkin Contract',
  description: 'Greatest app for signing contracts in blockchain world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col gap-3 items-center justify-center h-screen w-screen">
        <div className="w-96 h-[700px] bg-white rounded-2xl flex flex-col justify-start items-center">
          <Header />

          <ThirdwebProvider>{children}</ThirdwebProvider>
        </div>
      </body>
    </html>
  );
}
