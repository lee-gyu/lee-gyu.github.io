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
                    display: "inline-block",
                    top: 0,
                    paddingTop: "0.25rem",
                    marginRight: "0.5rem",
                    borderRadius: "full",
                    backdropFilter: "blur(2px)",
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
