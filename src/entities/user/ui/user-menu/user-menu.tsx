import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu'
import { LogOutIcon, UserRoundCogIcon, FilesIcon } from 'lucide-react'
import { ReactNode } from 'react'

export type UserMenuProps = {
	menuTrigger: ReactNode,
	onSignOutClick?: () => void,
	onMyProfileClick?: () => void,
	onMyDraftsClick?: () => void,
}

export const UserMenu = (props: UserMenuProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				{props.menuTrigger}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{props.onMyProfileClick && (
					<DropdownMenuItem
						onClick={props.onMyProfileClick}
					>
						<UserRoundCogIcon size="20px"/>
						<span>Мой профиль</span>
					</DropdownMenuItem>
				)}
				{props.onMyDraftsClick && (
					<DropdownMenuItem
						onClick={props.onMyDraftsClick}
					>
						<FilesIcon size="20px"/>
						<span>Мои черновики</span>
					</DropdownMenuItem>
				)}
				<DropdownMenuSeparator/>
				{props.onSignOutClick && (
					<DropdownMenuItem
						variant="destructive"
						onClick={props.onSignOutClick}
					>
						<LogOutIcon size="20px"/>
						<span>Выйти</span>
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}