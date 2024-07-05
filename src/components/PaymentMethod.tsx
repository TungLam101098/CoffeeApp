import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomIcon from './CustomIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

interface PaymentMethodProps {
  paymentMode: string;
  name: string;
  icon: any;
  isIcon: boolean;
}

const PaymentMethod = ({
  paymentMode,
  name,
  icon,
  isIcon,
}: PaymentMethodProps) => {
  return (
    <View
      style={[
        styles.paymentCardContainer,
        {
          borderColor:
            paymentMode === name
              ? COLORS.primaryOrangeHex
              : COLORS.primaryGreyHex,
        },
      ]}>
      {isIcon ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.linearGradientWallet}>
          <View style={styles.walletRow}>
            <CustomIcon
              name="wallet"
              color={COLORS.primaryOrangeHex}
              size={FONTSIZE.size_30}
            />
            <Text style={styles.paymentTitle}>{name}</Text>
          </View>
          <Text style={styles.paymentPrice}>$ 100.50</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.linearGradientRegular}>
          <Image source={icon} style={styles.paymentImage} />
          <Text style={styles.paymentTitle}>{name}</Text>
        </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  paymentCardContainer: {
    borderRadius: BORDERRADIUS.radius_15 * 2,
    backgroundColor: COLORS.primaryGreyHex,
    borderWidth: 3,
  },
  linearGradientWallet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    gap: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_15 * 2,
  },
  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_24,
  },
  paymentTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
  },
  paymentPrice: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  linearGradientRegular: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_12,
    paddingHorizontal: SPACING.space_24,
    gap: SPACING.space_24,
    borderRadius: BORDERRADIUS.radius_15 * 2,
  },
  paymentImage: {
    height: SPACING.space_30,
    width: SPACING.space_30,
  },
});

export default PaymentMethod;
