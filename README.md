<p align="center">
  <img src="assets/vscode.png" alt="VS Code Setup" width="150" />
</p>

# 🎨 Ultimate VS Code Setup

> **A highly opinionated, aesthetic, and productivity-focused configuration for Visual Studio Code.**

This repository contains a complete configuration to replicate a modern, clean, and efficient development environment. It focuses on a pastel aesthetic (Catppuccin), modern typography (Monaspace), and a frictionless workflow.

---

## ✨ Features at a Glance

| Category     | Choice                                                                              | Description                                        |
| :----------- | :---------------------------------------------------------------------------------- | :------------------------------------------------- |
| **Theme**    | 🐱 [Catppuccin Mocha](https://github.com/catppuccin/vscode)                         | A soothing, high-contrast pastel theme.            |
| **Icons**    | 📁 [Catppuccin Icons](https://github.com/catppuccin/vscode-icons)                   | Matching icons for a cohesive look.                |
| **Font**     | 🔤 [Monaspace Neon](https://monaspace.githubnext.com/)                              | A texture-healing variable font from GitHub Next.  |
| **Terminal** | 🖥️ [MesloLGS NF](https://github.com/romkatv/powerlevel10k#manual-font-installation) | Perfect for glyph-heavy shells like Powerlevel10k. |

---

## � Gallery

<p align="center">
  <img src="assets/screenshot-1.png" alt="VS Code Screenshot 1" width="50%" />
  <img src="assets/screenshot-2.png" alt="VS Code Screenshot 2" width="50%" />
</p>

---

## 🚀 Quick Setup (3 Minutes)

### 👤 Option A: Use a VS Code Profile (Recommended)

VS Code Profiles allow you to have a dedicated environment for this setup without affecting your default configuration.

1.  **Create a Profile**:
    - Click the **Manage** gear icon ⚙️ (bottom left) > **Profiles** > **Create Profile...**
    - Select **Create an Empty Profile**.
    - Name it `Ultimate Setup` (or any name you prefer).
    - Click **Create**.
2.  **Open Profile Settings**:
    - Open the Command Palette (`Cmd+Shift+P`).
    - Type **"Preferences: Open User Settings (JSON)"** and select it.
3.  **Apply Configuration**:
    - Copy the content of [`src/.vscode/settings.json`](src/.vscode/settings.json) from this repo.
    - Paste it into the `settings.json` file you just opened in VS Code.
    - Save the file.
4.  **Install Extensions**:
    - VS Code will recommend extensions when you open this folder. Accept the recommendations to install them into this profile.

---

### 🛠️ Option B: Global Setup (Manual)

If you prefer to apply this configuration globally to your default profile, follow these steps.

### 1. Clone the Repository

```bash
git clone https://github.com/antoniofuscaldo/vscode-setup.git
cd vscode-setup
```

### 2. Install Prerequisites

- **Fonts**: Download and install the **[Monaspace](https://monaspace.githubnext.com/)** font family.
- **VS Code CLI**: Ensure the `code` command is installed (`Cmd+Shift+P` > `Shell Command: Install 'code' command in PATH`).

### 3. Install Extensions

VS Code will automatically recommend extensions when you open this folder, thanks to `.vscode/extensions.json`.

Alternatively, if you want to install them via command line using the legacy list:

```bash
xargs -L 1 code --install-extension < extensions.txt
```

### 4. Apply Settings

Copy the configuration files to your VS Code User directory.

**MacOS:**

```bash
# Create the directory if it doesn't exist
mkdir -p "$HOME/Library/Application Support/Code/User"

# Copy settings and snippets
cp src/.vscode/settings.json "$HOME/Library/Application Support/Code/User/settings.json"
cp src/.vscode/custom.code-snippets "$HOME/Library/Application Support/Code/User/snippets/custom.code-snippets"
```

> **Note:** This will overwrite your existing `settings.json`. Make a backup if necessary!

---

## 🛠️ Configuration Deep Dive

Below is a detailed explanation of the important, non-default choices present in `src/.vscode/settings.json` and why I set them.

### 🖥️ UI & Appearance

- **Startup**: `workbench.startupEditor: none` — Skips the welcome page for a faster launch.
- **Theme**: `workbench.iconTheme: catppuccin-mocha` & `workbench.colorTheme: Catppuccin Mocha` — The core of the pastel aesthetic.
- **Layout**: `workbench.activityBar.location: top` — Moves the activity bar to the top for a compact, vertical-space-saving layout.
- **Terminal**: `workbench.colorCustomizations.terminalCursor.foreground` — Custom cursor color to match the theme perfectly.
- **Explorer**:
  - `breadcrumbs.enabled: false` — Hides breadcrumbs to reduce header clutter.
  - `explorer.confirmDelete: true` — Safety first: confirm before deleting files.
  - `explorer.confirmDragAndDrop: false` — Prevents accidental drag-and-drop file moves.

### ✍️ Editor Typography & Behavior

- **Font**: `Monaspace Neon Var` (Size 14, Weight 400, Line Height 1.6) — Tuned for maximum readability.
- **Ligatures**: `editor.fontLigatures` & `editor.fontVariations` — Enables advanced variable font features and ligatures.
- **Animations**: `editor.cursorBlinking: expand` & `editor.cursorSmoothCaretAnimation: on` — A smooth, modern typing experience.
- **Navigation**: `editor.smoothScrolling` & `editor.mouseWheelZoom` — Fluid scrolling and pinch-to-zoom support.
- **Editing**:
  - `editor.linkedEditing: true` — Edit paired HTML tags simultaneously.
  - `editor.wordWrap: on` — No horizontal scrolling.
  - `editor.tabSize: 2` — Standard 2-space indentation.

### 🧹 Formatting & Linting

- **Default Formatter**: `esbenp.prettier-vscode` — Prettier handles all formatting.
- **Automation**: `editor.formatOnPaste`, `formatOnType`, `formatOnSave: true` — Keeps code consistent automatically.
- **Auto-Fix**: `editor.codeActionsOnSave` — Runs `source.fixAll.eslint` and `source.sortImports` on every save.

### 💾 Files & Terminal

- **Auto-Save**: `files.autoSave: onFocusChange` — Saves changes whenever you switch windows or tabs.
- **Terminal Font**: `terminal.integrated.fontFamily: MesloLGS NF` — Ensures powerline glyphs render correctly.
- **Links**: `terminal.integrated.allowedLinkSchemes` — Allows clicking `file`, `http`, `https` links directly in the terminal.

### 🌳 Git & Version Control

- **Workflow**: `git.enableSmartCommit`, `git.autofetch`, `git.confirmSync: false` — A faster, less intrusive Git experience.
- **GitLens**: Pre-configured AI model settings for users of GitLens features.

### 🤖 AI & Copilot

- **Copilot**: `github.copilot.enable: false` — Disabled by default (enable if you use it).
- **Other Assistants**: Configurations for `geminicodeassist` and `cody` are included for those who use them.

### ⚡ Performance & Extras

- **Diff Editor**: `diffEditor.codeLens: true` — Enhanced diff viewing.
- **Code Runner**: `code-runner.executorMap` — Custom commands to run code snippets quickly for various languages.
- **Python**: `python.defaultInterpreterPath` — Set to `/usr/local/bin/python3` (adjust path as needed).

---

## 📦 Extensions

This setup comes with a curated list of extensions to supercharge your development workflow.

### 🎨 Theming & UI

- **[Catppuccin Theme](https://marketplace.visualstudio.com/items?itemName=catppuccin.catppuccin-vsc)** (`catppuccin.catppuccin-vsc`): Soothing pastel theme for VS Code.
- **[Catppuccin Icons](https://marketplace.visualstudio.com/items?itemName=catppuccin.catppuccin-vsc-icons)** (`catppuccin.catppuccin-vsc-icons`): Matching icons for a cohesive look.
- **[Dracula Theme](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)** (`dracula-theme.theme-dracula`): A dark theme for many editors, shells, and more.
- **[Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=pkief.material-icon-theme)** (`pkief.material-icon-theme`): Material Design Icons.

### 🌐 Web Development

- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)** (`bradlc.vscode-tailwindcss`): Intelligent Tailwind CSS tooling.
- **[PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)** (`csstools.postcss`): Syntax highlighting for PostCSS.
- **[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** (`esbenp.prettier-vscode`): Code formatter using Prettier.
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** (`dbaeumer.vscode-eslint`): Integrates ESLint into VS Code.
- **[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)** (`formulahendry.auto-rename-tag`): Auto rename paired HTML/XML tag.
- **[Bootstrap 4 & 5 IntelliSense](https://marketplace.visualstudio.com/items?itemName=hossaini.bootstrap-intellisense)** (`hossaini.bootstrap-intellisense`): Bootstrap 4 & 5 autocomplete.
- **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.liveserver)** (`ritwickdey.liveserver`): Launch a local development server with live reload.
- **[Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)** (`wix.vscode-import-cost`): Display import size of the package.
- **[JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.javascriptsnippets)** (`xabikos.javascriptsnippets`): JavaScript snippets (ES6).
- **[MDX](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)** (`unifiedjs.vscode-mdx`): MDX language support.
- **[Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)** (`astro-build.astro-vscode`): Language support for Astro.
- **[TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)** (`ms-vscode.vscode-typescript-next`): TypeScript Nightly build.

### 🐍 Python

- **[Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)** (`ms-python.python`): Python language support.
- **[Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)** (`ms-python.vscode-pylance`): Performant Python language server.
- **[debugpy](https://marketplace.visualstudio.com/items?itemName=ms-python.debugpy)** (`ms-python.debugpy`): Python debugger.
- **[Python Environment Manager](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-python-envs)** (`ms-python.vscode-python-envs`): Python environment manager.

### ☕ Java

- **[Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)** (`redhat.java`): Java language support.
- **[Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)** (`vscjava.vscode-java-pack`): Java Extension Pack.
- **[Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)** (`vscjava.vscode-maven`): Maven support.
- **[Gradle for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle)** (`vscjava.vscode-gradle`): Gradle extension.
- **[Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)** (`vscjava.vscode-java-debug`): Java debugger.
- **[Test Runner for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)** (`vscjava.vscode-java-test`): Java Test Runner.
- **[Project Manager for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)** (`vscjava.vscode-java-dependency`): Java dependency viewer.
- **[Migrate to Azure](https://marketplace.visualstudio.com/items?itemName=vscjava.migrate-java-to-azure)** (`vscjava.migrate-java-to-azure`): Migration tools for Java to Azure.

### 🤖 AI & Productivity

- **[GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=github.copilot)** (`github.copilot`): AI pair programmer.
- **[GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=github.copilot-chat)** (`github.copilot-chat`): AI chat interface for GitHub Copilot.
- **[Gemini Code Assist](https://marketplace.visualstudio.com/items?itemName=google.geminicodeassist)** (`google.geminicodeassist`): AI code assistance from Google.
- **[Mintlify Doc Writer](https://marketplace.visualstudio.com/items?itemName=mintlify.document)** (`mintlify.document`): AI documentation generator.
- **[Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)** (`aaron-bond.better-comments`): Improve your code commenting.
- **[ErrorLens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)** (`usernamehw.errorlens`): Improve highlighting of errors and warnings.
- **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)** (`eamodio.gitlens`): Supercharge Git within VS Code.
- **[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)** (`formulahendry.code-runner`): Run code snippet or code file.
- **[CodeTime](https://marketplace.visualstudio.com/items?itemName=jannchie.codetime)** (`jannchie.codetime`): Time tracking and metrics.
- **[Dash](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-dash)** (`deerawan.vscode-dash`): Dash, Zeal, and Velocity documentation integration.

### 📝 Markdown & Docs

- **[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)** (`yzhang.markdown-all-in-one`): All you need for Markdown.
- **[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)** (`shd101wyy.markdown-preview-enhanced`): Markdown preview with math, diagrams, etc.

### ☁️ Remote & DevOps

- **[Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)** (`ms-vscode-remote.remote-ssh`): Open any folder on a remote machine using SSH.
- **[Remote Explorer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer)** (`ms-vscode.remote-explorer`): View remote machines.
- **[GitHub Actions](https://marketplace.visualstudio.com/items?itemName=github.vscode-github-actions)** (`github.vscode-github-actions`): GitHub Actions workflows management.
- **[GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=github.vscode-pull-request-github)** (`github.vscode-pull-request-github`): Pull Request and Issue provider for GitHub.

### 🔧 Utilities

- **[Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)** (`mechatroner.rainbow-csv`): Highlight CSV and TSV files.

---

## 🧩 Included Snippets

This setup includes a `custom.code-snippets` file packed with productivity boosters, especially for HTML/Frontend work:

- `h-menu-header`: Generates a fully responsive header with a hamburger menu.
- `h-cover`: Creates a hero section with a background image gradient.
- `h-card`: Inserts a styled card component with image and text.
- `h-box`: A simple content box container.

---

## 📂 Repository Structure

```text
.
├── src/
│   └── .vscode/
│       ├── settings.json          # Main VS Code configuration
│       └── custom.code-snippets   # Global code snippets
├── assets/
│   └── vscode.png             # Project Icon
├── README.md                  # Documentation
└── (Optional) extensions.txt  # List of installed extensions
```

---

## 🔗 Credits & Resources

- [Catppuccin Theme](https://github.com/catppuccin/vscode)
- [Monaspace Font](https://monaspace.githubnext.com/)
- [VS Code Documentation](https://code.visualstudio.com/docs)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/antoniofuscaldo">Antonio Fuscaldo</a>
</p>

---

<sub align="center" style="font-size: 10px; color: gray;">
<em>Visual Studio Code, VS Code, and the Visual Studio Code icon are trademarks of Microsoft Corporation. All rights reserved.</em>
</sub>
