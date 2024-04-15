import React, { useEffect } from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView``;

const Detail = ({
  navigation,
  // route를 통해서 params를 받아올 수 있음
  route: {
    params: { symbol },
  },
}) => {
  // console.log(route); // {"key": "Detail-gZS55BUnCK3ulrjlyoTwQ", "name": "Detail", "params": {"symbol": "BTC"}, "path": undefined}
  useEffect(() => {
    // navigation에서 사용할 수 있는 setOptions를 이용해 title을 변경
    navigation.setOptions({
      title: symbol,
      // iOS에서만 사용 가능한 옵션(타이틀이 크게 나오다가 스크롤하면 타이틀이 작아지는 효과)
      headerLargeTitle: true,
    });
  });
  return <Container />;
};

export default Detail;
