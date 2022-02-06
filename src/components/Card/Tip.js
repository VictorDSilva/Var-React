import * as React from 'react';
import { Card, Title, Button  } from 'react-native-paper';
import styles from '../Styles/Styles';
import { Icon } from 'react-native-elements';
export default function Tip ({ title, tipKey, showModal, icon }) {
  const show = () => {
    showModal(tipKey);
  };
  
  return(
    <Card key={`tip_${tipKey}`} style={styles.tipCard}>
      <Card.Content style={styles.content}>
        <Icon name={icon} />
        <Title style={styles.sectionTitleTip}>{title}</Title>
      </Card.Content>
      <Button style={styles.linkTip} onPress={show}>More</Button>
    </Card>
  );
}