export type StateWrapper<T> = {
  state: T;
  setState: (newState: T) => void;
};

export function createWrapperFromState<T>([state, setter]: [
  state: T,
  setter: (newState: T) => void
]) {
	return {
		state,
		setState: setter,
	};
}
