/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION
============================================================================= */
// Styling
import styled from "styled-components";

/* =============================================================================
                              STYLED COMPONENT
============================================================================= */
const LoadingWrapper = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(121deg, rgba(255, 255, 255, 1) 0%, rgba(188, 155, 115, 1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  img {
    width: 150px;
    max-height: 70px;
  }

  p {
    font-size: 3.2rem;
    font-weight: 200;
    color: #fff;
    letter-spacing: 15px;
    text-transform: uppercase;
  }

  p span {
    animation: loading 1s infinite alternate;
  }

  /* Animation delay for each character */
  ${Array.from({ length: 10 })
    .map((_, i) => `p span:nth-child(${i + 1}) { animation-delay: ${i * 0.1}s; }`)
    .join("\n")}

  @keyframes loading {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

/* =============================================================================
                              MAIN COMPONENT
============================================================================= */
/**
 * Loading indicator component for async operations.
 * @returns {JSX.Element} Loading state UI
 */
function LoadingState() {
  return (
    <LoadingWrapper
      role="alert"
      aria-live="assertive"
      aria-busy="true"
      data-testid="loading-indicator"
    >
      <img
        src="../home/loading-indicator.svg"
        alt="Loading indicator"
        loading="lazy"
        decoding="async"
      />
      <p>
        {"smarthouse".split("").map((char, idx) => (
          <span key={idx}>{char}</span>
        ))}
      </p>
    </LoadingWrapper>
  );
}

/* =============================================================================
                              EXPORT
============================================================================= */
export default LoadingState;
