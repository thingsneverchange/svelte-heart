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
export type HeartProps = typeof __propDef.props;
export type HeartEvents = typeof __propDef.events;
export type HeartSlots = typeof __propDef.slots;
export default class Heart extends SvelteComponent<HeartProps, HeartEvents, HeartSlots> {
}
export {};
