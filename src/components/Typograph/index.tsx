import { TextProps } from "react-native";
import { Container } from "./styles";
import theme from "src/theme";
import  * as T from "./types";

export type TypographyStyles ={
  textAlign?: T.TextAlign,
  fontFamily?: T.FontFamily,
  lineHeight?: T.LineHeight,
  fontSize?: T.FontSizes,
  color?: T.Colors

}

type TypographyProps = TextProps & TypographyStyles 
export function Typography({children,...rest} : TypographyProps){
  return(
    <Container {...rest}>
      {children}
    </Container>
  )
}