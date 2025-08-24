import { css } from "src/styled-system/css";
import { LangToggle } from "./Buttons";
import { PageTopActionsContext } from "./context";
import ThemeSwitch from "./ThemeSwitch";

const pageTopActionsWrapperCls = css({
    position: "sticky",
    display: "inline-block",
    top: 0,
    paddingTop: "0.25rem",
    marginTop: "-2.5rem",
    marginRight: "0.5rem",
    borderRadius: "full",
    backdropFilter: "blur(2px)",
    float: "right",
    zIndex: 3000,
});

export default function PageTopActions() {
    return (
        <PageTopActionsContext.Provider value={{}}>
            <div class={pageTopActionsWrapperCls} data-print-hidden>
                <LangToggle />
                <ThemeSwitch />
            </div>
        </PageTopActionsContext.Provider>
    );
}
