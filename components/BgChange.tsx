import React, { useState } from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function BgChange() {

    const [backgroundChange, setBackgroundChange] = useState("#fff")

    const gererateColor = () =>{
        const hexRange = "0123456789ABCDEF"
        let color = "#"

        for (let i = 0; i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)] 
        }
        setBackgroundChange(color)
    }
  return (
    <>
      <StatusBar backgroundColor={backgroundChange} />
      <View style={[styles.container, {backgroundColor: backgroundChange}]}>
        <TouchableOpacity onPress={gererateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
});
