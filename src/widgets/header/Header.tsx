import Image from "next/image";

import thirdwebIcon from "@public/thirdweb.svg";

export const Header = () => {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={thirdwebIcon}
        alt=""
        className="size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        <span className="text-zinc-300 inline-block mx-1">Napkin Contract</span>
      </h1>
    </header>
  );
};
