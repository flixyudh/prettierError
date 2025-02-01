import React from 'react';
import {View, useWindowDimensions, Text, SafeAreaView} from 'react-native';

const App = props => {
  const {width, height} = useWindowDimensions();
  const a = "WAKWAW"

  React.useEffect(() => {}, []);

  return (
    <SafeAreaView style={{flex: 1}} id="wakwaw">
      <Text>App</Text>
    </SafeAreaView>
  );
};

App.displayName = 'App';

export default App;