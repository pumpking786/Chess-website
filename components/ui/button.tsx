import React from "react";

export function Button({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={`bg-black text-white px-4 py-2 rounded-xl ${className}`}>
      {children}
    </button>
  );
}
