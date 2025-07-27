import { createContext } from "solid-js";

type PageTopActionsContextValue = {
    lang: Lang;
};

export const PageTopActionsContext = createContext<PageTopActionsContextValue>({
    lang: "ko",
});
