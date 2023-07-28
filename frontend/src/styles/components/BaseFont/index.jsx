import React from "react";

export const BaseFont = ({ fonttype, className, children }) => {
  return (
    <>
      {fonttype === "title1" && <h1 className={className}>{children}</h1>}
      {fonttype === "title2" && <h2 className={className}>{children}</h2>}
      {fonttype === "title3" && <h3 className={className}>{children}</h3>}
      {fonttype === "headline" && <p className={className}>{children}</p>}
      {fonttype === "helper" && <span className={className}>{children}</span>}
    </>
  );
};