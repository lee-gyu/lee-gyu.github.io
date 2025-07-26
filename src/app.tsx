import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import type { JSX } from "solid-js";
import { children, onMount, Suspense } from "solid-js";

import "./index.css";
import { localStorageAPI } from "./utils/local-storage";
import { setTheme } from "./utils/theme";

type AppLayoutProps = {
	children: JSX.Element;
};

function AppLayout(props: AppLayoutProps) {
	const resolved = children(() => props.children);

	onMount(() => {
		setTheme(localStorageAPI.getCurrentTheme());
	});

	return <div class="app-layout">{resolved()}</div>;
}

export default function App() {
	return (
		<AppLayout>
			<Router
				root={(props) => (
					<MetaProvider>
						<Title>Lee Gyu</Title>
						<Suspense>{props.children}</Suspense>
					</MetaProvider>
				)}
			>
				<FileRoutes />
			</Router>
		</AppLayout>
	);
}
