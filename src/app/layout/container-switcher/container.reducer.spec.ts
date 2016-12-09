
import { containerReducer } from './container.reducer';
import { ContainerActions } from './container.actions';
describe('Container Reducer', () => {
  let containerActions: ContainerActions;
  beforeEach(() => {
    containerActions = new ContainerActions();
  });
  it('should return true/false when action type is containerFluid/container', () => {
    expect(containerReducer(null, containerActions.setContainerFluid())).toBeTruthy();
    expect(containerReducer(null, containerActions.setContainer())).toBeFalsy();
  });

  it('should return current state if type is not valid', () => {
    expect(containerReducer(false, { type: 'nothingMatching' })).toBeFalsy();
    expect(containerReducer(true, { type: 'nothingMatching' })).toBeTruthy();
    expect(containerReducer(null, {type: 'nothingMatching'})).toBe(false);
  });

});
