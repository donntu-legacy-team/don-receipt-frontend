import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu'
import { LogOutIcon } from 'lucide-react'
import { ReactNode } from 'react'

export type UserMenuProps = {
	menuTrigger: ReactNode,
	onSignOutClick: () => void,
}

export const UserMenu = (props: UserMenuProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				{props.menuTrigger}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					onClick={props.onSignOutClick}
				>
					<LogOutIcon/>
					<span>Выйти</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}