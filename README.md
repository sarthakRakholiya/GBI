# Precision Bearings Web Application

A modern web application for Precision Bearings, featuring optimized image handling and responsive design.

## Features

- Optimized image loading with fallback support
- Responsive design
- Modern UI components
- TypeScript support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd precision-bearings-web-main
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
precision-bearings-web-main/
├── src/
│   ├── components/
│   │   └── ui/
│   │       └── OptimizedImage.tsx
│   └── ...
├── public/
└── ...
```

## Components

### OptimizedImage

A reusable image component that provides:

- Automatic image optimization
- Fallback image support
- Lazy loading (with priority option)
- Error handling
- TypeScript support

Usage:

```tsx
import OptimizedImage from "@/components/ui/OptimizedImage";

<OptimizedImage
  src="your-image-url"
  alt="Image description"
  width={800}
  height={600}
  priority={false}
/>;
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
