import { StyleSheet,  View } from 'react-native';
import Title from './src/componentes/Title';
import Form from './src/componentes/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1E6',
    paddingTop: 81,
    
  },
});
