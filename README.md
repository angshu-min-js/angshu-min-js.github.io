# Angshuman Gupta - Personal Portfolio

This repository contains the source code for Angshuman Gupta's personal portfolio website, built with React, TypeScript, Vite, and Tailwind CSS. The website showcases professional experience, skills, and includes interactive mini-games related to Product Management.

## Project Structure

- `public/`: Static assets.
- `src/`: Source code.
  - `components/`: Reusable React components (UI elements, games, sections).
  - `pages/`: Main page components (e.g., `Index.tsx`).
  - `lib/`: Utility functions or library configurations.
  - `assets/`: Image assets.
  - `App.tsx`: Main application component, sets up routing.
  - `main.tsx`: Entry point of the React application.
- `index.html`: Main HTML template.
- `vite.config.ts`: Vite build configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `package.json`: Project dependencies and scripts.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the specified port) in your browser.

4.  **Build for production:**
    ```bash
    npm run build
    ```
5.  **Preview the production build:**
    ```bash
    npm run preview
    ```

## Deployment

The project is deployed to GitHub Pages using the `gh-pages` package.

1.  **Build the project:**
    ```bash
    npm run build
    ```
2.  **Deploy to GitHub Pages:**
    ```bash
    npm run deploy
    ```
    This script (defined in `package.json`) handles pushing the contents of the `dist` directory to the `gh-pages` branch of your repository.

A custom domain (`angshumangupta.com`) is configured via the GitHub repository settings to point to the GitHub Pages site.

## Interactive PM Games

The portfolio includes several interactive mini-games designed to be fun and reflect common Product Management challenges.

---

### 1. Prioritization Game (`QuickPrioritizationGame.tsx`)

**Product Requirements:**

- **Goal:** Simulate a quick prioritization exercise where the user must select a limited number of features based on Value and Effort.
- **Gameplay:**
    - Present the user with a list of features, each having a Value score and an Effort score.
    - Define a maximum Effort capacity for the sprint/selection.
    - Allow the user to select features by clicking on them.
    - Dynamically update the total Value and total Effort of the selected features.
    - Prevent selecting more features if the Effort capacity is exceeded.
    - Provide visual feedback on selected items and capacity usage.
    - Display the final score (Total Value) when the user finishes.
- **UI:** Simple card-based layout for features, clear display of Value, Effort, and Capacity.

**Implementation Details:**

- Built as a React functional component (`QuickPrioritizationGame`).
- Uses `useState` hook to manage:
    - Selected features (`selectedItems`).
    - Total current effort (`currentEffort`).
    - Total current value (`currentValue`).
- Feature data is hardcoded within the component.
- Logic involves checking capacity constraints before adding a feature.
- Uses Shadcn UI components (`Button`, `Card`, `Progress`) for styling.
- Includes a close button (`onClose` prop) to dismiss the game dialog.

---

### 2. Feature-Metric Matcher (`FeatureMetricMatcher.tsx`)

**Product Requirements:**

- **Goal:** Test the user's ability to connect product features/initiatives with the appropriate success metrics.
- **Gameplay:**
    - Present two columns: one with Features/Initiatives and one with Metrics.
    - Allow the user to drag and drop metrics onto the corresponding features.
    - Provide immediate feedback on whether the match is correct or incorrect.
    - Keep track of the score (number of correct matches).
    - Show a final score and feedback upon completion.
- **UI:** Two-column layout, drag-and-drop interface, visual cues for correct/incorrect matches.

**Implementation Details:**

- Built as a React functional component (`FeatureMetricMatcher`).
- Uses `react-beautiful-dnd` library for drag-and-drop functionality.
- `useState` manages the state of features, metrics, dropped items, score, and feedback messages.
- Data for features and metrics is hardcoded.
- The `onDragEnd` handler contains the logic to check if the dropped metric matches the target feature.
- Uses Shadcn UI components (`Button`, `Card`) and custom styling.
- Provides `onClose` prop for dialog dismissal.

---

### 3. Stack Challenge (`StackChallenge.tsx`)

**Product Requirements:**

- **Goal:** Simulate a basic technical stack decision process based on project requirements.
- **Gameplay:**
    - Present a scenario or project requirement (e.g., "Build a simple blog").
    - Offer choices for different layers of a tech stack (e.g., Frontend Framework, Backend Language, Database).
    - Allow the user to select one option for each layer.
    - Based on the combination chosen, provide feedback on the suitability of the stack for the given scenario (e.g., "Good choice!", "Overkill!", "Might face scaling issues.").
- **UI:** Simple selection interface (radio buttons or cards), clear presentation of the scenario and choices, feedback area.

**Implementation Details:**

- Built as a React functional component (`StackChallenge`).
- Uses `useState` to track the selected option for each stack layer (frontend, backend, database) and the resulting feedback.
- Data for scenarios and stack options is hardcoded.
- A `handleSubmit` function evaluates the selected combination and sets the appropriate feedback message based on predefined logic.
- Uses Shadcn UI components (`Button`, `Card`, `RadioGroup`, `Label`).
- Provides `onClose` prop for dialog dismissal.

---

### 4. Burnout Meter (`BurnoutMeter.tsx`)

**Product Requirements:**

- **Goal:** Simulate sprint planning, focusing on balancing feature impact against team effort capacity and potential burnout.
- **Gameplay:**
    - **Sprint Planning:**
        - Present a backlog of 6 tasks with associated Effort and Impact scores.
        - Allow users to select tasks for the current sprint.
        - Show running total Effort vs. Team Capacity (fixed at 15 points).
        - Display a Burnout Meter (visual bar) that increases if capacity is exceeded.
    - **Sprint Review:**
        - Upon completing a sprint, show the Impact added and team feedback ("Overwhelmed!" or "Well-paced!").
        - Increase the Burnout Meter if the team was overloaded.
    - **Progression:** Proceed through 3 sprints.
    - **Endgame:**
        - Show the Final Total Impact score.
        - Display the final Burnout Status (e.g., "Happy team", "Okay", "Burned out").
        - Provide a summary message based on the outcome.
- **UI:** Task selection via clickable cards, progress bars for effort and burnout, clear indicators for sprint number, effort, impact, and capacity.

**Implementation Details:**

- Built as a React functional component (`BurnoutMeter`).
- Uses `useState` to manage:
    - Current sprint number (`currentSprint`).
    - Selected tasks for the current sprint (`selectedTasks`).
    - History of completed sprints (`sprints`).
    - Current burnout level (`burnoutLevel`).
    - Total accumulated impact (`totalImpact`).
    - Game over state (`gameOver`).
- Task data (`initialTasks`) and `TEAM_CAPACITY` are hardcoded constants.
- `handleTaskSelect` toggles task selection.
- `handleSprintComplete` calculates sprint results, updates burnout and total impact, and transitions to the next sprint or game over state.
- Helper functions (`getBurnoutStatus`, `getEndGameMessage`, `getBurnoutColor`) determine final status, messages, and UI elements based on state.
- Uses Shadcn UI components (`Button`, `Card`, `Progress` - custom implementation for color).
- Provides `onClose` prop for dialog dismissal.

---

