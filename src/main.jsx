/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION.
============================================================================= */
// React Core.
import { Profiler, StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

// UI Component.
const App = lazy(() => import("./App"));
import LoadingState from "./ui/LoadingState";

// Style Imports.
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/App.css';

/* =============================================================================
                              APPLICATION CONSTANTS.
============================================================================= */
const env_config = {
  root_element_id: "root",
  enable_profiling: import.meta.env.DEV,
};

/* =============================================================================
                              APPLICATION BOOTSTRAP.
============================================================================= */
/**
 * Initializes React application with proper error boundaries and monitoring.
 * @throws {Error} When root element is not found.
 */
function initializeApp() {
  const { root_element_id } = env_config;
  const rootElement = document.getElementById(root_element_id);

  // Create React root and render application.
  createRoot(rootElement).render(
    <StrictMode>
      {env_config.enable_profiling && (
        <Profiler id="AppCore">
          <Suspense fallback={<LoadingState />}>
            <App />
          </Suspense>
        </Profiler>
      )}
    </StrictMode>
  );
}

/* =============================================================================
                              RUNTIME EXECUTION.
============================================================================= */
try {
  initializeApp();
} catch (error) {
  console.log(error)
}
