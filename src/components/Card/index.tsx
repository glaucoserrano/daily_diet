import { Typography } from "@components/Typograph";
import { ButtonToStaticLeft, ButtonToStaticRight, Container, IconArrowLeft, IconArrowUpRight } from "./styles";
import { ViewProps } from "react-native";
import { FontSizeTitle } from "@components/Typograph/types";

export type TextSize = {  titleFontSize?: FontSizeTitle }

export type CardColor ={   bg?: 'gray' | 'green' | 'red' }

export type ButtonFLoatProps = { iconPosition ?: 'left' | 'right'}

type CardProps  = ViewProps & CardColor & TextSize & ButtonFLoatProps & {
  title: string,
  subtitle: string,
  showIconButton?: boolean,
  onPress?: ()=> void
}

export function Card({
  bg='gray',
  title,
  subtitle,
  titleFontSize="title_lg",
  iconPosition ="right",
  showIconButton = true,
  ...props
} :CardProps){
  return(
    <Container  bg={bg} 
      {...props}
    >
      { showIconButton ? iconPosition ==='left' ? (
        <ButtonToStaticLeft onPress={props.onPress}>
          <IconArrowLeft bg={bg} />
        </ButtonToStaticLeft>
      ):(
        <ButtonToStaticRight  onPress={props.onPress}>
          <IconArrowUpRight bg={bg} />
        </ButtonToStaticRight>
      ) : ""}

      <Typography 
        fontFamily="bold" 
        fontSize={titleFontSize}
        lineHeight="lg"
      >
        {title}
      </Typography>

      <Typography
        color="gray_2"
        fontSize="body_sm"
        textAlign="center"
      >
        {subtitle}
      </Typography>

    </Container>
  )
}