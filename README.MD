# Marko Primative UI Library

*Note: This is not ready for use in production. Depending on how performance tests go this project may even end up abandoned*

Primitive marko UI components inspired by [rebass](https://rebassjs.org/).

Similar to rebass, this provides the building blocks for creating a design system using Marko with a consistent API that can be used across multiple components.

Uses https://styled-system.com/ and emotion as the css-in-js library.

SSR is built-in to avoid the dreaded Flash Of Unloaded Content (FOUC).

## Running

This is a very unsophisticated repository at the moment.

1. Clone the repo and then run:

```sh
npx @marko/serve .
```

## Testing

TODO

## Contributing

TODO

## PLANS

- Tests (performance, ssr, etc)
- Upload components to bit.dev for isolated consumption
- Rip off the entirety of rebass api https://rebassjs.org/props
- Theming?
- Split the box component into several other components

## License

MIT (Exact same as Marko)
