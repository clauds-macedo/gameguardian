import type {ICircleProps} from './types';

export const getCirclePosition = ({sideX, sideY}: ICircleProps) => {
  if (!(sideX && sideY)) {
    return {};
  }
  let side = {[sideX]: -120, [sideY]: -50};

  return side;
};
