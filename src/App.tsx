import * as React from 'react';
import { useEffect } from 'react';
import s, { css } from 'styled-components';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';
import PlaceHolderText from './components/PlaceHolderText';
import fetchData from './utils/fetchData';
import { SkinTypeProps } from './modals';
import {
  getSkinTypesSelector,
  getSelectedSkinTypeSelector,
} from './redux/selectors';
import { placeholderImage } from './assets/images';
import UpsaleSection from './components/UpsaleSection';

const SkinTypeImage = s.img`
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  min-height: 50%;
  width: 100%;
  border-radius: 2rem;
  background-color: #C3BABA;
`;

const PageContainer = s.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  margin:0;
  padding:0;
`;

const centeredStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 60vw;
  padding-right: 2rem;
`;

const PageSection = s.section.attrs(
  ({ centered, large }: { centered: boolean; large: boolean }) => ({
    centered,
    large,
  })
)`
  margin:0;
  padding:0;
  max-height: calc(100vh - 6.5rem);
  width: 100vw;
  width: 40vw;
  padding: 1rem;
  padding-top: 8.5rem;
  ${({ centered }) => centered && centeredStyle};
`;

const H2 = s.h2`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  padding: 1rem 2rem;
  color: #141414;
`;

interface AppProps {
  dispatch: AppDispatch;
  selectedSkinType: SkinTypeProps;
}

function App({ dispatch, selectedSkinType }: AppProps): React.ReactElement {
  useEffect(() => {
    fetchData('http://localhost:8081/skinTypes').then(res => {
      dispatch({ type: 'SET_SKIN_TYPES', payload: res?.data });
    });
  }, [dispatch]);

  return (
    <PageContainer>
      <GlobalStyle />
      <Header />
      <PageSection>
        <H2>{selectedSkinType?.name || 'Select your skin type'}</H2>
        {selectedSkinType?.name && (
          <>
            <PlaceHolderText />
            <PlaceHolderText />
          </>
        )}
      </PageSection>
      <PageSection large centered>
        {selectedSkinType ? (
          <SkinTypeImage
            alt={selectedSkinType?.name}
            src={`data:${selectedSkinType?.name};base64,${Buffer.from(
              selectedSkinType?.image.data
            ).toString('base64')}`}
          />
        ) : (
          <SkinTypeImage src={placeholderImage} />
        )}
        <UpsaleSection />
      </PageSection>
    </PageContainer>
  );
}

const mapStateToProps = (state: RootState) => ({
  selectedSkinType: getSelectedSkinTypeSelector(state),
  skinTypes: getSkinTypesSelector(state),
});

export default connect(mapStateToProps)(App);
