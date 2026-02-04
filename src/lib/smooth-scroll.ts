export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = element.offsetTop;
    window.scrollTo({ top: offset, behavior: 'auto' });
  }
};