import { ContainerActions } from './container.actions';
/**
 * Created by yezm on 10/12/2016.
 */

describe('Container Actions', () => {
  let action: ContainerActions;
  beforeEach(() => {
    action = new ContainerActions();
  });
  it('should create an action to set container class', () => {
    const expectedAction = {
      type: ContainerActions.SetContainer
    };
    expect(action.setContainer()).toEqual(expectedAction);
  });
  
  it('should create an action to set container-fluid class', () => {
    const expectedAction = {
      type: ContainerActions.SetContainerFluid
    };
    expect(action.setContainerFluid()).toEqual(expectedAction);
  });
});
