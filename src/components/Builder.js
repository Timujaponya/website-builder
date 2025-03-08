class Builder {
    constructor() {
        this.websites = [];
    }

    createWebsite(name, template) {
        const newWebsite = {
            name: name,
            template: template,
            customization: {}
        };
        this.websites.push(newWebsite);
        return newWebsite;
    }

    customizeWebsite(websiteName, customizationOptions) {
        const website = this.websites.find(website => website.name === websiteName);
        if (website) {
            website.customization = { ...website.customization, ...customizationOptions };
            return website;
        }
        throw new Error('Website not found');
    }

    getWebsites() {
        return this.websites;
    }
}

export default Builder;