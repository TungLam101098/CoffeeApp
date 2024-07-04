import {StyleSheet, View} from 'react-native';
import React from 'react';

import {SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface BGIconProps {
  name: string;
  color: string;
  size: number;
  BGColor: string;
}

const BGIcon = ({name, color, size, BGColor}: BGIconProps) => {
  return (
    <View style={(styles.iconBG, {backgroundColor: BGColor})}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconBG: {
    height: SPACING.space_30,
    width: SPACING.space_30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SPACING.space_8,
  },
});

export default BGIcon;
