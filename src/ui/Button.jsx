import React from "react";
import Button from "react-bootstrap/Button";

const ButtonUi = ({ className, text, onClick, size, variant, href, type }) => {
  const content = (
    <span className="btn-content-wrapper d-flex align-items-center gap-4">
      <span className="btn-text">{text}</span>
      <img src="/public/home/t-arrow.svg" alt="arrow" className="btn-arrow" />
    </span>
  );

  return href ? (
    <a href={href} className={`custom-btn ${className}`}>
      {content}
    </a>
  ) : (
    <Button
      onClick={onClick}
      size={size}
      variant={variant}
      className={`custom-btn ${className}`}
      type={type}   
    >
      {content}
    </Button>
  );
};

ButtonUi.defaultProps = {
  text: "Let's Talk",
  size: "md",
  variant: "light",
};

export default ButtonUi;
