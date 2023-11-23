import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const MapScreen = props => {
  const [isMapReady, setIsMapReady] = useState(false);
  const markers = [
    {
      latitude: '37.776257,', //37.776257,-122.4353305
      longitude: '-122.4353305',
      title: 'some location 1',
    },
    {
      latitude: '37.8078486',
      longitude: '-122.4102691',
      title: 'some location 2',
    },
    {
      latitude: '37.8278286',
      longitude: '-122.4102791',
      title: 'some location 3',
    },
  ];
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        onMapReady={() => {
          setIsMapReady(true);
        }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {isMapReady === true &&
          markers.map(thisEl => {
            return (
              <Marker
                draggable
                title={thisEl.title}
                description={'this is the description'}
                coordinate={{
                  latitude: parseFloat(thisEl.latitude),
                  longitude: parseFloat(thisEl.longitude),
                }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'grey',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>V</Text>
                </View>
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
