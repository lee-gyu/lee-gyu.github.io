import { css } from "src/styled-system/css";
import { LangToggle } from "./Buttons";
import { PageTopActionsContext } from "./context";
import ThemeSwitch from "./ThemeSwitch";

export default function PageTopActions() {
    return (
        <PageTopActionsContext.Provider value={{}}>
            <div
                class={css({
                    position: "sticky",
                    top: 0,
                    marginRight: "0.25rem",
                    padding: "0.25rem",
                    borderRadius: "full",
                    backdropFilter: "blur(2px)",
                    display: "inline-block",
                    float: "right",
                    zIndex: 3000,
                })}
            >
                <LangToggle />
                <ThemeSwitch />
            </div>
        </PageTopActionsContext.Provider>
    );
}
