import React from 'react';
import {Dimensions} from 'react-native';
import renderer from 'react-test-renderer';

import StaticMap from './StaticMap';
const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const region = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const marker = {
  title: 'Tiendanube',
  description: 'The best platform store',
  region,
};

const dimensionsMap = {width, height};

describe('renders correctly Static Map', () => {
  it('Default', () => {
    const tree = renderer
      .create(<StaticMap region={region} marker={marker} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('With custom dimensions', () => {
    const tree = renderer
      .create(
        <StaticMap
          region={region}
          marker={marker}
          dimensionsMap={dimensionsMap}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Without marker', () => {
    const tree = renderer.create(<StaticMap region={region} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
