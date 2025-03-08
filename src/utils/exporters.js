export const exportToHTML = (websiteData) => {
    const { title, content } = websiteData;
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div id="app">${content}</div>
        </body>
        </html>
    `;
    return htmlContent;
};

export const exportToJSON = (websiteData) => {
    return JSON.stringify(websiteData, null, 2);
};

export const exportToMarkdown = (websiteData) => {
    const { title, content } = websiteData;
    return `# ${title}\n\n${content}`;
};