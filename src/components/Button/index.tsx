import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

export type ButtonType ={
  type?:'solid'|'outline'
  isActive?: boolean
}

type ButtonProps = TouchableOpacityProps & ButtonType & {
  title: string
  icon?: React.ReactNode
}

export function Button( {
  icon,
  title,
  type='solid',
  isActive=true,
  ...props
} :ButtonProps){
  return(
    <Container type={type} isActive={isActive} disabled={isActive? false : true} {...props}>
      {icon && icon}
      <Title type={type}>{title}</Title>
    </Container>
  )
}