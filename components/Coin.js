import React, { useEffect, useReducer, useRef } from "react";
import { Animated, View } from "react-native";
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
    // 애니메이션 3. Wrapper에 opacity 연결
    <Wrapper style={{ flex: 0.31, opacity, transform: [{ scale }] }}>
      <Icon
        source={{
          uri: `https://static.coinpaprika.com/coin/${id}/logo.png`,
        }}
      />
      <CoinName>{symbol}</CoinName>
    </Wrapper>
  );
};
export default React.memo(Coin);
