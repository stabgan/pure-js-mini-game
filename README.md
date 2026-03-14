# 🎮 Rock Dodger

A classic arcade-style dodging game built with pure JavaScript and DOM manipulation. Navigate your white dodger to avoid falling rocks and rack up points!

## 🎯 What It Does

Rock Dodger is a simple but addictive browser game where players control a white rectangular "dodger" at the bottom of the screen. Rocks continuously fall from the top, and the objective is to avoid collisions while scoring points for each rock that passes by.

### Game Mechanics
- **Movement**: Use left/right arrow keys to move the dodger
- **Scoring**: Earn 1 point for each rock that falls past your dodger
- **Collision**: Game ends when a rock hits your dodger
- **Difficulty**: Rocks spawn every second at random horizontal positions

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| 🌐 **HTML5** | Game structure and layout |
| 🎨 **CSS3** | Styling and visual effects |
| ⚡ **Vanilla JavaScript** | Game logic and DOM manipulation |
| 🎬 **RequestAnimationFrame** | Smooth rock movement animation |

## 🚀 How to Play

1. **Clone or download** this repository
2. **Open** `index.html` in any modern web browser
3. **Click "START"** to begin the game
4. **Use arrow keys** (← →) to move your dodger left and right
5. **Avoid the falling rocks** and try to beat your high score!

## 🎮 Controls

- **Left Arrow** (←): Move dodger left
- **Right Arrow** (→): Move dodger right
- **Click START**: Begin new game

## 📁 Project Structure

```
├── index.html    # Main game page
├── index.css     # Game styling and rock animations
├── index.js      # Core game logic and mechanics
└── README.md     # This file
```

## 🔧 Features

- **Pure JavaScript** - No frameworks or libraries required
- **Responsive collision detection** - Precise hit detection between dodger and rocks
- **Smooth animations** - Uses `requestAnimationFrame` for 60fps movement
- **Score tracking** - Real-time score display on game over
- **Restart functionality** - Play again without page reload

## ⚠️ Known Issues

- jQuery is loaded in the HTML but not actually used in the game logic
- Score only displays after game over (no live score counter)

## 🎓 Learning Project

This game was created as part of a DOM manipulation learning exercise. It demonstrates:
- Event handling (keyboard input)
- Dynamic element creation and removal
- CSS positioning and styling
- Game loop implementation
- Collision detection algorithms

---

*Built with ❤️ as a JavaScript learning project*