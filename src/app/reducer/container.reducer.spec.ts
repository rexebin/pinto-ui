
import { containerReducer, setContainerFluid, setContainer } from './container.reducer';
describe('Container Reducer', () => {

  it('should return true when action type is containerFluid', () => {

    expect(containerReducer(false, { type: setContainerFluid })).toBeTruthy();
    expect(containerReducer(false, { type: setContainer })).toBeFalsy();
    expect(containerReducer(true, { type: setContainerFluid })).toBeTruthy();
    expect(containerReducer(false, { type: setContainer })).toBeFalsy();

    expect(containerReducer(false, { type: 'nothingMatching' })).toBeFalsy();
  });

});
