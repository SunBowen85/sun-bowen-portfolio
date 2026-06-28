export type NavbarModeState = {
  isCollapsed: boolean;
  isExpandedByClick: boolean;
};

export type NavbarScrollInput = {
  currentScrollY: number;
  lastScrollY: number;
  previous: NavbarModeState;
  threshold?: number;
};

export function getNextNavbarState({
  currentScrollY,
  lastScrollY,
  previous,
  threshold = 2,
}: NavbarScrollInput): NavbarModeState {
  if (currentScrollY <= 0) {
    return { isCollapsed: false, isExpandedByClick: false };
  }

  const scrollDelta = currentScrollY - lastScrollY;

  if (scrollDelta > threshold) {
    return { isCollapsed: true, isExpandedByClick: false };
  }

  if (scrollDelta < -threshold) {
    return { isCollapsed: false, isExpandedByClick: false };
  }

  return previous;
}
