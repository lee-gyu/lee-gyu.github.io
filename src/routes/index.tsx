import { css } from "~/styled-system/css";

export default function Home() {
	return (
		<main
			class={css({
				padding: "10vh 12vw",
			})}
		>
			<h1>Hello, World!</h1>
		</main>
	);
}
