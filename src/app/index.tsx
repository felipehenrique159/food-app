import { ScrollView, Text, View } from "react-native";
import Header from "../components/header";

import Constants from "expo-constants";
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";
import TrendingFoods from "../components/trending";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
      <Header />
      <Banner />
      <Search />
      </View>

      <Section
        name="Comidas em alta"
        size="text-2xl"
        label="Veja mais"
        action={() => {}}
      />

      {/* <Section
        name="Famosos no App Food"
        size="text-xl"
        label="Veja mais"
        action={() => {}}
      /> */}

      <TrendingFoods />
    </ScrollView>
  );
}
