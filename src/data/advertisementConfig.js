export const greaterThan1422 = [8, 11];
export const greaterThan1262 = [7, 10];
export const greaterThan768 = [3, 7];

export function whereToPutAdvertisement(
  currentWidth,
  currentAddvertisementConfig,
  setCurrentAddvertisementConfig,
  setHorizontalAdvertisement
) {
  if (currentWidth < 1422 && currentWidth >= 1262) {
    if (currentAddvertisementConfig !== greaterThan1262) {
      setCurrentAddvertisementConfig(greaterThan1262);
      setHorizontalAdvertisement(true);
    }
  } else if (currentWidth < 1262) {
    if (currentAddvertisementConfig !== greaterThan768) {
      setCurrentAddvertisementConfig(greaterThan768);
      setHorizontalAdvertisement(true);
    }
  } else if (currentWidth > 1422) {
    if (currentAddvertisementConfig !== greaterThan1422) {
      setCurrentAddvertisementConfig(greaterThan1422);
      setHorizontalAdvertisement(false);
    }
  }
}
