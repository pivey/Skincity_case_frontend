import { SkinTypeArrayProps, SkinTypeProps } from '../modals';

const findSkinType = (skinTypesArray: SkinTypeArrayProps, target: any): any =>
  skinTypesArray.find((type: SkinTypeProps) => type.name === target);

export default findSkinType;
