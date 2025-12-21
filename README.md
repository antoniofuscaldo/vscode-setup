# Complete Visual Studio Code aesthetic & functional setup

This repository contains my Visual Studio Code configuration so anyone can replicate my exact aesthetic and core functional preferences. It focuses on theme, icons, fonts, editor settings, recommended extensions, and step-by-step install instructions.

## What this repo contains

- `.vscode/settings.json` — my full VS Code settings (visual + functional). Place this file into your User settings to apply the configuration.
- (optional) `extensions.txt` — a list of extensions to install (not included yet). See instructions below to generate and use it.
- `README.md` — this documentation (you're reading it).

## Visuals used

- Theme: Catppuccin (Catppuccin Mocha) — https://github.com/catppuccin/vscode
- Icons: Catppuccin icons — https://github.com/catppuccin/vscode-icons
- Font: Monaspace Neon Var — https://monaspace.githubnext.com/

## Quick setup (3 minutes)

1. Clone the repo:

```bash
git clone https://github.com/antoniofuscaldo/vscode-setup.git
cd vscode-setup
```

2. Install the fonts (Monaspace). On macOS you can double-click the font files and press "Install". If you have a packaged installer or `brew` tap for the font, use that.

3. Install VS Code CLI (if not already): open VS Code -> Command Palette -> "Shell Command: Install 'code' command in PATH".

4. Install extensions (if you created or received an `extensions.txt`):

```bash
# install all extensions listed in extensions.txt
xargs -L 1 code --install-extension < extensions.txt
```

5. Apply settings (copy the provided file into your User settings):

```bash
# macOS path for VS Code user settings
mkdir -p "$HOME/Library/Application Support/Code/User"
cp .vscode/settings.json "$HOME/Library/Application Support/Code/User/settings.json"
```

6. (Optional) Copy `keybindings.json` and `snippets/` into the same User folder if you maintain them.

7. Restart VS Code.

Notes: you can also use VS Code Settings Sync (built-in) to sync settings across machines. This repo is a manual alternative and backup.

## Detailed explanation of the settings I configured

Below is a concise explanation of the important, non-default choices present in `.vscode/settings.json` and why I set them.

- `workbench.startupEditor: none` — Do not open the welcome or start page on launch.
- `workbench.iconTheme: catppuccin-mocha` and `workbench.colorTheme: Catppuccin Mocha` — theme + icon set that give the pastel aesthetic.
- `workbench.activityBar.location: top` — activity bar placed at the top for a compact vertical layout.
- `workbench.colorCustomizations.terminalCursor.foreground` — custom terminal cursor color to match the theme.

- Explorer & UI tweaks:

  - `breadcrumbs.enabled: false` — hide breadcrumbs to reduce header clutter.
  - `explorer.confirmDelete: true` and `explorer.confirmDragAndDrop: false` — safe delete enabled, drag confirmation off.

- Editor typography & behavior:

  - `editor.fontFamily: Monaspace Neon Var`, `editor.fontWeight: 400`, `editor.fontSize: 14`, `editor.lineHeight: 1.6` — font and spacing tuned for readability and the chosen variable font.
  - `editor.fontVariations`, `editor.allowVariableFonts`: enable variable-font features.
  - `editor.fontLigatures`: custom ligature features enabled.
  - `editor.cursorBlinking: expand` and `editor.cursorSmoothCaretAnimation: on` — a smooth, modern caret animation.
  - `editor.smoothScrolling`, `editor.mouseWheelZoom` — smooth navigation and pinch/zoom support.
  - `editor.linkedEditing: true` — editing paired tags/identifiers simultaneously.
  - `editor.wordWrap: on` and `editor.tabSize: 2` — line wrapping and tab width preference.

- Formatting & linting:

  - `editor.defaultFormatter: esbenp.prettier-vscode` — Prettier is used as default formatter.
  - `editor.formatOnPaste`, `formatOnType`, `formatOnSave: true` — automatic formatting for consistent code style.
  - `editor.codeActionsOnSave`: runs `source.fixAll.eslint` and `source.sortImports` on save — auto-fix and import sorting.

- Files & terminal:

  - `files.autoSave: onFocusChange` — auto-save when switching away from an editor.
  - `terminal.integrated.fontFamily: MesloLGS NF` — terminal font selection for glyph friendliness.
  - `terminal.integrated.allowedLinkSchemes` — allow clicking of `file`, `http`, `https`, etc.

- Git & GitLens:

  - `git.enableSmartCommit`, `git.autofetch`, `git.confirmSync: false` — faster, less intrusive git workflow.
  - `gitlens.ai.model` and `gitlens.ai.vscode.model` — GitLens AI models configured (if you use GitLens features).

- AI / copilots:

  - `github.copilot.enable` set to false for all kinds — Copilot disabled by default in this setup.
  - `geminicodeassist`, `cody.suggestions.mode`: tweak inline AI/autocomplete behavior (non-defaults present).

- Language-specific formatters:

  - `[java]` and `[astro]` blocks set language-specific `editor.defaultFormatter` values.

- Diff, performance & code-runner:

  - `diffEditor.codeLens: true` and `editor.largeFileOptimizations: false` — diff enhancements and explicit large-file handling.
  - `code-runner.executorMap` — custom run commands for many languages (useful for quick-run snippets from the editor).

- Python interpreter:
  - `python.defaultInterpreterPath: /usr/local/bin/python3` — preferred python binary (adjust per machine if needed).

If you want, I can produce a human-readable extract of only the keys you changed compared to defaults.

## About window layout and exact UI placement

VS Code does not provide a reliable export/import of precise window positions and panel placements across different machines and OSes. What you can do to preserve workspace-level settings:

- Use a `.code-workspace` file: "File → Save Workspace As...". Add that file to the repo — it preserves folders, some workspace-specific settings, and extensions recommendations.
- Recommend documenting the desired layout (panels, terminal position) in this README, or include a screenshot.
- Extensions exist that help manage view layouts — consider adding one if you want automated window placement, but portability is limited.

## Recommended workflow to keep this repo as a portable backup

1. Keep `.vscode/settings.json` up to date with any UI or editor preference changes.
2. Maintain an `extensions.txt` produced by `code --list-extensions > extensions.txt` and commit it.
3. If you rely on keybindings or snippets, commit `keybindings.json` and the `snippets/` directory.
4. Optionally publish a `.code-workspace` file to capture workspace layout and settings for specific projects.

## Commands summary

```bash
# clone
git clone https://github.com/antoniofuscaldo/vscode-setup.git

# install extensions from a list (create extensions.txt first)
xargs -L 1 code --install-extension < extensions.txt

# apply settings on macOS
mkdir -p "$HOME/Library/Application Support/Code/User"
cp .vscode/settings.json "$HOME/Library/Application Support/Code/User/settings.json"
```

## Links & references

- Catppuccin theme: https://github.com/catppuccin/vscode
- Catppuccin icons: https://github.com/catppuccin/vscode-icons
- Monaspace font: https://monaspace.githubnext.com/

---

If you'd like, I can now:

- generate a recommended `extensions.txt` from your current machine, or
- extract only the keys you changed from defaults and add a short explanation per-key, or
- create a `.code-workspace` template and a screenshot showing my UI layout.

Tell me which of the three you'd like next and I'll proceed.
