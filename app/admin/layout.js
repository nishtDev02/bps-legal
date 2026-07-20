import React from "react"
import "../[locale]/globals.css"

export default function AdminLayout({ children }) {
    return (
        <div>
            <header className="bg-gray-800 text-white p-4">
                <strong className="text-xl">BPS Legal - Admin Panel</strong>
            </header>
            <main className="mt-4">
                {children}
            </main>
        </div>
    )
}