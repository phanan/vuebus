import Vue from 'vue';
declare type EmitObjectBasedDeclaration = {
    [event: string]: Function;
};
declare class VueBus {
    private readonly bus;
    constructor(vue?: Vue);
    emit(event: string, ...args: any[]): VueBus;
    on(event: string | string[] | EmitObjectBasedDeclaration, callback?: Function): VueBus;
    off(event?: string | string[], callback?: Function): VueBus;
    once(event: string | string[], callback: Function): VueBus;
    /**
     * @deprecated. Use attach() instead.
     */
    register(name?: string): VueBus;
    attach(name?: string): VueBus;
}
export default VueBus;
