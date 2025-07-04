export const getTextSize = (size: TSize) => {
  switch (size) {
    case 'sm':
      return 'text-sm';
    case 'md':
      return 'text-base';
    case 'lg':
      return 'text-lg';
    default:
      return 'text-base'; // Fallback to base size if no match
  }
}