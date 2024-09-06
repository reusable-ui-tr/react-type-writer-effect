# ReusableUITR React component for typewriter effect

A React component for creating a typewriter effect with customizable options.

## Demo

Click <a href="https://stackblitz.com/edit/vitejs-vite-jannue?file=src%2FApp.tsx" target="_blank">here</a> for a live demo.

## Installation

1. Install '@reusable-ui-tr/react-type-writer-effect' with npm

```
npm i @reusable-ui-tr/react-type-writer-effect
```

2. Import TypeWriterEffect component in your react component

```javascript
import TypeWriterEffect from "@reusable-ui-tr/react-type-writer-effect";
```

3. Use 'TypeWriterEffect' component

```html
<TypeWriterEffect
  blinkDuration="2s"
  cursorColor="blue"
  fontFamily="Lucida Console"
  fontSize="20px"
  highlightColor="green"
  text="Hello World!"
  textColor="white"
  textWrapperElementType="p"
  typingSpeed="slow"
/>
```

### Properties

| Property Name             | Property Type | Usage                                                                                                                                                                              |        Default Value        | Required |
| :------------------------ | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :------: |
| blinkDuration            | String        | Blink duration of typewriter effect in seconds or milliseconds (Example values: '1s', '10ms' etc.)                                                                                 |            '1s'             |    no    |
| cursorColor              | String        | All CSS legal color values are supported. (Example values: '#00ff00', #00ff0080, rgb(0, 255, 0), rgba(0, 255, 0, 0.3), hsl(120, 60%, 70%), hsla(120, 60%, 70%, 0.3), 'green' etc.) |           'black'           |    no    |
| fontFamily               | String        | Font family of the text                                                                                                                                                            | 'Roboto, Arial, sans-serif' |    no    |
| fontSize                 | String        | Font size of the text                                                                                                                                                              |           '16px'            |    no    |
| highlightColor           | String        | Highlight color of the text                                                                                                                                                        |        'transparent'        |    no    |
| text                      | String        | Content of the text                                                                                                                                                                |            none             |   yes    |
| textColor                | String        | All CSS legal color values are supported. (Example values: '#00ff00', #00ff0080, rgb(0, 255, 0), rgba(0, 255, 0, 0.3), hsl(120, 60%, 70%), hsla(120, 60%, 70%, 0.3), 'green' etc.) |           'black'           |    no    |
| textWrapperElementType | String        | Type of HTML element to wrap text (All HTML elements are valid)                                                                                                                    |           'code'            |    no    |
| typingSpeed              | String        | Typing speed of typewriter effect (Only following keywords are valid: 'slowest', 'slow', normal', 'fast', 'fastest')                                                               |          'normal'           |    no    |

## Dependencies

- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [vite-plugin-dts](https://www.npmjs.com/package/vite-plugin-dts)

## Dev Dependencies

- [@eslint/js](https://www.npmjs.com/package/@eslint/js)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [@types/react](https://www.npmjs.com/package/@types/react)
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom)
- [@vitejs/plugin-react-swc](https://www.npmjs.com/package/@vitejs/plugin-react-swc)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
- [globals](https://www.npmjs.com/package/globals)
- [typescript](https://www.npmjs.com/package/typescript)
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)
- [vite](https://www.npmjs.com/package/vite)