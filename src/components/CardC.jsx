import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';

const CardC = () => {
  return (
    <Card>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </Card.Actions>
  </Card>
  )
}

export default CardC

const styles = StyleSheet.create({})