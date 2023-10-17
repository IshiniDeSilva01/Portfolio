function setActiveStyle(color) {
    alternateStyles.forEach(style); {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    }
}