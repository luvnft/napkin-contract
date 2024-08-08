import '@/shared/style/globals.css';

import { ReactNode } from 'react';
import { ThirdwebProvider } from 'thirdweb/react';

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
        <div className="w-full h-full sm:w-96 sm:h-[700px] bg-white sm:rounded-2xl flex flex-col justify-start items-center">
          <ThirdwebProvider>{children}</ThirdwebProvider>
        </div>
      </body>
    </html>
  );
}
