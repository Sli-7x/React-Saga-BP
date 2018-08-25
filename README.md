# Typescript SSR React + redux-saga boilerplate

### How to start

- `npm i` install dependencies

##### development

- `npm run dev` Start development

##### production

- `npm run build:client` Build client for production
- `npm run server` start server production

## Todo

- [x] server side rendering
- [x] server side caching
- [ ] ssr pre-fetch sagas
- [ ] code split
- [x] typescript
- [x] styled-components
- [x] styled-components theme (another folder or move to own package?)
- [x] react router v4
- [x] redux
- [x] redux-saga
- [x] express.js
- [x] static folder
- [x] react-helmet
- [x] tests
- [x] error component
- [x] webpack 4

#### Notes

\*before running `npm run build:client`, need to change in tsconfig.json `module: "esnext"`for codesplit
