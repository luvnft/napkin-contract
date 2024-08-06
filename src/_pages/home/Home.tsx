import { ConnectButton } from "thirdweb/react";

import { client } from "@/shared/const";
import { Header } from "@/widgets";

export const Home = () => (
  <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
    <div className="py-20">
      <Header />

      <div className="flex justify-center mb-20">
        <ConnectButton
          client={client}
          appMetadata={{
            name: "Example App",
            url: "https://example.com",
          }}
        />
      </div>
    </div>
  </main>
);