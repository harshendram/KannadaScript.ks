# 🚀 KannadaScript

**KannadaScript** is a modern programming language with Kannada-inspired keywords, built with TypeScript. Write code using familiar Kannada terms while leveraging the power of a robust parser and interpreter.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ Features

- 🌐 **Kannada-inspired syntax** - Write code using familiar Kannada keywords
- 🔧 **Modern TypeScript implementation** - Built with TypeScript for type safety
- 🎯 **Complete language support** - Variables, conditionals, loops, functions, arrays, and objects
- 🖥️ **Interactive playground** - Test your code in a web-based editor
- 📚 **Comprehensive documentation** - Learn with examples and tutorials

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kannada-script.git
   cd kannada-script
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Install CLI globally (optional)**
   ```bash
   npm install -g kannada-script
   ```

### Running Your First Program

1. **Create a KannadaScript file** (`hello.kl`)
   ```kannadascript
   namaskara
       helu "Hello, World!";
   matte sigona
   ```

2. **Run the program**
   ```bash
   # If installed globally
   kannadascript hello.kl
   
   # Or using npx
   npx kannada-script hello.kl
   ```

## 📖 Language Syntax

### Program Structure
Every KannadaScript program starts with `namaskara` and ends with `matte sigona`:

```kannadascript
namaskara
    // Your code here
matte sigona
```

### Variables
Declare variables using `idu`:

```kannadascript
namaskara
    idu name = "Harsh";
    idu age = 25;
    idu isStudent = sari;  // true
    idu score = khali;     // null
matte sigona
```

### Output
Use `helu` to print to console:

```kannadascript
namaskara
    idu message = "Welcome to KannadaScript!";
    helu message;
    helu "Age:", 25;
matte sigona
```

### Conditionals
Use `enadru` (if), `illa andre` (else if/else):

```kannadascript
namaskara
    idu score = 85;
    
    enadru (score >= 90) {
        helu "Excellent! Grade A";
    } illa andre (score >= 75) {
        helu "Good job! Grade B";
    } illa andre {
        helu "Keep trying! Grade C";
    }
matte sigona
```

### Loops
Use `ellivargu` for while loops:

```kannadascript
namaskara
    idu counter = 1;
    
    ellivargu (counter <= 5) {
        helu "Count:", counter;
        counter = counter + 1;
    }
matte sigona
```

### Arrays
Use `saalu()` for arrays:

```kannadascript
namaskara
    idu numbers = saalu(1, 2, 3, 4, 5);
    idu fruits = saalu("apple", "banana", "orange");
    
    helu numbers;
    helu fruits;
matte sigona
```

### Objects
Use `dict()` for dictionaries/objects:

```kannadascript
namaskara
    idu person = dict("name": "Harsh", "age": 25, "city": "Bangalore");
    
    helu person;
    helu "Name:", person["name"];
matte sigona
```

### Functions
Use `karya` to define functions and `vapasu` to return:

```kannadascript
namaskara
    karya calculateSum(a, b) {
        idu result = a + b;
        vapasu result;
    }
    
    idu sum = calculateSum(10, 20);
    helu "Sum:", sum;
matte sigona
```

## 🛠️ Development

### Project Structure

```
kannada-script/
├── packages/
│   ├── parser/          # Language parser
│   ├── interpreter/     # Code interpreter
│   ├── cli/            # Command-line interface
│   └── config/         # Shared configurations
├── apps/
│   └── docs/           # Documentation website
└── README.md
```

### Building from Source

1. **Clone and setup**
   ```bash
   git clone https://github.com/yourusername/kannada-script.git
   cd kannada-script
   npm install
   ```

2. **Build all packages**
   ```bash
   npm run build
   ```

3. **Run tests**
   ```bash
   npm test
   ```

4. **Start development server (docs)**
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run build` - Build all packages
- `npm run dev` - Start development server
- `npm test` - Run all tests
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build artifacts

## 🌐 Try Online

Visit our [online playground](https://kannadascript.netlify.app) to try KannadaScript in your browser without any installation.

## 📚 Documentation

For comprehensive documentation, examples, and tutorials, visit:
- [Language Reference](https://kannadascript.netlify.app/docs)
- [Examples](https://kannadascript.netlify.app/examples)
- [API Documentation](https://kannadascript.netlify.app/api)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by regional programming languages
- Built with modern TypeScript and Node.js ecosystem
- Community-driven development

---

**Happy coding with KannadaScript! 🎉**

For questions or support, please open an issue on GitHub.