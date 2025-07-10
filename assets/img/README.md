# Assets - Images

This folder contains all images used in the Syver website.

## Current Structure

The website currently uses:
- Font Awesome icons for visual elements
- CSS-generated animations and visual effects
- No static images are required for the current design

## Adding Images

If you want to add custom images:

1. **Logo**: Add your company logo as `logo.png` or `logo.svg`
2. **Hero Background**: Add hero background images as `hero-bg.jpg`
3. **Project Images**: Add project screenshots as `project-1.jpg`, `project-2.jpg`, etc.
4. **Team Photos**: Add team member photos as `team-member-1.jpg`, etc.

## Image Guidelines

- Use optimized images (WebP, PNG, or JPG)
- Keep file sizes under 500KB for better performance
- Use descriptive filenames
- Consider adding alt text in the HTML for accessibility

## CSS Integration

To use images in CSS, reference them like this:
```css
.hero {
    background-image: url('../assets/img/hero-bg.jpg');
}
```

## HTML Integration

To use images in HTML, reference them like this:
```html
<img src="assets/img/logo.png" alt="Syver Logo">
``` 