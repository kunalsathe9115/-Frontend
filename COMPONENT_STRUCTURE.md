# Landing Page Component Structure

This is a production-ready React application with a modular component architecture using SCSS modules.

## Project Structure

```
src/
├── components/
│   ├── sections/           # Page sections
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── ProblemSection/
│   │   ├── SystemsSection/
│   │   ├── FeatureSection/
│   │   ├── WorkflowsSection/
│   │   ├── TestimonialSection/
│   │   ├── EnterpriseSection/
│   │   ├── DeploymentSection/
│   │   ├── CTASection/
│   │   ├── TeamSection/
│   │   ├── ContactSection/
│   │   ├── Footer/
│   │   └── index.js
│   └── shared/             # Reusable components
│       ├── Button/
│       ├── Container/
│       └── index.js
├── styles/                 # Global styles and utilities
│   ├── variables.scss      # SCSS variables
│   ├── mixins.scss         # SCSS mixins
│   └── globals.scss        # Global styles
├── App.js                  # Main app component
└── index.js               # App entry point
```

## Component Architecture

### Section Components
Each section is a self-contained component with:
- **Component file** (`.jsx`): React component logic
- **Styles file** (`.module.scss`): Scoped SCSS styles
- **Index file** (`index.js`): Clean exports

### Shared Components
Reusable components used across the application:
- **Button**: Configurable button with variants and sizes
- **Container**: Responsive container with consistent max-width

### SCSS Architecture
- **Variables**: Colors, typography, spacing, breakpoints
- **Mixins**: Reusable style patterns and responsive utilities
- **Modules**: Scoped styles for each component
- **Globals**: Base styles and utility classes

## Features

### ✅ Production Ready
- Modular component architecture
- SCSS modules for scoped styling
- Responsive design with mobile-first approach
- Accessibility features (focus states, semantic HTML)
- Clean code organization

### ✅ Design System
- Consistent color palette
- Typography scale with Inter and Playfair Display fonts
- Spacing system based on 4px grid
- Responsive breakpoints
- Reusable mixins and utilities

### ✅ Components
- **Header**: Navigation with mobile menu
- **Hero**: Main landing section with CTAs
- **ProblemSection**: Problem identification and grid layout
- **SystemsSection**: Solution introduction
- **FeatureSection**: Four alternating feature blocks
- **WorkflowsSection**: Workflow showcase cards
- **TestimonialSection**: Customer testimonial
- **EnterpriseSection**: Enterprise features
- **DeploymentSection**: Deployment options
- **CTASection**: Split call-to-action
- **TeamSection**: Team member profiles
- **ContactSection**: Contact form and information
- **Footer**: Links, newsletter, and social media

## Usage

### Development
```bash
npm start
```

### Build
```bash
npm run build
```

### Styling
- Use SCSS modules for component-specific styles
- Import variables and mixins from `styles/` directory
- Follow the established naming conventions

### Adding New Components
1. Create component directory in appropriate folder
2. Add `.jsx`, `.module.scss`, and `index.js` files
3. Export from parent `index.js` file
4. Import and use in App.js

## Design Fidelity
This implementation matches the original Figma design exactly:
- Exact color scheme (dark grey, blue, light grey)
- Typography (Inter + Playfair Display)
- Layout and spacing
- Component structure and content
- Responsive behavior
