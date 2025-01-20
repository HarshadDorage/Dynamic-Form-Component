# React + TypeScript + Vite

# Dynamic Form Component in React with TypeScript

## Live Demo
You can view the live demo of the project here:  https://dynamic-form-component.netlify.app/




## Brief Explanation of the Approach

This project implements a dynamic form component in React using TypeScript, driven by a JSON schema. The form is designed to dynamically render fields such as text, number, email, checkbox, radio, select, textarea, and autocomplete based on the provided schema. 

### Key Features:
1. **Dynamic Field Rendering**: The fields are generated dynamically based on the JSON schema, making the form reusable and scalable.
2. **Validation**: Built-in validation ensures only valid forms are submitted, with validation rules defined within the schema.
3. **Submission Feedback**: On successful form submission, the form data is logged to the console, and a success message is displayed.
4. **Styling**: The layout and design follow the provided screenshot using Ant Design components for consistency and responsiveness.
5. **TypeScript**: Strong typing ensures robust and error-free code.

---

## Steps to Run the Project Locally

1. **Clone the Repository**  
   ```bash
   git clone <repository_url>
   cd <repository_folder>





This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
