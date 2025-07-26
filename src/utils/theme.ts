export function setTheme(theme: Theme) {
	localStorage.setItem("lee-gyu.github.io@theme", theme);
	document.documentElement.setAttribute("data-theme", theme);
}

Object.assign(globalThis, {
	__setTheme: setTheme,
});
