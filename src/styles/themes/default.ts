export type ThemeType = typeof defaultTheme

export const defaultTheme = {
    primary: "purple",
    secondary: "orange",
    success: "green",
    warning: "yellow",
    danger: "red",
}

export const darkTheme: ThemeType = {
    primary: "green",
    secondary: "magenta",
    success: "blue",
    warning: "white",
    danger: "black",
}