import { ThemeProvider } from "@material-tailwind/react";
 
export default function App() {
  const customTheme = { ... }
 
  return <ThemeProvider value={customTheme}>...</ThemeProvider>;
}