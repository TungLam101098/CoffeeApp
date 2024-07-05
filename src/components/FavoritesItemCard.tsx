import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import ImageBackgroundInfo from './ImageBackgroundInfo';
import LinearGradient from 'react-native-linear-gradient';

interface FavoritesItemCardProps {
  id: string;
  name: string;
  type: string;
  averageRating: number;
  imageLink: any;
  ingredients: string;
  ratingsCount: number;
  roasted: string;
  description: string;
  favorite: boolean;
  specialIngredient: string;
  toggleFavoriteItem: any;
}

const FavoritesItemCard = ({
  id,
  name,
  type,
  averageRating,
  imageLink,
  ingredients,
  ratingsCount,
  roasted,
  description,
  favorite,
  specialIngredient,
  toggleFavoriteItem,
}: FavoritesItemCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackgroundInfo
        enableBackHandler={false}
        imageLink={imageLink}
        type={type}
        id={id}
        favorite={favorite}
        name={name}
        specialIngredient={specialIngredient}
        ingredient={ingredients}
        averageRating={averageRating}
        ratingCount={ratingsCount}
        roasted={roasted}
        backHandler={() => {}}
        toggleFavorite={toggleFavoriteItem}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.containerLinearGradient}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },
  containerLinearGradient: {
    gap: SPACING.space_10,
    padding: SPACING.space_20,
  },
  descriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  descriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});

export default FavoritesItemCard;
