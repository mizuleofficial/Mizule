import { View, TextInput, Image } from "react-native";
import React,{useState} from "react";
import TagCard from "../components/zules.component.jsx/tag.compo";

const Discover = () => {
  const [query, setQuery] = useState("")
  return (
    <View className="flex-1 w-full bg-black justify-start items-center p-4 ">
      <View className="flex flex-row justify-start items-center border border-zinc-500 rounded-lg w-[90vw] pl-3">
        <Image className="w-5 h-5 " source={require("../assets/search.png")} />

        <TextInput
          className=" font-normal text-xs placeholder:text-xs h-9  pl-2 text-white "
          placeholder="Discover your favorite Zules "
          onChangeText={(e) => setQuery(e)}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <TagCard/>
    </View>
  );
};

export default Discover;
