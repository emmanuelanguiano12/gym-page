"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
 
export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Desafía tus límites."
        revealText="Supérate a ti mismo."
      >
        <TextRevealCardTitle>
          A veces, solo necesitamos una pequeña motivación.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Descubrela por ti mismo
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}