import background from '../../../../public/background.png';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LogoImage,
} from '../styles/loginScreen.styles';

export const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src={background} />
      <ContainerLogin>
        <LogoImage src="./logo.png" />
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};
