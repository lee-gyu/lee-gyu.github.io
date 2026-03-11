import { LastUpdated } from "src/solid/components/LastUpdated";
import { css } from "src/styled-system/css";
import { PageTopActionsContext } from "./context";
import { LangToggle } from "./LangToggle";
import ThemeSwitch from "./ThemeSwitch";

const buttonWrapperCls = css({
    display: "inline-flex",
    alignItems: "center",
    position: "sticky",
    float: "right",
    marginRight: "0.5rem",
    marginTop: "-2.5rem",
    height: "2.5rem",
    top: 0,
});

const headerCls = css({
    display: "inline-flex",
    alignItems: "center",
    height: "2.5rem",
    top: 0,
    position: "absolute",
    paddingLeft: "docPadLeft",
    width: "300px",
    zIndex: 3000,
});

export default function PageTopActions() {
    return (
        <PageTopActionsContext.Provider value={{}}>
            <header id="pageHeader" class={headerCls} data-print-hidden>
                <LastUpdated />
            </header>
            <div class={buttonWrapperCls} data-print-hidden>
                <LangToggle />
                <ThemeSwitch />
            </div>
        </PageTopActionsContext.Provider>
    );
}
