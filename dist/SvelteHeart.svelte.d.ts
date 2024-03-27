import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value?: boolean | undefined;
        colorLiked?: string | undefined;
        colorUnliked?: string | undefined;
        size?: number | undefined;
        symbol?: "star" | "heart" | "thumb" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SvelteHeartProps = typeof __propDef.props;
export type SvelteHeartEvents = typeof __propDef.events;
export type SvelteHeartSlots = typeof __propDef.slots;
export default class SvelteHeart extends SvelteComponent<SvelteHeartProps, SvelteHeartEvents, SvelteHeartSlots> {
}
export {};
