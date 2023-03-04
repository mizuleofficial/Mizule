import { View, Text, Image } from "react-native";
import React from "react";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { windowHeight, windowWidth } from "../../utils/constants.util";

const ProfileCarousel = ({items}) => {
  return (
    <Card>
  {/* <Card.Title>CARD WITH DIVIDER</Card.Title>
  <Card.Divider/> */}
  {
    items.map((item, i) => {
      return (
        <View key={i}>
          <Image
            resizeMode="cover"
            source={{ uri: item.avatar }}
          />
          <Text>{item.name}</Text>
        </View>
      );
    })
  }
</Card>
 
  );
};

export default ProfileCarousel;
