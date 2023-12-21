
import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Typography } from "@components/Typograph";
import { Card } from "@components/Card";
import { View } from "react-native";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";

export function HomeScreen(){
  return(
  <Container>
    
    <Header />

    <Card 
      title="90,86%" 
      subtitle="das refeições dentro da dieta" 
      onPress={() => console.log('Clicou')}
    />
    <View style={{marginTop:40}}>
      <Typography
        fontSize="title_sm"
        style={{marginBottom:8}}
      >
        Refeições
      </Typography>
      <Button 
        icon={<Plus color="white" size={18} />}
        title="Nova refeição"  
        onPress={() => console.log('Nova Refeição')}
      />
    </View>
  </Container>
  )}