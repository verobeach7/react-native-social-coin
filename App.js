import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import InNav from "./navigators/InNav";
import OutNav from "./navigators/OutNav";

export default function App() {
  const [isLoggenIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Firebase Authentification 상태 변화가 감지되면 다음을 실행함
    auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  return (
    <NavigationContainer>
      {/* isLoggenIn 상태에 따라 다른 Nav를 실행 */}
      {isLoggenIn ? <InNav /> : <OutNav />}
    </NavigationContainer>
  );
}
