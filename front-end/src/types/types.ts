export interface ActiveIconProps {
	isActive?: boolean;
}

export interface SideNavItemButtonProps {
	itemPath: string;
	children: React.ReactNode;
	icon: React.ElementType;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	className?: string;
	isRowForced?: boolean;
}

export interface NavLinkTypes {
	href: string;
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
	isRowForced?: boolean;
}

export interface DropdownButtonProps {
	isOpen?: boolean;
	className?: string;
}