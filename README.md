# 🏨 The Editorial Concierge

*A Luxury Travel Discovery Web Interface*

The Editorial Concierge is a modern, responsive hotel discovery and booking interface inspired by premium travel platforms. It focuses on elegant design, smooth animations, and curated property presentation to simulate a high-end booking experience.

---

## ✨ Features

### 🎨 UI / Design

* Editorial-style luxury layout
* Responsive design for desktop, tablet, and mobile
* Glassmorphism navigation bar
* Material Symbols icon integration
* Google Fonts typography (Noto Serif + Manrope)

### 🧭 Navigation

* Sticky top navigation bar
* Mobile bottom navigation menu
* Multi-page structure:

  * Login page
  * Collections page
  * Booking page

### 🎞 Animations

* Smooth page fade-in on load
* Scroll-triggered reveal animations
* Staggered property card appearance
* Ken Burns zoom effect on images
* Hover lift and shadow transitions

### 🔐 Login Simulation

* Basic front-end login validation
* Redirect to collections page after login

---

## 📁 Project Structure

```
📦 editorial-concierge
 ┣ 📂 img
 ┃ ┣ pic7.jpg
 ┃ ┣ pic8.jpg
 ┃ ┗ pic9.jpg
 ┣ 📜 index.html        # Login page
 ┣ 📜 collections.html  # Hotel listings
 ┣ 📜 booking.html      # Booking page
 ┣ 📜 signup.js         # Login and animation scripts
 ┗ 📜 README.md
```

---

## 🛠 Technologies Used

* **HTML5**
* **CSS3**
* **Tailwind CSS**
* **JavaScript**
* **Google Fonts**
* **Material Symbols**

---

## 🧪 How to Run the Project

1. Download or clone the repository:

```
git clone https://github.com/your-username/editorial-concierge.git
```

2. Open the project folder.

3. Double-click:

```
index.html
```

No installation or build tools are required — the project runs entirely in the browser.

---

## 🎬 Animation System

The interface uses the **IntersectionObserver API** to trigger animations when elements enter or leave the viewport.

Example:

```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});
```

This allows:

* Fade-in when scrolling down
* Fade-out when scrolling up

---

## 📱 Responsive Design

| Device  | Layout                             |
| ------- | ---------------------------------- |
| Desktop | Sidebar filters + grid results     |
| Tablet  | Stacked sections                   |
| Mobile  | Bottom navigation + vertical cards |

---

## 📸 Screenshots

*(You can add screenshots here after uploading images to your repository)*

```
![Home Page](screenshots/home.png)
![Collections Page](screenshots/collections.png)
```

---

## 🔧 Future Improvements

* Backend authentication system
* Real booking database
* Price filtering logic
* Search functionality
* Dark mode toggle
* Animated page transitions between pages

---

## 📜 License

This project is for educational and portfolio use.

---

## 👤 Author

**Acepj**
Student / Web Developer
GitHub: https://github.com/acepj

---
