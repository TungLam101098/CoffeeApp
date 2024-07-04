import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';

interface EmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation = ({title}: EmptyListAnimationProps) => {
  return (
    <View style={styles.emptyCartContainer}>
      <LottieView
        style={styles.lottiesStyle}
        autoPlay
        loop
        source={require('../lottie/coffeecup.json')}
      />
      <Text style={styles.lottiesText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  lottiesStyle: {
    height: 300,
  },
  lottiesText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
});

export default EmptyListAnimation;
