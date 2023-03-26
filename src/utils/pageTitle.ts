import config from '@/config/index'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${config.appName}`
    }
    return `${config.appName}`
}
