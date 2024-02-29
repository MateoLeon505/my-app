import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//   },
// });

const App = () => {
  return (
    <View 
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
    // style={styles.container}
    >
      <Text style={{fontSize: 40}}>First Project</Text>
      <Text style={{fontSize: 30}}>Using React Native👾</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );  
}
export default App;



