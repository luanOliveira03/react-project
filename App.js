import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{color: 'red', textAlign: 'center', paddingTop: 50}}>Componente Text!</Text>
      <Button title="Componente Button" onPress={() => console.log('Button pressed')} />
      <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 200, height: 200 }}/>
    </View>
  );
};

export default App;