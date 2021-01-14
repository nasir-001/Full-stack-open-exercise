import React, {useState} from 'react';
import { Text, View, Alert, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { t } from 'react-native-tailwindcss';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 70,
    height: 70,
  },
  body: {
    display: 'flex'
  }
});

const Item = ({ fullName, 
        description, 
        language, 
        forksCount, 
        stargazersCount, 
        ratingAverage,
        ownerAvatarUrl,
        reviewCount }) => (
          <View style={[t.m2, t.bgWhite, t.pT5, t.pB5, t.rounded, t.shadow2xl]}>
            <View style={[t.flexRow]}>
              <View style={[]}>
                <Image
                    style={[styles.tinyLogo, t.roundedLg, t.mL3, t.mR5]}
                    source={{
                      uri: ownerAvatarUrl,
                    }}
                  />
              </View>
              <View style={[t.pT2, t.flexShrink]}>
                <Text style={[t.text2xl, t.fontBold, t.pB2]}>{fullName}</Text>
                <Text style={[t.textXl, t.textGray600, t.trackingTighter, t.pB2]}>{description}</Text>
                <Text style={[t.bgBlue700, t.pY4, t.pX4, t.w32, t.textWhite, t.textXl, t.fontBold, t.rounded]}>{language}</Text>
              </View>
            </View>
            <View style={[t.pL6, t.pT8, t.flexRow,]}>
              <Text style={[t.w1_4, t.fontBold, t.textXl]}>{stargazersCount}</Text>
              <Text style={[t.w1_4, t.fontBold, t.textXl]}>{forksCount}</Text>
              <Text style={[t.w1_4, t.fontBold, t.textXl]}>{reviewCount}</Text>
              <Text style={[t.w1_4, t.fontBold, t.textXl]}>{ratingAverage}</Text>
            </View>
            <View style={[t.pL5, t.pT2, t.flexRow,]}>
              <Text style={[t.w1_4, t.textXl, t.textGray600]}>Stars</Text>
              <Text style={[t.w1_4, t.textXl, t.textGray600]}>Forks</Text>
              <Text style={[t.w1_4, t.textXl, t.textGray600]}>Reviews</Text>
              <Text style={[t.w1_4, t.textXl, t.textGray600]}>Rating</Text>
            </View>
          </View>
);

const RepositoryItem = ({ item }) => {
  const [id, setId] = useState('')
  const onPress = () => setId(item.id)

    return (
      <View>
        <TouchableOpacity
          onPress={onPress}
        >
          <Item
            id={item.id}
            fullName={item.fullName}
            description={item.description}
            language={item.language}
            stargazersCount={item.stargazersCount}
            forksCount={item.forksCount}
            reviewCount={item.reviewCount}
            ratingAverage={item.ratingAverage}
            ownerAvatarUrl={item.ownerAvatarUrl}
          />
        </TouchableOpacity>
      </View>
    );
};

export default RepositoryItem;