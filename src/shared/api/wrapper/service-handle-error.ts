export type HandleErrorDecoratorParams = {
	throwError?: boolean,
}

export const ServiceHandleError = <T, R extends () => T>(defaultValueConstructor?: R | void, params?: HandleErrorDecoratorParams) => {
	return function (target: object, key: string, descriptor: PropertyDescriptor) {
		const original = descriptor.value

		descriptor.value = async function (...args: unknown[]) {
			try {
				return await original.apply(this, args)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {

				if (params?.throwError) {
					throw error
				}

				if (defaultValueConstructor) {
					return defaultValueConstructor()
				}
			}
		}

		return descriptor
	}
}