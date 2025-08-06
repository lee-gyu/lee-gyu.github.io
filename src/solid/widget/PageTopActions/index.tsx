import { css } from "src/styled-system/css";
import { LangToggle } from "./Buttons";
import { PageTopActionsContext } from "./context";
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
