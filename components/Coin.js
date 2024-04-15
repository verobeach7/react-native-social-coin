import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

// 애니메이션 2. anmatedComponent로 만들어주기
const Wrapper = styled(Animated.createAnimatedComponent(View))`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 5px;
  align-items: center;
`;
const CoinName = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const Icon = styled.Image`
  border-radius: 20px;
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
`;

const Coin = ({ symbol, index, id }) => {
  // 원래 navigation은 스크린의 속성으로 사용함
  // But!! Coin Component 안에 있기 때문에 navigation을 가지고 있지 않음
  // useNavigation() Hook을 이용해 해결
  const navigaiton = useNavigation();
  // 애니메이션 1. opacity 설정
  const opacity = useRef(new Animated.Value(0)).current;
  // 애니메이션 4. useEffect를 이용하여 애니메이션 설정
  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
      // 애니메이션 5. 각각의 item마다 100ms 뒤에 나타나도록 함
      delay: index * 100,
    }).start();
  }, []);
  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });
  return (
    <TouchableOpacity
      style={{ flex: 0.31 }}
      onPress={() => navigaiton.navigate("Detail", { symbol })}
    >
      {/* 애니메이션 3. Wrapper에 opacity 연결 */}
      <Wrapper style={{ opacity, transform: [{ scale }] }}>
        <Icon
          source={{
            uri: `https://static.coinpaprika.com/coin/${id}/logo.png`,
          }}
        />
        <CoinName>{symbol}</CoinName>
      </Wrapper>
    </TouchableOpacity>
  );
};
export default React.memo(Coin);
