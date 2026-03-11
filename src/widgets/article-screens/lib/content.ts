interface Anchor {
    name: string;
    hash: string;
}

export const getArticleAnchor = (title: string) => {
    return title.toLowerCase().replace(/([\._-]|\s)/gi, '-');
};

/**
 * Extracts heading links from MDX markdown content for table-of-contents navigation.
 * Parses ## headings from the raw markdown string.
 */
export const getArticleLinks = (content: string): Anchor[] => {
    const links: Anchor[] = [];
    const headingRegex = /^#{2,6}\s+(.+)$/gm;
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const text = match[1].trim();
        links.push({
            name: text,
            hash: getArticleAnchor(text)
        });
    }

    return links;
};
