class LocalStorageAPI {
	getCurrentTheme(): Theme {
		const theme = localStorage.getItem("lee-gyu.github.io@theme");

		// 브라우저의 시스템 테마로 반환
		if (!theme) {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		}

		return theme as Theme;
	}
}

export const localStorageAPI = new LocalStorageAPI();
