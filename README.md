# BrewRoute-v02

BrewRoute is a modern web application designed to enhance your tea journey experience. It provides a seamless and responsive user interface, built with cutting-edge technologies like Next.js, Tailwind CSS, and TypeScript.

## Features

- **Responsive Design**: Built with Tailwind CSS for a mobile-first, responsive design.
- **Reusable Components**: Modular and reusable components for scalability.
- **Blockchain Integration**: Provides traceability and transparency using blockchain technology.
- **Custom Hooks**: Simplify state management and logic with custom React hooks.
- **Static Assets**: Organized public folder for images and other assets.

## Project Structure

```
brewroute-v02/
├── LICENSE
├── README.md
├── brew-route-client/
│   ├── app/                     # Application pages and layouts
│   ├── components/              # Reusable UI components
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions and libraries
│   ├── public/                  # Static assets
│   ├── styles/                  # Additional styles
│   ├── components.json          # Component metadata
│   ├── next.config.mjs          # Next.js configuration
│   ├── package.json             # Project dependencies and scripts
│   ├── pnpm-lock.yaml           # Lockfile for pnpm
│   ├── postcss.config.mjs       # PostCSS configuration
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   └── tsconfig.json            # TypeScript configuration
├── brew-route-smart-contact/    # Smart contracts for blockchain integration
│   ├── Move.toml                # Move package configuration
│   ├── scripts/                 # Deployment and utility scripts
│   ├── sources/                 # Move smart contract source files
│   │   └── brew-route.move      # Main Move module
│   └── tests/                   # Tests for smart contracts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (preferred package manager)
- Rust (for Move smart contract development)
- Aptos CLI (for blockchain interaction)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/brewroute-v02.git
   cd brewroute-v02/brew-route-client
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Setting Up Smart Contracts

1. Navigate to the `brew-route-smart-contact` directory:

   ```bash
   cd brew-route-smart-contact
   ```

2. Install the Aptos CLI:

   ```bash
   cargo install aptos
   ```

3. Initialize the Aptos environment:

   ```bash
   aptos init
   ```

4. Run tests for the Move smart contracts:

   ```bash
   aptos move test
   ```

5. Deploy the smart contracts:

   ```bash
   aptos move publish --profile default
   ```

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **pnpm**: Fast and efficient package manager.
- **Move**: Smart contract language for Aptos blockchain.
- **Aptos CLI**: Command-line interface for interacting with the Aptos blockchain.

## Contributors

We would like to thank the following team members for their contributions to this project:

- Vineet Kumar Mishra
- Sumit Chatterjee
- Utsav Kumar Gupta
- Agnik Das

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.