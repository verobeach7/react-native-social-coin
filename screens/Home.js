import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { coins } from "../api";
import { ActivityIndicator, View } from "react-native";
import { BLACK_COLOR } from "../colors";
import Coin from "../components/Coin";

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
`;
const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${BLACK_COLOR};
`;

const List = styled.FlatList`
  padding: 20px 10px;
  width: 100%;
`;

// 서버에서 이미지를 받아오는 경우 사이즈를 지정해줘야 함
const Icon = styled.Image`
  border-radius: 20px;
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const Home = () => {
  const { isLoading, data } = useQuery({ queryKey: ["coins"], queryFn: coins });
  const [cleanData, setCleanData] = useState([]);
  useEffect(() => {
    if (data) {
      setCleanData(
        data.filter((coin) => coin.rank != 0 && coin.is_active && !coin.is_new)
      );
    }
  }, [data]);
  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator color="white" size="large" />
      </Loader>
    );
  }
  return (
    <Container>
      <List
        data={cleanData}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Coin index={index} symbol={item.symbol} id={item.id} />
        )}
      />
    </Container>
  );
};

export default Home;
