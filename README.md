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

## 🚀 Quick Setup (3 Minutes)

Follow these steps to transform your VS Code instantly.

### 1. Clone the Repository

```bash
git clone https://github.com/antoniofuscaldo/vscode-setup.git
cd vscode-setup
```

### 2. Install Prerequisites

- **Fonts**: Download and install the **[Monaspace](https://monaspace.githubnext.com/)** font family.
- **VS Code CLI**: Ensure the `code` command is installed (`Cmd+Shift+P` > `Shell Command: Install 'code' command in PATH`).

### 3. Install Extensions

If you have an `extensions.txt` file (or create one), install all plugins at once:

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
cp .vscode/settings.json "$HOME/Library/Application Support/Code/User/settings.json"
cp .vscode/custom.code-snippets "$HOME/Library/Application Support/Code/User/snippets/custom.code-snippets"
```

> **Note:** This will overwrite your existing `settings.json`. Make a backup if necessary!

---

## 🛠️ Configuration Deep Dive

Below is a detailed explanation of the important, non-default choices present in `.vscode/settings.json` and why I set them.

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
├── .vscode/
│   ├── settings.json          # Main VS Code configuration
│   └── custom.code-snippets   # Global code snippets
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
Visual Studio Code, VS Code, and the Visual Studio Code icon are trademarks of Microsoft Corporation. All rights reserved.
</sub>
