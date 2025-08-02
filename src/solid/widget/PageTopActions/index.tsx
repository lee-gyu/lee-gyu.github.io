import { css } from "src/styled-system/css";
import { PageTopActionsContext } from "./context";
import LangToggle from "./LangToggle";
import ThemeSwitch from "./ThemeSwitch";

export default function PageTopActions() {
    return (
        <PageTopActionsContext.Provider value={{}}>
            <div
                class={css({
                    display: "inline-flex",
                    alignItems: "center",
                    marginLeft: "auto",
                    gap: "0.5rem",
                })}
            >
                <LangToggle />
                <ThemeSwitch />
            </div>
        </PageTopActionsContext.Provider>
    );
}
