import React from 'react';
import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import GradientBGIcon from './GradientBGIcon';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface ImageBackgroundInfoProps {
  enableBackHandler: boolean;
  imageLink: ImageProps;
  type: string;
  id: string;
  favorite: boolean;
  name: string;
  specialIngredient: string;
  ingredient: string;
  averageRating: number;
  ratingCount: number;
  roasted: string;
  backHandler: any;
  toggleFavorite: any;
}

const ImageBackgroundInfo = ({
  enableBackHandler,
  imageLink,
  type,
  id,
  favorite,
  name,
  specialIngredient,
  ingredient,
  averageRating,
  ratingCount,
  roasted,
  backHandler,
  toggleFavorite}: ImageBackgroundInfoProps) => {
  return (
    <View>
      <ImageBackground source={imageLink} style={styles.itemBackgroundImage}>
        {enableBackHandler ? (
          <View style={styles.imageHeaderContainerWithBack}>
            <TouchableOpacity onPress={backHandler}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => toggleFavorite(favorite, type, id)}>
              <GradientBGIcon
                name="like"
                color={
                  favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.imageHeaderContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => toggleFavorite(favorite, type, id)}>
              <GradientBGIcon
                name="like"
                color={
                  favorite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
                }
                size={FONTSIZE.size_16}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.imageInfoOuterContainer}>
          <View style={styles.imageInfoInnerContainer}>
            <View style={styles.infoContainerRow}>
              <View>
                <Text style={styles.itemTitleText}>{name}</Text>
                <Text style={styles.itemSubTitleText}>{specialIngredient}</Text>
              </View>
              <View style={styles.itemPropertiesContainer}>
                <View style={styles.properFirst}>
                  <CustomIcon
                    name={type === 'Bean' ? 'bean' : 'beans'}
                    size={type === 'Bean' ? FONTSIZE.size_18 : FONTSIZE.size_24}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.propertyTextFirst,
                      {
                        marginTop:
                          type === 'Bean'
                            ? SPACING.space_4 + SPACING.space_2
                            : 0,
                      },
                    ]}>
                    {type}
                  </Text>
                </View>
                <View style={styles.properFirst}>
                <CustomIcon
                    name={type === 'Bean' ? 'location' : 'drop'}
                    size={FONTSIZE.size_16}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.propertyTextLast}>{ingredient}</Text>
                </View>
              </View>
            </View>
            <View style={styles.infoContainerRow}>
              <View style={styles.ratingContainer}>
                <CustomIcon
                  name="star"
                  color={COLORS.primaryOrangeHex}
                  size={FONTSIZE.size_20}
                />
                <Text style={styles.ratingText}>{averageRating}</Text>
                <Text style={styles.ratingCountText}>{ratingCount}</Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  itemBackgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },
  imageHeaderContainerWithBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageHeaderContainerWithoutBack: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageInfoOuterContainer: {
    paddingVertical: SPACING.space_24,
    paddingHorizontal: SPACING.space_30,
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
    borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
  },
  imageInfoInnerContainer: {
    justifyContent: 'space-between',
    gap: SPACING.space_15,
  },
  infoContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitleText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryWhiteHex,
  },
  itemSubTitleText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  itemPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_20,
  },
  properFirst: {
    height: 55,
    width: 55,
    borderRadius: SPACING.space_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackRGBA,
  },
  propertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_10,
  },
  ratingText: {
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  ratingCountText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },
  roastedContainer: {
    height: 55,
    width: 55 * 2 + SPACING.space_20,
    borderRadius: SPACING.space_15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlackRGBA,
  },
  roastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
  },
  propertyTextLast: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
    color: COLORS.primaryWhiteHex,
    marginTop: SPACING.space_2 + SPACING.space_4,
  },
});

export default ImageBackgroundInfo;
