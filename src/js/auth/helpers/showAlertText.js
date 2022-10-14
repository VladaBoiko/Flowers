export function showAlertText(alertRef, textContent) {
  alertRef.textContent = textContent;
  alertRef.style.opacity = 1;
  setTimeout(() => {
    alertRef.style.opacity = 0;
  }, 2500);
}
