import { generateApi } from 'swagger-typescript-api'

const OPENAPI_SCHEMA_URL = 'http://localhost:3001/api-json'

generateApi({
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
	output: `${process.cwd()}/src/shared/api/generated`,
})