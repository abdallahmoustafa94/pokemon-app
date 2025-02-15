# Pokemon Directory Application

A React application that fetches and displays Pokemon information using the PokeAPI. Built with modern web technologies and following clean architecture principles.

## 🚀 Features

- Pokemon list with infinite scrolling
- Detailed Pokemon information view
- Persistent data caching with RTK Query
- Responsive design
- 60%+ test coverage
- Atomic Design Pattern

## 🛠️ Tech Stack

- React 19
- TypeScript
- Redux Toolkit & RTK Query
- Vite
- Vitest & Testing Library
- CSS Modules

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/abdallahmoustafa94/pokemon-app.git
cd pokemon-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add:

```bash
VITE_API_BASE_URL=https://pokeapi.co/api/v2
```

## 🚀 Running the Application

Development mode:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## 🧪 Testing

Run tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

## 📁 Project Structure

```
src/
├── components/          # Component files
│   ├── atoms/          # Basic UI components
│   ├── molecules/      # Composite components
│   ├── organisms/      # Complex components
│   ├── templates/      # Page layouts
│   └── __tests__/      # Test files
├── store/              # Redux store setup
├── types/              # TypeScript types
└── styles/             # CSS files
```

## 🔧 Configuration

The application can be configured through environment variables:

- `VITE_API_BASE_URL`: Base URL for the Pokemon API

## 📝 Testing Strategy

The application includes:

- Unit tests for components
- Integration tests for API calls
- Snapshot tests for UI consistency
- Mock service worker for API testing

Current test coverage is maintained above 60% to ensure code reliability.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Abdallah Moustafa

- GitHub: [@abdallahmoustafa94](https://github.com/abdallahmoustafa94)
