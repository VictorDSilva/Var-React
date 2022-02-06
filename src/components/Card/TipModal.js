import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Modal, Portal, Provider } from 'react-native-paper';
import TipExpanded from './TipExpanded';
import styles from '../Styles/Styles'
const TipModal = ({visible, setVisible, image, title, content}) => {
  
  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.tipModal}>
            <View>
                <TipExpanded image={image} title={title} content={content} hideModal={hideModal}/>
            </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default TipModal;