import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Keranjang = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.keranjang}>
      <View style={[styles.keranjangInner, styles.groupPosition1]}>
        <View
          style={[
            styles.groupWrapper,
            styles.groupLayout,
            styles.groupPosition1,
          ]}
        >
          <View
            style={[
              styles.groupWrapper,
              styles.groupLayout,
              styles.groupPosition1,
            ]}
          >
            <View
              style={[
                styles.groupChild,
                styles.groupLayout,
                styles.groupPosition1,
              ]}
            />
            <Pressable
              style={styles.frame}
              onPress={() => navigation.navigate("ListProduk")}
            >
              <Image
                style={[styles.iconLayout, styles.groupLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <Text style={[styles.order, styles.orderFlexBox]}>ORDER</Text>
            <Text style={[styles.profile, styles.profileTypo]}>PROFILE</Text>
            <Text
              style={[
                styles.history,
                styles.vectorPosition,
                styles.profileTypo,
              ]}
            >
              History
            </Text>
            <Pressable
              style={[styles.vector, styles.vectorPosition]}
              onPress={() => navigation.navigate("History")}
            >
              <Image
                style={styles.groupLayout}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
            </Pressable>
            <Pressable
              style={styles.vector1}
              onPress={() => navigation.navigate("ProfileKasir")}
            >
              <Image
                style={styles.groupLayout}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Pressable
          style={styles.vector2}
          onPress={() => navigation.navigate("ProfileKasir")}
        >
          <Image
            style={styles.groupLayout}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Text style={[styles.toko, styles.tokoTypo]}>TOKO</Text>
        <Text style={[styles.menu, styles.tokoTypo]}>MENU</Text>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.order1, styles.textTypo, styles.orderFlexBox]}>
          Order
        </Text>
        <Text style={styles.macchiato}>Macchiato</Text>
        <Text style={styles.rp25000}>Rp 25.000</Text>
        <View style={[styles.groupContainer, styles.groupFlexBox]}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group18.png")}
          />
        </View>
        <Image
          style={[styles.groupIcon1, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group19.png")}
        />
        <Text style={[styles.text, styles.textClr, styles.textTypo]}>1</Text>
        <Image
          style={[styles.image12Icon, styles.bayarPosition]}
          resizeMode="cover"
          source={require("../assets/image-121.png")}
        />
        <Text style={[styles.latte, styles.latteTypo]}>LATTE</Text>
        <Text style={[styles.rp20000, styles.latteTypo]}>Rp 20.000</Text>
        <View style={[styles.groupFrame, styles.groupFlexBox]}>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group18.png")}
          />
        </View>
        <Image
          style={[styles.groupIcon3, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group19.png")}
        />
        <Text style={[styles.text1, styles.textClr, styles.textTypo]}>1</Text>
        <Image
          style={[styles.image7Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-7.png")}
        />
      </View>
      <View style={styles.totalParent}>
        <Text style={[styles.total, styles.totalPosition, styles.textClr]}>
          TOTAL
        </Text>
        <Text style={[styles.rp45000, styles.textClr]}>Rp 45.000</Text>
      </View>
      <Image
        style={styles.keranjangChild}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Pressable
        style={[styles.btnPrimary, styles.btnLayout]}
        onPress={() => navigation.navigate("PrintNota")}
      >
        <View
          style={[
            styles.btnPrimaryChild,
            styles.btnLayout,
            styles.totalPosition,
          ]}
        />
        <Text style={[styles.bayar, styles.bayarPosition, styles.tokoTypo]}>
          BAYAR
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  groupLayout: {
    height: "100%",
    width: "100%",
  },
  orderFlexBox: {
    textAlign: "left",
    color: Color.color,
    position: "absolute",
  },
  profileTypo: {
    opacity: 0.5,
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    height: "8.37%",
  },
  vectorPosition: {
    left: "78.33%",
    position: "absolute",
  },
  groupPosition: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.turquoise,
    left: "3.49%",
    width: "96.51%",
    right: "0%",
    position: "absolute",
  },
  tokoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "500",
    color: Color.color,
  },
  textTypo: {
    fontFamily: FontFamily.nunito,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  groupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_lg,
    flexDirection: "row",
    width: 30,
    backgroundColor: Color.beige,
    borderRadius: Border.br_xs,
    height: 30,
    position: "absolute",
  },
  groupIconLayout: {
    width: "3.49%",
    height: "4.7%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textClr: {
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  bayarPosition: {
    left: 13,
    position: "absolute",
  },
  latteTypo: {
    left: 133,
    color: Color.gray_500,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  totalPosition: {
    left: 0,
    top: 0,
  },
  btnLayout: {
    height: 35,
    width: 254,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.teal_100,
    top: "0%",
  },
  frame: {
    left: "45%",
    top: "20.37%",
    right: "47.15%",
    bottom: "24.98%",
    width: "7.85%",
    height: "54.65%",
    position: "absolute",
  },
  order: {
    left: "45.56%",
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_2xs,
    height: "8.37%",
    textAlign: "left",
    color: Color.color,
    top: "79.63%",
    width: "13.22%",
  },
  profile: {
    width: "13.73%",
    left: "13.06%",
    top: "79.63%",
    opacity: 0.5,
    position: "absolute",
  },
  history: {
    top: "77.78%",
    opacity: 0.5,
    width: "13.22%",
    left: "78.33%",
  },
  vector: {
    top: "14.81%",
    right: "14.1%",
    bottom: "30.53%",
    width: "7.56%",
    height: "54.65%",
  },
  vector1: {
    left: "13.61%",
    top: "25.93%",
    right: "79.99%",
    bottom: "26.87%",
    width: "6.4%",
    height: "47.2%",
    position: "absolute",
  },
  groupWrapper: {
    top: "0%",
  },
  keranjangInner: {
    height: "8.44%",
    top: "91.56%",
    width: "100%",
    left: "0%",
  },
  groupItem: {
    height: "18.09%",
    bottom: "81.91%",
    borderColor: "#c3fffb",
    top: "0%",
  },
  vector2: {
    left: "8.58%",
    top: "6.51%",
    right: "85.39%",
    bottom: "88.06%",
    width: "6.03%",
    height: "5.43%",
    position: "absolute",
  },
  toko: {
    top: "5.43%",
    left: "20.11%",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  menu: {
    top: "17%",
    left: "7.77%",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupInner: {
    height: "11.94%",
    top: "18.09%",
    bottom: "69.97%",
    borderColor: "#68d7d0",
  },
  order1: {
    top: 49,
    left: 29,
    letterSpacing: 0.4,
    lineHeight: 32,
  },
  macchiato: {
    top: 110,
    fontFamily: FontFamily.allerta,
    color: Color.gray_400,
    fontSize: FontSize.size_xl,
    left: 122,
    textAlign: "left",
    position: "absolute",
  },
  rp25000: {
    top: 136,
    color: Color.gray_500,
    left: 122,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    width: 13,
    height: 2,
  },
  groupContainer: {
    top: 123,
    left: 260,
  },
  groupIcon1: {
    top: "47.58%",
    right: "8.71%",
    bottom: "47.72%",
    left: "87.8%",
  },
  text: {
    top: 126,
    left: 299,
  },
  image12Icon: {
    top: 59,
    width: 120,
    height: 120,
  },
  latte: {
    top: 219,
    fontSize: FontSize.size_xl,
  },
  rp20000: {
    top: 246,
    fontSize: FontSize.size_base,
  },
  groupFrame: {
    top: 231,
    left: 261,
  },
  groupIcon3: {
    top: "86.65%",
    right: "8.45%",
    bottom: "8.65%",
    left: "88.07%",
  },
  text1: {
    top: 234,
    left: 300,
  },
  image7Icon: {
    height: "21.85%",
    width: "17.43%",
    top: "78.15%",
    right: "73.19%",
    left: "9.38%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleGroup: {
    height: "43.19%",
    width: "103.61%",
    bottom: "56.81%",
    left: "-3.61%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  total: {
    fontWeight: "700",
    width: 68,
    height: 30,
    left: 0,
    top: 0,
    color: Color.black,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto,
  },
  rp45000: {
    top: 1,
    left: 160,
    width: 94,
    height: 18,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.roboto,
  },
  totalParent: {
    top: 451,
    left: 61,
    width: 254,
    height: 30,
    position: "absolute",
  },
  keranjangChild: {
    top: 428,
    left: 48,
    width: 280,
    height: 3,
    position: "absolute",
  },
  btnPrimaryChild: {
    borderRadius: Border.br_md,
    backgroundColor: Color.teal_100,
  },
  bayar: {
    top: 10,
    fontSize: FontSize.size_sm,
    width: 227,
    height: 17,
  },
  btnPrimary: {
    top: 513,
    left: 54,
  },
  keranjang: {
    backgroundColor: Color.color,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Keranjang;
