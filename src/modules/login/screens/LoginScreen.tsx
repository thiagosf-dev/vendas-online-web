import background from '../../../../public/background.png';
import { Input } from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

export const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <Input title={'Usuário'} />
          <Input title={'Senha'} />
        </LimitedContainer>
      </ContainerLogin>
      <BackgroundImage src={background} />
    </ContainerLoginScreen>
  );
};
