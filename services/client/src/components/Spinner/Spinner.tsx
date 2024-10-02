import React from "react";

const SpinnerPage:React.FC = () => {
  return (    
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>    
  );
}

export { SpinnerPage }