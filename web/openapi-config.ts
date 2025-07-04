import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../ApiService/Movies.Api.json',
  apiFile: './src/store/api/empty-api.ts',
  apiImport: 'emptySplitApi',
  outputFiles: {
    './src/store/api/generated/weather.ts': {
      filterEndpoints: [/^weather/]
    },
  },
  exportName: 'moviesApi',
  hooks: true,
}

export default config