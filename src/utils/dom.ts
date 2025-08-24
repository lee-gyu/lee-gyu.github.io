type FilterMouseEvArg = MouseEvent & { target: HTMLElement };

type FilteredMouseEventHandler = (ev: FilterMouseEvArg) => void;

function checkTargetSelector(target: EventTarget | null, selector: string) {
    if (target instanceof HTMLElement && target.closest(selector)) return true;

    return false;
}

export function addFilteredClickEv(
    element: HTMLElement,
    selector: string,
    handler: FilteredMouseEventHandler,
) {
    const eventHandler = (ev: MouseEvent) => {
        if (checkTargetSelector(ev.target, selector)) {
            handler(ev as FilterMouseEvArg);
        }
    };

    element.addEventListener("click", eventHandler);

    return eventHandler;
}
