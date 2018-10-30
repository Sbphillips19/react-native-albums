import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
  render() {
    const { title, artist, thumbnail_image, image } = this.props.album;
    const {
      thumbnailStyle,
      headerContentStyle,
      tumbnailContainerStyle,
      headerTextStyle,
      imageStyle
    } = styles;

    return (
      <Card>
        <CardSection>
          <View style={tumbnailContainerStyle}>
            <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  tumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
