import React, { ReactNode } from "react";
import { Title } from "./Title";

interface CardProps {
  title: string;
  icon: ReactNode;
}

export default function Card({ title, icon }: CardProps) {
  return (
    <div
      className="bg-lavender-300 border-2 border-indigo-800 p-2 sm:p-3 rounded-lg shadow-md hover:shadow-lg transition-all 
                 flex flex-col items-center justify-center text-center hover:bg-lavender-100 
                 hover:-translate-y-1 duration-300 h-[150px] sm:h-[140px]"
    >
      <div className="text-indigo-600 mb-1 sm:mb-2">{icon}</div>

      <Title
        size="sm"
        smSize="md"
        colour="rose"
        weight="medium"
        truncate="3-lines"
      >
        {title}
      </Title>
    </div>
  );
}
