import React, { useRef, useState } from "react";
import { TextInput } from "react-native";
import styled from "styled-components";

const Container = styled.View``;
const Text = styled.Text``;
const Join = () => {
  // 1. useRef 생성
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // 4. 이전 컴포넌트에서 onSubmitEditing을 통해 컨트롤
  const onSubmitEditing = () => {
    // 5. focus하고자 하는 컴포넌트 ref를 설정
    passwordInput.current.focus();
  };
  return (
    <Container>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        value={email}
        returnKeyType="next"
        onChangeText={(text) => setEmail(text)}
        // 3. onSubmit시 실행하고자 하는 함수를 넣어줌
        onSubmitEditing={onSubmitEditing}
      />
      <TextInput
        // 2. ref에 컨트롤하고자 하는 useRef를 넣어줌
        ref={passwordInput}
        placeholder="Password"
        secureTextEntry
        value={password}
        returnKeyType="done"
        onChangeText={(text) => setPassword(text)}
      />
    </Container>
  );
};

export default Join;
