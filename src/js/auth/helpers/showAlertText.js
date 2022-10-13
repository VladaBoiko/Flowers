export function showAlertText(ref, text) {
    ref.textContent = text;
    ref.style.opacity = 1;
    setTimeout(() => {
    ref.style.opacity = 0;
    }, 2500);
}