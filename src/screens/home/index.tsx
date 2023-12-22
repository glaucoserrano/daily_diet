
import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Typography } from "@components/Typograph";
import { Card } from "@components/Card";
import { View } from "react-native";
import { Button } from "@components/Button";
import { Plus } from "phosphor-react-native";
import { Meal } from "@components/Meal";
import { SectionList } from "react-native";


export function HomeScreen(){
  const meals=[
    {
      title:'21.12.2023',
      data:[{
          id:'01',
          hour:'21:10',
          description:'Cerveja Antartica Boa',
          isOnTheDiet: false
        },
        {
          id:'03',
          hour:'22:30',
          description:'Deck Burger',
          isOnTheDiet: false
        },
        {
          id:'04',
          hour:'21:30',
          description:'Deck Burger',
          isOnTheDiet: false
        },
        {
          id:'05',
          hour:'22:30',
          description:'Deck Burger',
          isOnTheDiet: false
        },
        {
          id:'06',
          hour:'22:30',
          description:'Deck Burger',
          isOnTheDiet: false
        },
        {
          id:'07',
          hour:'22:30',
          description:'Deck Burger',
          isOnTheDiet: false
        }
      ]
    },
    {
      title:'20.12.2023',
      data:[{
        id:'02',
        hour:'12:00',
        description:'Arroz, Feijão, Frango',
        isOnTheDiet: true
      }]
    }
  ]
  return(
  <Container>
    
    <Header />

    <Card 
      title="90,86%" 
      subtitle="das refeições dentro da dieta" 
      onPress={() => console.log('Clicou')}
      bg="green"
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

    <SectionList 
      sections={meals}
      keyExtractor={(item) => item.id}
      renderItem={({item})=>
      <Meal 
        key={item.id} 
        id={item.id} 
        hour={item.hour} 
        description={item.description} 
        isOnTheDiet = {item.isOnTheDiet}
        onPress={() => console.log(`Clicou na refeição ${item.id}`)}
      />
      }
      renderSectionHeader={({section: {title}}) =>(
        <Typography
          fontSize="title_sm"
          fontFamily="bold"
          color="gray_1"
          style={{marginBottom: 8, marginTop:32}}
        >
          {title}
        </Typography>
      )}
      style={{marginBottom:32}}
      contentContainerStyle={
        meals.length===0 &&{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }
      }
      ListEmptyComponent={() =>(
        <>
          <Typography>Não há refeições cadastradas ainda</Typography>
          <Typography>Vamos cadastrar refeições hoje?</Typography>
        </>
      )}
      showsVerticalScrollIndicator={false}
    />
    
  </Container>
  )}