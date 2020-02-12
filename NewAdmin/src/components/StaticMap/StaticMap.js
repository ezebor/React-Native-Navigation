import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker, ProviderPropType} from 'react-native-maps';

import {PROVIDER_DEFAULT} from 'react-native-maps';

const StaticMap = ({region, provider, marker, dimensionsMap}) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={provider}
        style={dimensionsMap}
        scrollEnabled={false}
        zoomEnabled={false}
        pitchEnabled={false}
        rotateEnabled={false}
        initialRegion={region}>
        {!!marker && (
          <Marker
            title={marker.title}
            description={marker.description}
            coordinate={marker.region}
          />
        )}
      </MapView>
    </View>
  );
};

StaticMap.propTypes = {
  provider: ProviderPropType,
  region: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    latitudeDelta: PropTypes.number,
    longitudeDelta: PropTypes.number,
  }).isRequired,
  marker: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    region: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      latitudeDelta: PropTypes.number,
      longitudeDelta: PropTypes.number,
    }),
  }),
  dimensionsMap: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

StaticMap.defaultProps = {
  marker: null,
  dimensionsMap: {
    width: 250,
    height: 250,
  },
  provider: PROVIDER_DEFAULT,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
    paddingVertical: 40,
  },
});

export default StaticMap;
