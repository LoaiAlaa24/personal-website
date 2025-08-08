# Loay Nasser - Personal Portfolio

A modern, responsive personal portfolio website showcasing AI Engineering and Software Development expertise.

## Features

- 🎨 Modern, clean design with dark/light mode toggle
- 📱 Fully responsive across all devices
- ⚡ Built with React 18 and TypeScript
- 🎭 Smooth animations with Framer Motion
- 🎯 Optimized for performance and SEO
- 🔧 Easy to customize and maintain

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, Lucide React
- **Build Tool**: Create React App

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal background, education, and achievements
- **Experience**: Professional timeline with detailed descriptions
- **Projects**: Showcase of major AI and software projects
- **Skills**: Categorized technical skills with progress bars
- **Contact**: Contact form and social media links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## Customization

### Personal Information
Update the personal details in each component:
- Hero section tagline and description
- About section summary and contact info
- Experience section with your work history
- Projects section with your portfolio items
- Skills section with your technical expertise

### Styling
- Colors can be customized in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes

### Content
- Replace placeholder GitHub/demo links with actual project URLs
- Update social media links in Hero and Contact sections
- Modify the resume download functionality in the Hero section

### Company Logos
- Company logos are stored in `public/companies/` directory
- Includes logos for: EFG Holding, Volkswagen Group, Stadtwerke München, KNOWRON, Hotdesk, Extreme Solutions, TUM, and GUC
- Supports both SVG and PNG formats
- Logos display with a grayscale filter that becomes colored on hover
- Automatic fallback to company names if logos fail to load

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy Options
- **Netlify**: Drop the build folder or connect your Git repo
- **Vercel**: Connect your Git repo for automatic deployments
- **GitHub Pages**: Use the build folder with GitHub Actions
- **AWS S3 + CloudFront**: Upload build files to S3 bucket

## Performance Features

- Lazy loading with React Suspense
- Optimized images and assets
- Smooth scroll behavior
- Efficient re-renders with React best practices
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Loay Nasser - [loay.nasserr@gmail.com](mailto:loay.nasserr@gmail.com)

Project Link: [Your Portfolio URL]