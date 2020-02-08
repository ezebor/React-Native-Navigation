import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styled from 'styled-components';

const StyledApp = styled.SafeAreaView`
  flex: 1;
`;

const StyledScrollView = styled.ScrollView`
  flex: 1;
  marginHorizontal: 24;
  backgroundColor: red;
  marginTop: 12;
`;

const App: () => React$Node = () => (
  <NavigationContainer>
    <StyledApp>
      <StyledScrollView>
        
      </StyledScrollView>
    </StyledApp>
  </NavigationContainer>
);

export default App;
