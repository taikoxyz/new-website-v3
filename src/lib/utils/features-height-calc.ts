export const featuresHeightCalc = (className = ".features-item") => {
    const allItems = Array.from(
        document.querySelectorAll(className)
    ) as HTMLElement[];

    // Reset heights
    allItems.forEach((el) => {
        el.style.height = "";
        el.style.marginTop = "";
    });

    if (window.innerWidth > 991) {
        let maxHeight = 0;
        allItems.forEach((el) => {
            if (el.offsetHeight > maxHeight) {
                maxHeight = el.offsetHeight;
            }
        });
        allItems.forEach((el) => (el.style.height = `${maxHeight}px`));
    }
};
