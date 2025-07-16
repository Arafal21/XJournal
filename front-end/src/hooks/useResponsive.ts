// example of using:
// const { isMobile, isDesktop, isMobileOrTablet } = useResponsive();

//   return (
//       <div>
//            {isMobile && <MobileMenu />}
//            {isDesktop && <DesktopSidebar />}
//            {isMobileOrTablet && <MobileOrTabletBanner />}
//       </div>

import { useMediaQuery } from './useMediaQuery';

export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'largeDesktop';

export type Breakpoints = {
	[key in DeviceType]: number;
};

export const breakpoints: Breakpoints = {
	mobile: 768,
	tablet: 991,
	desktop: 992,
	largeDesktop: 1440,
};

interface ResponsiveValues {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
	isLargeDesktop: boolean;
	isMobileOrTablet: boolean;
	isTabletOrDesktop: boolean;
}

export function useResponsive(): ResponsiveValues {
	const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile}px)`);
	const isTablet = useMediaQuery(`(min-width: ${breakpoints.mobile + 1}px) and (max-width: ${breakpoints.tablet}px)`);
	const isDesktop = useMediaQuery(
		`(min-width: ${breakpoints.tablet + 1}px)`,
	);
	const isLargeDesktop = useMediaQuery(`(min-width: ${breakpoints.largeDesktop}px)`);

	const isMobileOrTablet = isMobile || isTablet;
	const isTabletOrDesktop = isTablet || isDesktop;

	return {
		isMobile,
		isTablet,
		isDesktop,
		isLargeDesktop,
		isMobileOrTablet,
		isTabletOrDesktop,
	};
}
