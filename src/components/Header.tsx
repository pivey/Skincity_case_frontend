import * as React from 'react';
import { Fragment } from 'react';
import s from 'styled-components';
import { connect } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { getTitleSelector, getSkinTypesSelector } from '../redux/selectors';
import { SkinTypeArrayProps, SkinTypeProps } from '../modals';
import findSkinType from '../utils/findSkinType';

const PageHeader = s.div`
  position: absolute;
  width: 100vw;
  height: 6.5rem;
  background-color: #272727;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H1 = s.h1`
  font-size: 2.5rem;
  padding-left: 3rem;
  margin: 0;
  color: #E9E3E6;
`;

const SkinTypeSelector = s.select`
  width: 20rem;
  height: 4rem;
  background: #272727;
  color: #E9E3E6;
  padding-left: 1rem;
  border: 2px solid #E9E3E6 ;
  margin-right: 3rem;
  border-radius: 10px;

option {
  color: black;
  background: #E9E3E6;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
}
`;

interface HeaderProps {
  dispatch: AppDispatch;
  title: string;
  skinTypes: SkinTypeArrayProps;
}

const Header = ({ dispatch, skinTypes, title }: HeaderProps) => (
  <PageHeader>
    <H1>{title}</H1>
    <SkinTypeSelector
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        dispatch({
          type: 'SET_SELECTED_SKIN_TYPE',
          payload: findSkinType(skinTypes, e.target.value),
        })
      }
    >
      <option selected disabled hidden>
        Skin type
      </option>
      {skinTypes.map((type: SkinTypeProps) => (
        <Fragment key={type.id}>
          <option value={type.name}>{type.name}</option>
        </Fragment>
      ))}
    </SkinTypeSelector>
  </PageHeader>
);

const mapStateToProps = (state: RootState) => ({
  skinTypes: getSkinTypesSelector(state),
  title: getTitleSelector(state),
});

export default connect(mapStateToProps)(Header);
