/* ========================================================================
                                MODULE IMPORTS & CONFIGURATION.
======================================================================== */
// Core Libraries.
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Application Layout.
import AppLayout from "./pages/AppLayout";

// Page Components.
import Home from "./pages/Home";

// Style Foundations.
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/App.css';

/* ========================================================================
                            APPLICATION ROOT.
 ======================================================================== */
function App() {
  return (
    <>
      <BrowserRouter role="main" aria-label="Application root">
        <Routes>
          {/* Primary Layout Container */}
          <Route
            element={<AppLayout role="region" aria-label="Main content area" />}
          >
            {/* Automatic Home Redirection */}
            <Route
              index
              element={
                <Navigate replace to="home" aria-label="Home redirect" />
              }
            />

            {/* Home Page */}
            <Route path="home" element={<Home aria-label="Main Home page" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

/* ============================================================================
                                EXPORTS.
============================================================================= */
export default App;
