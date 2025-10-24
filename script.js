document.addEventListener("DOMContentLoaded", () => {
	const themeToggle = document.getElementById("theme-toggle");
	const currentTheme =
		localStorage.getItem("theme") ||
		(window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light");

	if (currentTheme) {
		document.documentElement.setAttribute("data-theme", currentTheme);
	}

	themeToggle.addEventListener("click", () => {
		let theme = document.documentElement.getAttribute("data-theme");
		if (theme === "dark") {
			theme = "light";
		} else {
			theme = "dark";
		}
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	});
});
