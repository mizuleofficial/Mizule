import { View, Text,ScrollView,ImageBackground, Image } from 'react-native'
import React from 'react'

const WhatsNewcard = () => {
    const zules = [
        {
          name: "Movie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-CJiAmEn-g4yYPB_g92z2Ug5DZTiyTeKEKbhkT7bj7SA0R1YwOBU5l7VfM8pKUBE3Hg&usqp=CAU",
        },
        {
          name: "Movie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-CJiAmEn-g4yYPB_g92z2Ug5DZTiyTeKEKbhkT7bj7SA0R1YwOBU5l7VfM8pKUBE3Hg&usqp=CAU",
        },
        {
          name: "Movie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-CJiAmEn-g4yYPB_g92z2Ug5DZTiyTeKEKbhkT7bj7SA0R1YwOBU5l7VfM8pKUBE3Hg&usqp=CAU",
        },
        {
          name: "Movie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-CJiAmEn-g4yYPB_g92z2Ug5DZTiyTeKEKbhkT7bj7SA0R1YwOBU5l7VfM8pKUBE3Hg&usqp=CAU",
        },
        {
          name: "Movie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-CJiAmEn-g4yYPB_g92z2Ug5DZTiyTeKEKbhkT7bj7SA0R1YwOBU5l7VfM8pKUBE3Hg&usqp=CAU",
        },
        {
          name: "Movie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-CJiAmEn-g4yYPB_g92z2Ug5DZTiyTeKEKbhkT7bj7SA0R1YwOBU5l7VfM8pKUBE3Hg&usqp=CAU",
        },
        {
          name: "Movie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-CJiAmEn-g4yYPB_g92z2Ug5DZTiyTeKEKbhkT7bj7SA0R1YwOBU5l7VfM8pKUBE3Hg&usqp=CAU",
        },
      ];
  return (
    <View>
     <View className="flex flex-row pb-3 justify-between items-center">
     <Text className="text-left text-white text-xl font-semibold pl-1">Whats' New</Text>
     {/* {zules && zules.length > 10 && (
                <View className="">
                  <Text className="text-white">view All</Text>
                </View>
              )} */}
     </View>
        {/* <Text className="text-white ">{JSON.stringify(zules)}</Text> */}
        {zules && zules.length < 0 ? (
          <Text className="flex justify-center items-center text-white">
            No Tags
          </Text>
        ) : (
          <View className="flex flex-row justify-start items-start w-full">
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {zules &&
                zules.map((zule, i) => {
                  if (i >= 10) return;
                  return (
                    <View className="flex justify-center items-center mx-2 w-24 h-28 bg-slate-400">
                    </View>
                  ); 
                })}
            
            </ScrollView>
          </View>
        )}
      </View>
  )
}

export default WhatsNewcard