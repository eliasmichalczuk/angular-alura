import { FilterByDescriptionPipe } from './filter-by-description.pipe';

xdescribe('FilterByDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
