import { Layout } from "@components/Layout";
import { Container, Row } from "./styles";
import { Card } from "@components/Card";
import { Typography } from "@components/Typograph";

export function StatisticsScreen(){
  return(
    <Container>
      <Layout 
        bg="green"
        header={
          <Card 
            title="90,86%"
            subtitle="das refeições dentro da dieta"
            iconPosition="left"
            bg="green"
            onPress={() => console.log("Voltar")}
          />  
      }
        
      >
        <Typography
          fontFamily="bold"
          fontSize="title_xs"
          style={{marginBottom:20}}
        >
          Estatísticas Gerais
        </Typography>
        <Row>
          <Card  
            title="22"
            subtitle="melhor sequência de pratos dentro da dieta"
            showIconButton={false}
            bg="gray"
          />
        </Row>
        <Row>
          <Card 
            title="109"
            subtitle="refeições registradas"
            showIconButton={false}
            bg="gray"
          />
        </Row>
        <Row>
          <Card 
            title="99"
            subtitle="refeições dentro da dieta"
            showIconButton={false}
            bg="gray"
            style={{width:'48%'}}
          />
          <Card 
            title="10"
            subtitle="refeições fora da dieta"
            showIconButton={false}
            bg="red"
            style={{width:'48%'}}
          />
        </Row>
      </Layout>
    </Container>
  )
}