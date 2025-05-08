import React, { ReactNode } from "react";
import Card from "../atoms/Card";

interface CardItem {
  title: string;
  icon: ReactNode;
}

interface CardDisplayProps {
  cards: CardItem[];
}

export default function CardDisplay({ cards }: CardDisplayProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-10 pb-5 w-full">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} icon={card.icon} />
      ))}
    </div>
  );
}
