import * as React from 'react';
import { Card, Title, Paragraph, Button  } from 'react-native-paper';
import styles from '../Styles/Styles';

export default function TipExpanded ({image, title, content, hideModal}) {
    return(
      <Card>
        <Card.Cover source={{ uri: image }} />
        <Card.Content>
            <Title style={styles.sectionTitleTip}>{title}</Title>
            <Paragraph style={styles.sectionTextTip}>{content}</Paragraph>
        </Card.Content>
        <Button style={styles.linkTip} onPress={hideModal}>OK</Button>
      </Card>
    );
  }