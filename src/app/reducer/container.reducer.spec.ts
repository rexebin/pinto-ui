
import { containerReducer, setContainerFluid, setContainer } from './container.reducer';
describe('Container Reducer', () => {

  it('should return true/false when action type is containerFluid/container', () => {
    expect(containerReducer(null, { type: setContainerFluid })).toBeTruthy();
    expect(containerReducer(null, { type: setContainer })).toBeFalsy();
  });

  it('should return current state if type is not valid', () => {
    expect(containerReducer(false, { type: 'nothingMatching' })).toBeFalsy();
    expect(containerReducer(true, { type: 'nothingMatching' })).toBeTruthy();
  });

});
