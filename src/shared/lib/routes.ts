export enum ROUTES {
	SIGN_IN = '/sign-in',
	SIGN_UP = '/sign-up',
	HOME = '/',
	MY_PROFILE = '/profile/my',
	MY_DRAFTS = '/profile/my/drafts',
	RECEIPT = '/receipt',
}

export const buildMyDraftRoute = (id: number) => {
	return `${ROUTES.MY_DRAFTS}/${id}`
}

export const buildReceiptRoute = (id: number) => {
	return `${ROUTES.RECEIPT}/${id}`
}