export interface EmscriptenModule {

  readonly ALLOC_NORMAL: number;
  readonly ALLOC_STACK: number;
  readonly ALLOC_STATIC: number;
  readonly ALLOC_DYNAMIC: number;
  readonly ALLOC_NONE: number;

  ctx: WebGLRenderingContext;

  allocate(ptr: number[], types: string, allocator: number): number;
  intArrayFromString(stringy: string, dontAddNull?: boolean, length?: number): number[];

  then(fn: (mdl: EmscriptenModule) => void): void;

  _molphene_application_setup(): void;
  _molphene_application_open_pdb_data(ptrStr: any): void;
  _molphene_application_canvas_size_changed(width: number, height: number): void;
  _molphene_application_change_representation(rept: number): void;
  _molphene_application_render_frame(): void;
}

declare function Molphene(): EmscriptenModule;

export default Molphene;

