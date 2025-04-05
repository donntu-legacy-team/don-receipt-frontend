import { generateApi } from 'swagger-typescript-api'

const OPENAPI_SCHEMA_URL = 'http://localhost:3001/api-json'

console.log(process.cwd())

await generateApi({
	name: 'api.ts',
	url: OPENAPI_SCHEMA_URL,
	singleHttpClient: true,
	httpClientType: 'axios',
	extractRequestBody: true,
	extractRequestParams: true,
	extractResponseBody: true,
	extractResponseError: true,
	generateResponses: true,
	generateUnionEnums: true,
	patch: true,
	generateClient: true,
	output: `${process.cwd()}/api/generated`,
})

export default {}
