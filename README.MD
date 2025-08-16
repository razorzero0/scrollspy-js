# scrollspyy-js
---

A lightweight, dependency-free JavaScript library for creating smooth scrollspy effects 
with customizable active states for navigation links.

--- 
### Features
- Pure Vanilla JavaScript: No jQuery or other dependencies required.

- Lightweight: Minimal footprint for optimal performance.

- Easy Integration: Simple initialization with one function call.

- Highly Customizable: Full control over colors, fonts, and visual effects.

- Dynamic Styling: Applies styles with !important to ensure visibility.

- Smooth Transitions: Automatically highlights navigation based on scroll position.

- Framework Agnostic: Works with any HTML/CSS framework.

- CDN Ready: Use directly from a CDN without installation.

---

##  Installation
### NPM

```bash
npm install scrollspyy-js
```

Then include in your HTML:


```html
<script src="./node_modules/scrollspyy-js/dist/scrollspy.js"></script>
```

### CDN
##### Using jsDelivr


```html
<script src="https://cdn.jsdelivr.net/npm/scrollspyy-js@latest/dist/scrollspy.js"></script>
```
---

##### Using unpkg
```html
<script src="https://unpkg.com/scrollspyy-js@latest/dist/scrollspy.js"></script>
```

---

## 	Initialize Scrollspy

```html
<script>
 	scrollSpy.init({ });
</script>
```


---

## Quick Start
Basic HTML Setup
```html

<!DOCTYPE html>
<html>
<head>
  <title>ScrollSpy Example</title>
  <style>
    /* Fixed navigation */
    nav {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    nav a {
      display: block;
      padding: 0.5rem 1rem;
      text-decoration: none;
      color: #333;
      margin-bottom: 0.5rem;
      border-radius: 4px;
      transition: all 0.3s ease;
    }
    
    /* Content sections */
    section {
      min-height: 100vh;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  <nav>
    <a href="#home" class="nav-link">Home</a>
    <a href="#about" class="nav-link">About</a>
    <a href="#services" class="nav-link">Services</a>
    <a href="#contact" class="nav-link">Contact</a>
  </nav>

  <section id="home" style="background: #e3f2fd;">
    <h1>Home Section</h1>
  </section>
  
  <section id="about" style="background: #f3e5f5;">
    <h1>About Section</h1>
  </section>
  
  <section id="services" style="background: #e8f5e9;">
    <h1>Services Section</h1>
  </section>
  
  <section id="contact" style="background: #fff3e0;">
    <h1>Contact Section</h1>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/scrollspyy-js@latest/dist/scrollspy.js"></script>
  <script>
 // Initialize ScrollSpy
      scrollSpy.init({});

      // Initialize custom ScrollSpy

      //   scrollSpy.init({
      //     sectionSelector: "section", // target section selector
      //     navSelector: ".nav-link", // target navigation link
      //     padding: 5, // padding in px
      //     borderRadius: "5px", // border radius
      //     offset: 150, // trigger offset
      //     bgColor: "#c4f622ff", // active background color
      //     textColor: "#3E0703", // active text color
      //     fontWeight: "bolder", // active font weight
      //     underline: true, // enable underline
      //     underlineColor: "red", // underline color
      //     underlineOffset: "5px", // underline offset
      //   });
  </script>
</body>
</html>
```
---

##  LIVE DEMO

Want to see it in action? Check out the live CodePen example.

Link to CodePen:  https://codepen.io/razorzero0/pen/OPyzrJb

---

## Configuration Options
Pass these options to scrollSpy.init() to customize the behavior and appearance.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `sectionSelector` | String | `"section"` | CSS selector for content sections to track. Each section must have an ID attribute. |
| `navSelector` | String | `".nav-link"` | CSS selector for navigation links. The `href` attribute must point to section IDs (e.g., `#home`). |
| `padding` | Number | `5` | Padding (in pixels) applied to active navigation links. |
| `borderRadius` | String | `"5px"` | Border radius for the active link background. Accepts any valid CSS border-radius value. |
| `offset` | Number | `150` | Scroll offset (in pixels) for triggering active state. Useful for fixed headers. |
| `activeClass` | String | `"active-scrollspy"` | CSS class name added to active navigation links. |
| `bgColor` | String | `""` | Background color for active links. Accepts any valid CSS color value. |
| `textColor` | String | `"#59110cff"` | Text color for active links. Accepts any valid CSS color value. |
| `fontWeight` | String | `"bolder"` | Font weight for active links (e.g., `"normal"`, `"bold"`, `"600"`). |
| `underline` | Boolean | `false` | Enable/disable underline effect on active links. |
| `underlineColor` | String | `"blue"` | Color of the underline when enabled. |
| `underlineOffset` | String | `"2px"` | Distance between text and underline. |

---

## Advanced Examples
#### Example 1: Custom Styled Navigation

```JAVASCRIPT
scrollSpy.init({
  sectionSelector: ".content-section",
  navSelector: ".sidebar-nav a",
  padding: 10,
  borderRadius: "25px",
  offset: 100,
  bgColor: "#c4f622ff",
  textColor: "#ffffff",
  fontWeight: "600",
  underline: false
});
```

#### Example 2: Minimal Configuration
```JAVASCRIPT
scrollSpy.init({
  bgColor: "#007bff",
  textColor: "#fff"
});
```
#### Example 3: With Underline Effect

```javascript
scrollSpy.init({
  bgColor: "transparent",
  textColor: "#e91e63",
  fontWeight: "bold",
  underline: true,
  underlineColor: "#e91e63",
  underlineOffset: "4px"
});
```
#### Example 4: For Fixed Header

```JAVASCRIPT
// If you have a 80px fixed header
scrollSpy.init({
  offset: 80,
  bgColor: "#28a745",
  textColor: "#fff",
  borderRadius: "0px"
});
```
---

### API Methods
`scrollSpy.init(options)`
Initializes the scrollspy functionality with the provided options.

##### Parameters: 
options (Object): A configuration object with properties from the table above.

Returns: `void`

Example:
```javascript
scrollSpy.init({
  bgColor: "#6c757d",
  textColor: "#fff"
});
```
---

### Browser Support
- Chrome 

- Firefox 

- Safari 

- Edge 

- Opera 

- Internet Explorer 11 (with polyfills)

---

### Common Use Cases
- **Single Page Applications**: Perfect for SPAs with multiple sections and fixed navigation.

- **Documentation Sites:** Ideal for documentation with sidebar navigation showing the user's current position.

- **Landing Pages:** Great for marketing pages with smooth scroll navigation.

- **Portfolio Websites**: Excellent for portfolio sites with section-based content.

---

### Troubleshooting

#### Issue: Active state not showing


- **Solution:** Ensure your navigation links have the correct `href `pointing to section IDs.

- Check that sections have unique `id` attributes.

- Verify the `navSelector` matches your navigation links.


#### Issue: Wrong section highlighted

- **Solution:** Adjust the `offset `value to match your layout.

- Check if sections have sufficient height to allow the scrollspy to trigger correctly.

#### Issue: Styles not applying
- **Solution:** The library uses` !important` to override existing styles.

- Check the browser console for any JavaScript errors.

- Ensure the script is loaded after the DOM content.

### License
**MIT License** - Feel free to use in personal and commercial projects.

### Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

### Support
For issues and feature requests, please create an issue on the GitHub repository.