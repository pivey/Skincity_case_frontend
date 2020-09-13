import * as React from 'react';
import { useEffect } from 'react';
import s, { createGlobalStyle, css } from 'styled-components';
import { connect } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import Header from './components/Header';
import fetchData from './utils/fetchData';
import { SkinTypeProps } from './modals';
import {
  getSkinTypesSelector,
  getSelectedSkinTypeSelector,
} from './redux/selectors';
import {
  placeholderImage,
  offers,
  professionals,
  skinTest,
  treatments,
} from './assets/images';

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  color: #272727;
  font-family: Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 10px;
  box-sizing: border-box;
  background-color: #E9E3E6;
}
`;

const SkinTypeImage = s.img`
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  min-height: 50%;
  width: 100%;
  border-radius: 2rem;
  background-color: #C3BABA;
`;

const UpSaleHolder = s.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 2rem 0;
  grid-template-columns: repeat(auto-fill, minmax(1fr));
  grid-template-rows: repeat(auto-fill, minmax(1fr));
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  `;

const UpSaleBox = s.div.attrs(({ imgSrc }: any) => ({
  imgSrc,
}))`
  transition: all 250ms;
  width: 100%;
  min-height: 12rem;
  font-size: 20px;
  border-radius: 2rem;
  text-align: center;
  background-color: #048A81;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  filter: brightness(0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E9E3E6;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    filter: contrast(120%);

    a.left:before {
      visibility: visible;
      width: 100%;
    }
  }

  a.left {
    position: relative;
    color: inherit;
    text-decoration: none;
  }

  a.left:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FFF;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
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
  border-radius: 2rem;
  color: #141414;
`;

const FillerText = s.p`
  padding: 1rem;
  padding-right: 4rem;
  padding-left: 2rem;
  font-size: 18px;
  line-height: 1.6em;
  margin:0;
`;

interface AppProps {
  dispatch: AppDispatch;
  selectedSkinType: SkinTypeProps;
}

const upSaleBoxContent = [
  {
    text: 'Speak to our skincare professionals',
    imgSrc: professionals,
  },
  {
    text: 'Treatments',
    imgSrc: treatments,
  },
  {
    text: 'Offers',
    imgSrc: offers,
  },
  {
    text: 'Skin test',
    imgSrc: skinTest,
  },
];

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
        <FillerText>
          Consectetur anim fugiat Lorem cupidatat nostrud ea nostrud cupidatat
          commodo nulla laborum tempor minim irure. Commodo nisi consequat sit
          in. Cillum nulla voluptate in est eiusmod ut consectetur voluptate
          consectetur tempor cillum proident.
        </FillerText>
        <FillerText>
          Sit minim qui qui est sunt nisi non ipsum irure cillum mollit.
          Reprehenderit veniam mollit sit esse sint. Dolore excepteur voluptate
          proident velit. Lorem deserunt commodo labore Lorem. Duis esse dolor
          proident laborum amet.
        </FillerText>
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
        <UpSaleHolder>
          {upSaleBoxContent.map(({ text, imgSrc }: any) => (
            <UpSaleBox imgSrc={imgSrc}>
              <a href="" className="left">
                {text}
              </a>
            </UpSaleBox>
          ))}
        </UpSaleHolder>
      </PageSection>
    </PageContainer>
  );
}

const mapStateToProps = (state: RootState) => ({
  selectedSkinType: getSelectedSkinTypeSelector(state),
  skinTypes: getSkinTypesSelector(state),
});

export default connect(mapStateToProps)(App);
