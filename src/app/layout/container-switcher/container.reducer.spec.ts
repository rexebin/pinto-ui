import { containerReducer } from './container.reducer';
import { ContainerActions } from './container.actions';
fdescribe('Container Reducer', () => {
  
  let containerActions: ContainerActions;
  
  beforeEach(() => {
    containerActions = new ContainerActions();
  });
  
  it('should return initial state', () => {
    expect(containerReducer(undefined, { type: '' })).toEqual(false);
  });
  
  it('should return true/false when action type is containerFluid/container', () => {
    expect(containerReducer(null, containerActions.setContainerFluid())).toEqual(true);
    expect(containerReducer(null, containerActions.setContainer())).toEqual(false);
  });
  
  it('should return current state if type is not valid', () => {
    expect(containerReducer(false, { type: '' })).toEqual(false);
    expect(containerReducer(true, { type: '' })).toEqual(true);
    expect(containerReducer(undefined, { type: '' })).toEqual(false);
  });
  
});
