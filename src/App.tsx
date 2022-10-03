import { Button } from "./components/Button";

import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button variant={"primary"} />
      <Button variant={"success"} />
      <Button variant={"warning"} />
      <Button variant={"danger"} />
      <Button variant={"secondary"} />
      <GlobalStyle />
    </ThemeProvider>
  )
}