import React from "react";
import styled from "styled-components";

const Container = styled.View``;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;
const BtnTxt = styled.Text``;
// 스크린은 기본적으로 navigation 속성을 가지고 있으며, navigate 함수를 포함하고 있음
const Login = ({ navigation: { navigate } }) => (
  <Container>
    <Text>
      Don't have an account?{" "}
      <Btn onPress={() => navigate("Join")}>
        <BtnTxt>Join</BtnTxt>
      </Btn>
    </Text>
  </Container>
);

export default Login;
