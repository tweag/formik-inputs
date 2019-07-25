import React from "react";
import { TouchableWithoutFeedback, View, TextInput } from "react-native";
import { StaticInputProps } from "./types";
import { styles } from "./styles";

export const StaticInput: React.FC<StaticInputProps> = ({
  style,
  onPress,
  children,
  ...props
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View pointerEvents="box-only" style={styles.staticInputContainer}>
      {children ? (
        children
      ) : (
        <TextInput editable={false} style={[styles.input, style]} {...props} />
      )}
    </View>
  </TouchableWithoutFeedback>
);
