# Rock Dodger 🪨

A simple browser-based arcade game built with pure JavaScript and DOM manipulation. Dodge falling rocks using arrow keys and rack up your score.

## How It Works

- Rocks fall from the top of the game area at random horizontal positions
- Move the white dodger left/right with arrow keys to avoid them
- Each rock you dodge earns a point
- One hit and it's game over

## 🛠 Tech Stack

| Tech | Purpose |
|------|---------|
| 🟨 JavaScript (Vanilla) | Game logic, animation via `requestAnimationFrame` |
| 🟧 HTML5 | Game structure and layout |
| 🎨 CSS3 | Styling, rock shapes via pseudo-elements |

## Getting Started

No build tools or dependencies required. Just open `index.html` in a browser:

```bash
# Clone and play
git clone https://github.com/stabgan/pure-js-mini-game.git
cd pure-js-mini-game
open index.html        # macOS
# or: xdg-open index.html   # Linux
# or: start index.html       # Windows
```

## Controls

| Key | Action |
|-----|--------|
| ← Arrow Left | Move dodger left |
| → Arrow Right | Move dodger right |

## Project Structure

```
├── index.html   # Game page
├── index.css    # Styles and rock shapes
├── index.js     # All game logic
└── Info.md      # Original author notes
```

## ⚠️ Known Issues

- No mobile/touch support — keyboard only
- No difficulty scaling — rock speed and spawn rate are constant
- No pause functionality
