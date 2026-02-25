# 📦 Project Setup Roadmap

This project is a modern React/TypeScript front-end framework built for scalable web applications,
It is designed to be maintainable, modular, and team-friendly, optimized for both freelance client projects and multi-developer teams (up to 10 front-end engineers).


## ✨ Key design principles

- Atomic Design Pattern for UI components.
- Feature-based (MCV) architecture for modules.
- Centralized API client with error handling, caching, and token management.
- Full support for themes and languages.

# 🔹 Clean Architure project
  ```sh
src/
├─app/
│ ├─ [locale]        ├─ (auth)
│ ├─ not-found.tsx   ├─ (public)
│                    ├─ (dashboard)
│                    
│  ├─ 
├─ app/ globals.css            Global styles take design system and convert to utilites                                   
|
├─assets /                                 # Static assets
│  ├─ images/
│  │  └─ images.tsx                        # import and export all images in this file
│  ├─ Lottie/                              # all images lottie files 
│  │  └─ loading.json
│  │  └─ No-Data.json
│  └─ icons/
│     └─ icons.tsx                          # import and export all icons in this file

├─animations/
│ ├─ Reveal.ts
│ ├─ Floating.ts

├─ components/                             # Reusable UI Components (Atomic Design)
│  ├─ atoms/                               # Smallest elements
│  │  ├─ Images.tsx
│  │  ├─ Input.tsx
│  │  ├─ Text.tsx
│  │  └─ Title.tsx
│  ├─ molecules/                           # Combination of atoms
│  │     ├─ SearchBar.tsx
│  ├─ organisms/                           # Larger sections
│  │  ├─ Navbar.tsx
│  │  ├─ Sidebar.tsx
│  │  └─ Footer.tsx
│  ├─ templates/                           # Page-level structures
│  │  ├─ AuthLayout.tsx
│  │  └─ DashboardLayout.tsx
│  │  └─ publicLayout.tsx
│                         
├─ lib/
│   ├─ cn.ts  # incude tailwind-merge ,  clsx, type ClassValue
├─ styles/                            
│  └─ variables.css                         # file for design system form figma
│                  
├─ modules/                               # Feature-based modules (MCV)
│  ├─ auth/
│  │  ├─ api/                             # EndPoint
│  │  │  ├─ loginApi.ts
│  │  │  └─ registerApi.ts
│  │  ├─ components/                      # JSX
│  │  │  ├─ LoginForm.tsx
│  │  │  └─ RegisterForm.tsx
│  │  ├─ hooks/                            # Hook React Query ( useApiMutation.ts , useApiQuery.ts )
│  │  │  └─ uselogin.tsx              
│  │  │  └─ useRegister.tsx                
│  │  │ 
│  │  ├─ guards/
│  │  │  ├─ DoneGuard.tsx   
│  │  │  ├─ OTPGuard.tsx
│  │  │  ├─ ResetGuard.tsx
│  │  │  ├─ useResetFlow.ts
│  │  │
│  │  ├─ utils/
│  │  │  └─ authValidators.ts
│  │  ├─ types/            # types for features 
│  │
│  ├─ Landing/              # landing pages
│  └─ Dashboard/            # dashboard pages 

├─ services/                                # API clients layer
│  ├─ axiosConfig.ts                        # inculde axios , tokens
│  ├─ apiClient.ts                          # inculde method ( get , post ) and Errors Handling 
│  ├─ tokenService.ts                       # inculde tokens

├─ utils/                                
│  ├─ constants.ts
│  ├─ data.tx                            # data for loop with map 
│  ├─ index.tx
│  ├─ routes.tsx                         # routes in navbar

├─ config/                                  
│  ├─ env.ts  # PROJECT INFO ,  API CONFIG , AUTH CONFIG
│  └─ .env    # some env.ts but for esay imports

├─ hooks/ 
│  ├─ useApiQuery.ts           # hook Query
│  ├─ useApiMutation.ts        # hook Mutation
|  ├─ index.ts

├─ types/
│  ├─ api.d.ts        # global types in project 
│  ├─ global.d.ts
│

├─ core/
│  ├─ ui-state ├─ EmptyState.tsx
│              ├─ LoadingState.tsx
│              ├─ NotFoundState.tsx
│ 
│  ├─ seo      ├─ seo.config.ts
│              ├─ Seo.tsx
│              ├─ seo.types.ts
│              ├─ useSeo.ts
├─ guard/
│  ├─ ProtectedRoute.tsx
├─ i18n/
│  ├─ index.ts
                              

 ```
 --------
 ## 🧱  Project Structure
 
1. Assets
src/assets/
- Contains all static resources:
- Images: images.tsx exports project-wide images.
- Icons: icons.tsx exports reusable icons.
- Lottie animations: reusable JSON animations like loading, 404, etc.

2. Animations
src/animations/
- Reusable animation helpers for page transitions and UI effects:
- fade.ts, slide.ts, scale.ts, stagger.ts, transitions.ts.

3. App Entry
src/app/
- AppProviders.tsx: all global providers (theme, i18n, query client, etc.)
- AppRouter.tsx: defines routing, layouts, and route guards.

4. Components (Atomic Design)
src/components/
- Structured into atoms, molecules, organisms, templates.

Atoms
- Smallest reusable elements:
- Buttons, Inputs, Text, Titles, Logos, Links, ThemeToggle, LangToggle, Nav elements, HighlightWord, etc.
Fully theme-aware (dark/light) and accessible.
Molecules

- Combination of atoms for small functional UI blocks:
- Navbar parts, Dropdowns, Mobile/desktop links, headers.

Organisms
Larger UI sections:
- Navbar, Sidebar, Footer.
Templates

- Page-level layouts:
-AuthLayout, DashboardLayout, LandingLayout.

5. Features (MCV pattern)
rc/features/
Modules are self-contained with their own:

- api/: endpoints (login, register)
- components/: JSX/UI
- hooks/: feature-specific hooks (React Query, guards, reset flows)
- utils/: validators or helper functions
- types/: feature-specific TypeScript types
- pages/: pages using templates

Examples:
auth/ → Login, Register, OTP flow, Forget password
Landing/ → Marketing landing pages
Dashboard/ → App dashboard pages

6. Services
 src/services/
- Central API client (apiClient.ts) supports GET/POST, error normalization, caching, retry, timeout, cancellation.
- axiosConfig.ts → Axios wrapper, interceptors, token injection.
- tokenService.ts → secure token storage and refresh strategy.

7. Global Utilities
src/utils/
- Validators, constants, routes, theme definitions, storage helpers.
- Provides project-wide reusable functions.

8. Styles
src/styles/
- variables.css → design system tokens

9. Config
src/config/
- env.ts → centralized environment config for API, Auth, Project info.

10. Hooks
src/hooks/
- useApiQuery.ts, useApiMutation.ts → centralized React Query wrappers
- index.ts → re-export hooks for easier imports

11. Core
src/core/
- UI states → reusable components for Empty, Loading, Network, Error, NotFound states

12. Guards
src/guard/
- ProtectedRoute.tsx → restricts access to authenticated users

13. Internationalization
- src/i18n/ → project-wide language support (i18n)

14. Library Helpers
- src/lib/cn.ts → utility for merging Tailwind classes (clsx + tailwind-merge)

-----------

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| Framework | **Next.js ** |
| Language | **TypeScript && React.js ** |
| Styling | **Tailwind CSS**, **class-variance-authority**, **clsx** |
| Animations | **GSAP** |
| API & State | **React Query**, **Axios** |
| Icons | **Lucide React**, **iconify**, **lottie files** |
| i18n | **i18n** |
| Auth | **Custom Auth API (JWT tokens)** |
| Utilities | **js-cookie**, **tailwind-merge** |


---
## Installation

1. Clone the repository:
   ```sh
   https://github.com/eslam-mohamedl/Structure_React_Typescript.git
   cd Structure_React_Typescript
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Configure environment variables:
   - Copy `.env.example` to `.env` and update values as needed.

### Running the App
- Development mode (with hot reload):
  ```sh
  npm run dev
  ```
- Production build:
  ```sh
  npm run build
  npm start
  ```
---

