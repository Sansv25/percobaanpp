document.addEventListener("DOMContentLoaded", () => {
    const blobRefs = [
        document.getElementById("blob1"),
        document.getElementById("blob2"),
        document.getElementById("blob3"),
        document.getElementById("blob4")
    ];

    const initialPositions = [
        { x: -4, y: 0 },
        { x: -4, y: 0 },
        { x: 20, y: -8 },
        { x: 20, y: -8 },
    ];

    let currentScroll = 0;
    let requestId;

    const handleScroll = () => {
        const newScroll = window.pageYOffset;
        currentScroll = newScroll;

        blobRefs.forEach((blob, index) => {
            const initialPos = initialPositions[index];

            // Calculating movement in both X and Y direction
            const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340; // Horizontal movement
            const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40; // Vertical movement

            const x = initialPos.x + xOffset;
            const y = initialPos.y + yOffset;

            // Apply transformation with smooth transition
            blob.style.transform = `translate(${x}px, ${y}px)`;
            blob.style.transition = "transform 1.4s ease-out";
        });

        requestId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('welcome-screen').style.display = 'none';
    }, 4000);
});
