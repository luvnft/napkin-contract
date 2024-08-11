
# Napkin Contract

[Superhack 2024 project](https://ethglobal.com/showcase/napkin-contract-s7p5q) — a simple web tool for creating on-chain attestations for in-person agreements

## Concept

The project idea is based on a well-known term that describes an informal agreement or contract which is written on a napkin or any other informal medium. It is usually signed in places that aren't the most suited for paperwork, like in a car, a bar, or at a sports stadium.

Such agreement terms are usually either silly or very simple for both parties to invest too much time into sealing the agreement properly. But if the minimal required precautions aren't taken to properly formalize the agreement, it won't have any power, which may become dramatically unfortunate in some cases. And if nobody except the signees is able to verify the agreement, it's too tempting to cancel it by "accidentally" losing the physical medium.

So this is where our project steps in. We're extending the "napkin contract" concept into web3 by providing a simple web interface for users who might not even used blockchain before and demonstrate how seamless this experience could be built using the top-notch web3 concepts like Account Abstraction and Gasless Payments.

The mobile-first UI allows users to easily create short in-person agreements that require just a common smartphone and a decent internet connection.

## Nerds corner

We've built the application using Next.js framework with the Thirdweb inAppWallet widget integrated on the frontend to support Account Abstraction & Gasless Payments to the end users.

The agreement is recorded on-chain as EAS attestations with a custom schemas:

Contract: `0x934c0be2e6f54b546817f240b9d40073e6357b61c8738cc89bb8752f38b6f9b1`
Signatory: `0x7288cf58ee5591888d6663ec14d483294690d44faf0da12101fee8cbf9edf7aa`
The application utilizes Base Sepolia blockchain to interact with EAS schemas & attestations.

### Installation

The project is based on starter template to build an onchain react native app with [thirdweb](https://thirdweb.com/) and [next](https://nextjs.org/).

Install the template using [thirdweb create](https://portal.thirdweb.com/cli/create)

```bash
  npx thirdweb create app --next
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

```
NEXT_PUBLIC_TEMPLATE_CLIENT_ID=<thirdweb Client ID>
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_EAS_CONTRACT_ADDRESS=0x4200000000000000000000000000000000000021
NEXT_PUBLIC_CONTRACT_SCHEMA_ID=0x934c0be2e6f54b546817f240b9d40073e6357b61c8738cc89bb8752f38b6f9b1
NEXT_PUBLIC_SIGNATORY_SCHEMA_ID=0x7288cf58ee5591888d6663ec14d483294690d44faf0da12101fee8cbf9edf7aa
```

To learn how to create a client ID, refer to the [client documentation](https://portal.thirdweb.com/typescript/v5/client). 

### Run locally

Install dependencies

```bash
yarn
```

Start development server

```bash
yarn dev
```

Create a production build

```bash
yarn build
```

Preview the production build

```bash
yarn start
```
