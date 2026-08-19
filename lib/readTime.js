export function calculateReadTime(content) {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = content.trim().split(/\s+/).length; 
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute)); // Ensure at least 1 minute
}