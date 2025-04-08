import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Contact",
            title: "Contact",
          }}
        />
        <Drawer.Screen
          name="address"
          options={{
            drawerLabel: "Address",
            title: "Address",
          }}
        />
        <Drawer.Screen
          name="number"
          options={{
            drawerLabel: "Number",
            title: "Number",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
