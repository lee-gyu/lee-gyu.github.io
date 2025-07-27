export function setTheme(theme: Theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

export function getTheme(): Theme {
    return (
        (localStorage.getItem("theme") as Theme | null) ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light")
    );
}
