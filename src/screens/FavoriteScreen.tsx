import React, { useEffect } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {useStore} from '../store/store';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '@components/HeaderBar';
import EmptyListAnimation from '@components/EmptyListAnimation';
import FavoritesItemCard from '@components/FavoritesItemCard';

const FavoriteScreen = ({navigation}: any) => {
  const FavoritesList = useStore((state: any) => state.FavoritesList);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const resetFavoritesList = useStore((state: any) => state.resetFavoritesList);
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList,
  );

  const tabBarHeight = useBottomTabBarHeight();

  const toggleFavorite = (favorite: boolean, type: string, id: string) => {
    if (favorite) {
      deleteFromFavoriteList(type, id);
    } else {
      addToFavoriteList(type, id);
    }
  };

  // console.log(FavoritesList[0].imagelink_square);

  // useEffect(() => {
  //   resetFavoritesList();
  // }, [resetFavoritesList]);

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.scrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Favorites" />
            {FavoritesList.length === 0 ? (
              <EmptyListAnimation title="No Favorites" />
            ) : (
              <View style={styles.listItemContainer}>
                {FavoritesList.map((data: any) => (
                  <TouchableOpacity
                    key={data.id}
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}>
                    <FavoritesItemCard
                      id={data.id}
                      name={data.name}
                      type={data.type}
                      averageRating={data.average_rating}
                      imageLink={data.imagelink_portrait}
                      ingredients={data.ingredients}
                      ratingsCount={data.ratings_count}
                      roasted={data.roasted}
                      description={data.description}
                      favorite={data.favorite}
                      specialIngredient={data.special_ingredient}
                      toggleFavoriteItem={toggleFavorite}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
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
  },
  scrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 1,
  },
  listItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
});

export default FavoriteScreen;
