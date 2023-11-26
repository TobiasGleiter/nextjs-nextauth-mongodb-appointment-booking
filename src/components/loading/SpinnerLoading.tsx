import BaseIcon from '../icons/BaseIcon';

export interface ISpinnerLoading {}

const SpinnerLoading: React.FC<ISpinnerLoading> = () => {
  return <BaseIcon icon="spinner" style="animate-spin" />;
};

export default SpinnerLoading;
