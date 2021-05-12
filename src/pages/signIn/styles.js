import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
`;

const Logo = styled.Image`
  height: 30%;
  margin-bottom: 40px;
`;

const Input = styled.TextInput`
  padding-bottom: 20px;
  padding-left: 15px;
  border-radius: 5px;
  background-color: #FFF;
  align-self: stretch;
  margin-bottom: 15px;
  margin-left: 20px;
  font-size: 16px;
`;

const ErrorMessage = styled.Text`
  text-align: center;
  color: #ce2029;
  font-size: 16px;
  margin-bottom: 20px;
  margin-left: 15px;
`;

const Button = styled.TouchableHighlight`
  padding: 20px;
  border-radius: 5px;
  background-color: #FC6663;
  align-self: stretch;
  margin: 15px;
  margin-left: 20px;
`;

const ButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  margin-top: 20px;
`;

const SignUpLinkText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export { Container, Logo, Input, ErrorMessage, Button, ButtonText, SignUpLink, SignUpLinkText };