export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ["/admin", "/api"],
        },
        sitemap: 'https://bps-legal.vercel.app/sitemap.xml',
    }
}