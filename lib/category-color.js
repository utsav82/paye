export default function getRandomCategoryColor() {
  const colors = [
    "#ef5350", // Red
    "#ec407a", // Pink
    "#ab47bc", // Purple
    "#7e57c2", // Deep purple
    "#5c6bc0", // Indigo
    "#42a5f5", // Blue
    "#29b6f6", // Light blue
    "#26c6da", // Cyan
    "#26a69a", // Teal
    "#66bb6a", // Green
    "#9ccc65", // Light green
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
