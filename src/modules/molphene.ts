import Molphene, { EmscriptenModule } from './molphene-web';

export let instance: EmscriptenModule;

const moduleOverriden = {
  locateFile(path: string, scriptDirectory: string): string {
    return process.env.PUBLIC_URL + "/" + path;
  }
};

export function init(fn: (mdl: EmscriptenModule) => void) {
  if (!instance) {
    instance = Molphene(moduleOverriden);
  }

  instance.then(fn);
}

export function setup() {
  return instance._molphene_application_setup();
}

export function afterCanvasResized() {
  const canvas = instance.ctx.canvas as HTMLCanvasElement;
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  onCanvasSizeChange(canvas.width, canvas.height);
}

export function openPDBData(pdbData: string) {
  let strLen = instance.lengthBytesUTF8(pdbData);
  let ptrStr = instance._malloc(strLen+1);
  instance.stringToUTF8(pdbData, ptrStr, strLen+1);
  return instance._molphene_application_open_pdb_data(ptrStr);
}

export function onCanvasSizeChange(width: number, height: number) {
  return instance._molphene_application_canvas_size_changed(width, height);
}

export function changeRepresentation(rept: number) {
  return instance._molphene_application_change_representation(rept);
}

export function renderFrame() {
  return instance._molphene_application_render_frame();
}