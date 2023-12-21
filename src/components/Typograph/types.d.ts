import theme from "src/theme";

export type TextAlign = 'auto' | 'center' |'justify'|'left'|'right'

export type FontFamily= keyof typeof theme.font_family

export type LineHeight= keyof typeof theme.line_height

export type FontSizeType = keyof typeof theme.font_size

export type Sizes = keyof typeof theme.font_size.body

export type FontSizeTitle = 
|'title_xs'
|'title_sm'
|'title_md'
|'title_lg'

export type FontSizesBody = 
  |'body_xs'
  |'body_sm'
  |'body_md'
  |'body_lg'
  
export type FontSizes = FontSizeTitle | FontSizesBody

export type TypeColors = keyof typeof theme.colors

export type BaseColors = keyof typeof theme.colors.base

export type BrandColors = keyof typeof theme.colors.brand

export type Colors = BaseColors | BrandColors