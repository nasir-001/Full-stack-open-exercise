import React from 'react';
import { Text, View, Image, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { t } from 'react-native-tailwindcss';
import useRepository from '../hooks/useRepository';

const styles = StyleSheet.create({
    tinyLogo: {
      width: 70,
      height: 70,
    },
    body: {
      display: 'flex'
    }
});

const Repository = ({ repository }) => {
  const item = repository;

  const onSubmit = () => {
    Linking.openUrl(`https://github.com/${item.fullName}`)
  }
  
  return (
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
          <Text style={[t.text2xl, t.fontBold, t.pB2]}>{item.fullName}</Text>
          <Text style={[t.textXl, t.textGray600, t.trackingTighter, t.pB2]}>{item.description}</Text>
          <Text style={[t.bgBlue700, t.pY4, t.pX4, t.w32, t.textWhite, t.textXl, t.fontBold, t.rounded]}>{item.language}</Text>
        </View>
      </View>
      <View style={[t.pL6, t.pT8, t.flexRow,]}>
        <Text style={[t.w1_4, t.fontBold, t.textXl]}>{item.stargazersCount}</Text>
        <Text style={[t.w1_4, t.fontBold, t.textXl]}>{item.forksCount}</Text>
        <Text style={[t.w1_4, t.fontBold, t.textXl]}>{item.reviewCount}</Text>
        <Text style={[t.w1_4, t.fontBold, t.textXl]}>{item.ratingAverage}</Text>
      </View>
      <View style={[t.pL5, t.pT2, t.flexRow,]}>
        <Text style={[t.w1_4, t.textXl, t.textGray600]}>Stars</Text>
        <Text style={[t.w1_4, t.textXl, t.textGray600]}>Forks</Text>
        <Text style={[t.w1_4, t.textXl, t.textGray600]}>Reviews</Text>
        <Text style={[t.w1_4, t.textXl, t.textGray600]}>Rating</Text>
      </View>
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View>
          <Text>
            Open in GitHub
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

export default Repository;