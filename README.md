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

Here is why this setup is special.

### 🎨 Visuals & UI

- **Minimalist Interface**: `breadcrumbs.enabled: false` and `workbench.activityBar.location: top` remove clutter, giving you more screen real estate for code.
- **Smooth Animations**: `editor.cursorBlinking: expand` and `editor.cursorSmoothCaretAnimation: on` make typing feel fluid and responsive.
- **Variable Fonts**: Configured to use `Monaspace Neon Var` with specific weights and ligatures for a modern coding experience.

### ⚡ Productivity

- **Auto-Formatting**: `editor.formatOnSave: true` and `editor.codeActionsOnSave` ensure your code is always clean and imports are sorted.
- **Smart Git**: `git.enableSmartCommit` and `git.autofetch` streamline your version control operations.
- **Safe Explorer**: `explorer.confirmDragAndDrop: false` prevents accidental file moves, while `explorer.confirmDelete: true` keeps you safe.

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
