# ReusableUITR React component for typewriter effect

A lightweight, fully-typed React component for creating a typewriter effect with customizable options.

## Demo

Click <a href="https://stackblitz.com/edit/vitejs-vite-jannue?file=src%2FApp.tsx" target="_blank">here</a> for a live demo.

## Installation

Install `@reusable-ui-tr/react-type-writer-effect` with npm:

```
npm i @reusable-ui-tr/react-type-writer-effect
```

or with yarn / pnpm:

```
yarn add @reusable-ui-tr/react-type-writer-effect
pnpm add @reusable-ui-tr/react-type-writer-effect
```

## Usage

Import the `TypeWriterEffect` component in your React component:

```tsx
import TypeWriterEffect from "@reusable-ui-tr/react-type-writer-effect";
```

Then use it:

```tsx
<TypeWriterEffect
  blinkDuration="2s"
  cursorColor="blue"
  fontFamily="Lucida Console"
  fontSize="20px"
  highlightColor="green"
  text="Hello World!"
  textColor="white"
  textWrapper="p"
  typingSpeed="slow"
/>
```

### Looping

Set `loopInterval` to make the effect restart automatically after it finishes. The value is the pause before it starts over:

```tsx
<TypeWriterEffect text="I repeat myself." loopInterval="2s" />
```

### Re-triggering on prop change

The animation runs when the component mounts. If you swap the `text` at runtime (for example, when changing language) and want it to type out again from scratch, give the component a `key` tied to that value so React remounts it:

```tsx
<TypeWriterEffect key={lang} text={tagline} />
```

## Properties

| Property Name      | Property Type | Usage                                                                                                                                                                              |        Default Value        | Required |
| :----------------- | :------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :------: |
| blinkDuration      | String        | Blink duration of the cursor in seconds or milliseconds (Example values: '1s', '10ms' etc.)                                                                                        |            '1s'             |    no    |
| cursorColor        | String        | All CSS legal color values are supported. (Example values: '#00ff00', #00ff0080, rgb(0, 255, 0), rgba(0, 255, 0, 0.3), hsl(120, 60%, 70%), hsla(120, 60%, 70%, 0.3), 'green' etc.) |           'black'           |    no    |
| fontFamily         | String        | Font family of the text                                                                                                                                                            | 'Roboto, Arial, sans-serif' |    no    |
| fontSize           | String        | Font size of the text                                                                                                                                                              |           '16px'            |    no    |
| highlightColor     | String        | Highlight (background) color of the text                                                                                                                                           |        'transparent'        |    no    |
| loopInterval       | String        | Time interval before restarting the effect, in seconds or milliseconds (Example values: '1s', '10ms' etc.). Omit to run once.                                                      |          undefined          |    no    |
| showCursorOnFinish | Boolean       | Whether the cursor should remain visible (blinking) after the effect finishes.                                                                                                     |            false            |    no    |
| text               | String        | Content of the text to type out                                                                                                                                                    |            none             |   yes    |
| textColor          | String        | All CSS legal color values are supported. (Example values: '#00ff00', #00ff0080, rgb(0, 255, 0), rgba(0, 255, 0, 0.3), hsl(120, 60%, 70%), hsla(120, 60%, 70%, 0.3), 'green' etc.) |           'black'           |    no    |
| textWrapper        | String        | Type of HTML element used to wrap the text (any valid HTML tag name)                                                                                                               |           'code'            |    no    |
| typingSpeed        | String        | Typing speed. Only these keywords are valid: 'slowest', 'slow', 'normal', 'fast', 'fastest'                                                                                        |          'normal'           |    no    |

> **Type note:** `blinkDuration` and `loopInterval` are typed as a `` `${number}${"s" | "ms"}` `` template literal, so TypeScript will accept values like `"1s"` or `"250ms"` and flag anything else.

## Peer Dependencies

These must be present in your project (any modern React app already has them):

- [react](https://www.npmjs.com/package/react) (>= 16.8.0)
- [react-dom](https://www.npmjs.com/package/react-dom) (>= 16.8.0)

## License

MIT (c) Semih Ataman
