export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${import.meta.env.VITE_LOGO_NAME}`
    }
    return `${import.meta.env.VITE_LOGO_NAME}`
}