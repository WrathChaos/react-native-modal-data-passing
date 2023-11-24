import {forwardRef, useImperativeHandle, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {ExampleData} from '../../App';

// This is the ref interface that will be exposed to parent.
export interface ModalRef {
  openModal: (data: ExampleData) => void;
}

const ModalComponent = forwardRef<ModalRef, {}>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalData, setModalData] = useState<ExampleData>();

  // This function will be callable by the parent component.
  const openModal = (data: ExampleData) => {
    setModalData(data); // Use the data passed by parent.
    setIsVisible(true);
  };

  // This function will be callable by the parent component.
  const closeModal = () => {
    setIsVisible(false);
  };

  // Expose the `openModal` and `closeModal` functions to parent component.
  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={closeModal}>
      {modalData && (
        <View style={styles.container}>
          <Text>{modalData.message}</Text>
        </View>
      )}
    </Modal>
  );
});

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '50%',
    width: '80%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default ModalComponent;
