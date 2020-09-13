import { createSelector } from 'reselect';
import { RootState } from './store';

const getSkinTypes = (state: RootState) => state.skinTypes;

export const getSkinTypesSelector = createSelector(
  [getSkinTypes],
  skinType => skinType
);

const getSelectedSkinType = (state: RootState) => state.selectedSkinType;

export const getSelectedSkinTypeSelector = createSelector(
  [getSelectedSkinType],
  selectedType => selectedType
);

const getTitle = (state: RootState) => state.title;

export const getTitleSelector = createSelector([getTitle], title => title);
