import { WlMaterialModule } from './wl-material.module';

describe('WlMaterialModule', () => {
  let wlMaterialModule: WlMaterialModule;

  beforeEach(() => {
    wlMaterialModule = new WlMaterialModule();
  });

  it('should create an instance', () => {
    expect(wlMaterialModule).toBeTruthy();
  });
});
