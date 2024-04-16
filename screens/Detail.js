import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Icon } from "../components/Coin";
import { useQuery } from "@tanstack/react-query";
import { history, info } from "../api";

const Container = styled.ScrollView``;

const Detail = ({
  navigation,
  // route를 통해서 params를 받아올 수 있음
  route: {
    params: { symbol, id },
  },
}) => {
  // console.log(route); // {"key": "Detail-gZS55BUnCK3ulrjlyoTwQ", "name": "Detail", "params": {"symbol": "BTC"}, "path": undefined}
  useEffect(() => {
    // navigation에서 사용할 수 있는 setOptions를 이용해 title을 변경
    navigation.setOptions({
      // headerTitle은 string뿐만 아니라 element(component)를 header에 넣어줄 수도 있음
      headerTitle: () => (
        <Icon
          source={{
            uri: `https://static.coinpaprika.com/coin/${id}/logo.png`,
          }}
        />
      ),
    });
  }, []);
  // queryKey가 어떤 코인을 클릭해도 coinInfo로 같기 때문에 마지막에 불러온 것만 캐싱됨
  const { isLoading: infoLoading, data: infoData } = useQuery({
    queryKey: "coinInfo",
    queryFn: () => info(id),
  });
  console.log(infoData);
  // 이게 더 좋음!
  // queryKey가 ["coinHistory", id]로 이루어져 있어 클릭한 모든 코인이 캐싱됨
  const { isLoading: historyLoading, data: historyData } = useQuery({
    queryKey: ["coinHistory", id],
    queryFn: history,
  });
  return <Container />;
};

export default Detail;
