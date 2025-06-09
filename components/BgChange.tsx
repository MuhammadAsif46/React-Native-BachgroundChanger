import React from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function BgChange() {
  return (
    <>
      <StatusBar backgroundColor={"#000"} />
      <View>
        <TouchableOpacity>
          <View>
            <Text>Bg Change</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
