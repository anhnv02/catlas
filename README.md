# 🐱 Catlas

**Graph-powered code intelligence for AI agents.**

Catlas is a high-performance code analysis engine that transforms complex repositories into structured knowledge graphs. Built for the era of agentic coding, it enables AI agents to understand architecture, reason about dependencies, and navigate codebases with expert-level precision.

---

## 🚀 Key Features

- **Graph-Based Ingestion**: Maps symbols (classes, functions, methods) and their relationships (calls, imports, inheritance) using high-precision Tree-sitter parsers.
- **Community Detection**: Implements the **Leiden Algorithm** to detect functional clusters, helping agents understand how different modules work together beyond directory structures.
- **Hybrid Search**: Combines BM25 keyword search with vector embeddings for deep semantic retrieval of code concepts.
- **Intelligence Synthesis**: Automatically generates AI context files and specialized "skills" for agents like Claude, Gemini, and GPT.
- **Multi-Language Support**: Professional-grade parsing for TypeScript, JavaScript, Python, Go, Rust, Java, C/C++, Ruby, and more.

---

## 📦 Installation

Install globally via npm:

```bash
npm install -g @anhnguyen02/catlas
```

Or run directly using npx:

```bash
npx @anhnguyen02/catlas analyze
```

---

## 🛠 Usage

### Analyze a Repository

Initialize the knowledge engine and build the graph for your current directory:

```bash
catlas analyze
```

### Search the Graph

Find execution flows or concepts using the query tool:

```bash
catlas query "authentication flow"
```

### Deep Context

Get a 360-degree view of any code symbol (callers, callees, and functional neighbors):

```bash
catlas context "validateUser"
```

---

## 🏗 How it Works

Catlas operates in three main phases:

1. **Ingestion**: Parallel parsing of source files into an Abstract Syntax Tree (AST) and extraction of structural symbols.
2. **Structural Mapping**: Building a multi-relational graph of how code interacts across file boundaries.
3. **Intelligence Synthesis**: Running community detection to identify "functional heartbeats" of the codebase and generating metadata for AI consumption.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

Built with ❤️ by [anhnguyen](https://github.com/anhnv02).
