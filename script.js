document.addEventListener('DOMContentLoaded', function () {
    console.log("Page loaded and DOM is ready.");

    const images = document.querySelectorAll('#gallery img');

    // Add event listeners to each image
    images.forEach((image, index) => {
        // onmouseover Event
        image.addEventListener('mouseover', () => {
            console.log(`Mouse over image ${index + 1}`);
            image.style.borderColor = "orange";
        });

        // onmouseleave Event
        image.addEventListener('mouseleave', () => {
            console.log(`Mouse left image ${index + 1}`);
            image.style.borderColor = "transparent";
        });

        // onfocus Event
        image.addEventListener('focus', () => {
            console.log(`Image ${index + 1} is focused.`);
            image.style.borderColor = "green";
        });

        // onblur Event
        image.addEventListener('blur', () => {
            console.log(`Image ${index + 1} lost focus.`);
            image.style.borderColor = "transparent";
        });
    });

    // onload Event
    window.addEventListener('load', function () {
        console.log("Window has loaded!");
        addTabFocusAttribute();
    });

    // Function to add tabfocus attribute
    function addTabFocusAttribute() {
        images.forEach((image) => {
            image.setAttribute('tabindex', '0');
            console.log(`Tabindex added to image.`);
        });
    }
});
