"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// On utilise directement les props du composant original pour éviter les erreurs de chemin
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}