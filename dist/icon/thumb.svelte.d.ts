import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        color?: string | undefined;
        size?: string | number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ThumbProps = typeof __propDef.props;
export type ThumbEvents = typeof __propDef.events;
export type ThumbSlots = typeof __propDef.slots;
export default class Thumb extends SvelteComponent<ThumbProps, ThumbEvents, ThumbSlots> {
}
export {};
