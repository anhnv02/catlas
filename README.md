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

## 🛠 CLI Reference

| Command | Description |
|---------|-------------|
| `analyze` | Initialize or rebuild the knowledge graph for a repository. |
| `list` | Enumerate all registered repositories and their stats. |
| `status` | Retrieve index health for the current repository context. |
| `query` | Search execution flows via concept-based semantic lookup. |
| `context` | 360-degree symbol inspection: call graph and flow participation. |
| `impact` | Blast radius analysis: transitively map structural dependants. |
| `cypher` | Execute raw Cypher against the underlying knowledge graph. |
| `ui` | Start local web UI dashboard for code intelligence overview. |
| `eval-server` | Start persistence daemon for low-latency tool access. |
| `clean` | Purge Catlas index and registry state. |

### 🧩 MCP Tools Reference

When connected via Model Context Protocol, Catlas exposes these tools to AI agents:

| Tool | Purpose |
|------|---------|
| `list_repos` | List all indexed repositories available for analysis. |
| `query` | Concept-based semantic search for execution flows. |
| `context` | 360-degree view of a single code symbol (callers, callees). |
| `impact` | Analyze the blast radius of changing a code symbol. |
| `detect_changes` | Trace the impact of uncommitted git changes on execution flows. |
| `rename` | Multi-file coordinated symbol rename via the knowledge graph. |
| `route_map` | Map API routes to frontend components and backend handlers. |
| `tool_map` | Inspect MCP/RPC tool definitions and their handlers. |
| `shape_check` | Validate API response shapes against their consumers. |
| `api_impact` | Risk assessment for changing an API endpoint. |

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
