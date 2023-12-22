import { StatusBar} from 'react-native';
import {useFonts,NunitoSans_400Regular,NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'
import { HomeScreen } from '@screens/home';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Loading } from '@components/Loading';
import { StatisticsScreen } from '@screens/statistics';


export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content" 
        translucent 
        backgroundColor="transparent" 
      />
      {fontsLoaded ? <StatisticsScreen /> :  <Loading />}
    </ThemeProvider>
  );
}