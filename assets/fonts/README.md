# Assets - Fonts

This folder contains custom fonts used in the Syver website.

## Current Fonts

The website currently uses Google Fonts:
- **Inter**: Primary font for body text
- **Poppins**: Heading font for titles and headings

These fonts are loaded via Google Fonts CDN in the HTML head section.

## Adding Custom Fonts

If you want to use custom fonts:

1. **Upload Font Files**: Add your font files (WOFF2, WOFF, TTF) to this folder
2. **Update CSS**: Add @font-face declarations in `css/style.css`
3. **Update Variables**: Modify the CSS variables in `:root`

## Font File Structure

```
assets/fonts/
├── syver-regular.woff2
├── syver-bold.woff2
├── syver-light.woff2
└── README.md
```

## CSS Integration

To use custom fonts, add this to your CSS:

```css
@font-face {
    font-family: 'Syver';
    src: url('../assets/fonts/syver-regular.woff2') format('woff2'),
         url('../assets/fonts/syver-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Syver';
    src: url('../assets/fonts/syver-bold.woff2') format('woff2'),
         url('../assets/fonts/syver-bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
```

Then update the CSS variables:

```css
:root {
    --font-primary: 'Syver', sans-serif;
    --font-heading: 'Syver', sans-serif;
}
```

## Performance Tips

- Use WOFF2 format for better compression
- Include font-display: swap for better loading performance
- Consider using font preloading for critical fonts 