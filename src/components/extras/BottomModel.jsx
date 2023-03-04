import BottomSheet from "react-native-simple-bottom-sheet";

function App() {
    const panelRef = useRef(null);
  
    return (
      <View style={{flex: 1}}>
        <View>Your content</View>
        <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
          <Text>Toggle</Text>
        </TouchableOpacity>
        <BottomSheet ref={ref => panelRef.current = ref}>
          <Text style={{paddingVertical: 20}}>
            Some random content
          </Text>
        </BottomSheet>
      </View>
    );
  }
