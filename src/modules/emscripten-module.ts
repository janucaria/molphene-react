export interface EmscriptenModule {

  ctx: WebGLRenderingContext;

  then(fn: (mdl: EmscriptenModule) => void): void;

  lengthBytesUTF8(str: string): number;

  stringToUTF8(str: string, outPtr: number[], maxBytesToWrite: number): number;

  _malloc(l: number): number[];

  _free(l: number[]): void;

  _molphene_application_setup(): void;

  _molphene_application_open_pdb_data(ptrStr: number[]): void;

  _molphene_application_canvas_size_changed(width: number, height: number): void;

  _molphene_application_change_representation(rept: number): void;

  _molphene_application_render_frame(): void;
}

declare function Molphene(): EmscriptenModule;

export default Molphene;

