import React, {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {useStore} from '../store/store';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import ImageBackgroundInfo from '@components/ImageBackgroundInfo';
import PaymentFooter from '@components/PaymentFooter';

const DetailsScreen = ({navigation, route}: any) => {
  const itemOfIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [price, setPrice] = useState(itemOfIndex.prices[0]);
  const [fullDesc, setFullDesc] = useState(false);

  const backHandler = () => {
    navigation.pop();
  };

  const toggleFavorite = (favorite: boolean, type: string, id: string) => {
    if (favorite) {
      deleteFromFavoriteList(type, id);
    } else {
      addToFavoriteList(type, id);
    }
  };

  const addToCartHandler = ({
    id,
    index,
    name,
    roasted,
    imageLink,
    specialIngredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square: imageLink,
      special_ingredient: specialIngredient,
      type,
      prices: [{...price, quantity: 1}],
    });
    calculateCartPrice();
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <ImageBackgroundInfo
          enableBackHandler={true}
          imageLink={itemOfIndex.imagelink_portrait}
          type={itemOfIndex.type}
          id={itemOfIndex.id}
          favorite={itemOfIndex.favorite}
          name={itemOfIndex.name}
          specialIngredient={itemOfIndex.special_ingredient}
          ingredient={itemOfIndex.ingredients}
          averageRating={itemOfIndex.average_rating}
          ratingCount={itemOfIndex.rating_count}
          roasted={itemOfIndex.roasted}
          backHandler={backHandler}
          toggleFavorite={toggleFavorite}
        />
        <View style={styles.footerInfoArea}>
          <Text style={styles.infoTitle}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => setFullDesc(prev => !prev)}>
              <Text style={styles.descText}>{itemOfIndex.description}</Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => setFullDesc(prev => !prev)}>
              <Text numberOfLines={3} style={styles.descText}>
                {itemOfIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          )}
          <Text style={styles.infoTitle}>Size</Text>
          <View style={styles.sizeOuterContainer}>
            {itemOfIndex.prices.map((data: any) => (
              <TouchableOpacity
                key={data.size}
                onPress={() => setPrice(data)}
                style={[
                  styles.sizeBox,
                  {
                    borderColor:
                      price.size === data.size
                        ? COLORS.primaryOrangeHex
                        : COLORS.primaryGreyHex,
                  },
                ]}>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      fontSize:
                        itemOfIndex.type === 'bean'
                          ? FONTSIZE.size_14
                          : FONTSIZE.size_16,
                      color:
                        price.size === data.size
                          ? COLORS.primaryOrangeHex
                          : COLORS.secondaryLightGreyHex,
                    },
                  ]}>
                  {data.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <PaymentFooter
          price={price}
          buttonTitle="Add to Cart"
          buttonPressHandler={() => {
            addToCartHandler({
              id: itemOfIndex.id,
              index: itemOfIndex.index,
              name: itemOfIndex.name,
              roasted: itemOfIndex.roasted,
              imageLink: itemOfIndex.imagelink_portrait,
              specialIngredient: itemOfIndex.special_ingredient,
              type: itemOfIndex.type,
              price,
            });
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  footerInfoArea: {
    padding: SPACING.space_20,
  },
  infoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,
  },
  descText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
  sizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    marginBottom: SPACING.space_30,
  },
  sizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
  sizeBox: {
    flex: 1,
    backgroundColor: COLORS.secondaryGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: SPACING.space_10,
    borderWidth: 2,
  },
});

export default DetailsScreen;
