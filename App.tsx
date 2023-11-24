import React, {useRef} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import ModalComponent, {ModalRef} from './src/modal/ModalComponent';

export type ExampleData = {
  message: string;
};

const App: React.FC = () => {
  const modalRef = useRef<ModalRef>(null);

  const handleOpenModal = () => {
    // You can pass any data to the `openModal` function.
    const dataToPass: ExampleData = {message: 'Hello from Parent!'};
    modalRef.current?.openModal(dataToPass);
  };

  return (
    <View>
      <ModalComponent ref={modalRef} />
      <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
        <Text style={styles.buttonText}>{'Open Modal'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 250,
    marginTop: 35,
    borderRadius: 16,
    backgroundColor: 'purple',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default App;
