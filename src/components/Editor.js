class Editor {
    constructor() {
        this.components = [];
        this.componentTypes = [
            { id: 'header', name: 'Header', icon: 'fa-heading' },
            { id: 'paragraph', name: 'Paragraph', icon: 'fa-paragraph' },
            { id: 'image', name: 'Image', icon: 'fa-image' },
            { id: 'button', name: 'Button', icon: 'fa-square' },
            { id: 'section', name: 'Section', icon: 'fa-layer-group' },
            { id: 'form', name: 'Form', icon: 'fa-wpforms' },
            { id: 'list', name: 'List', icon: 'fa-list' }
        ];
    }

    addComponent(component) {
        this.components.push(component);
    }

    removeComponent(componentId) {
        this.components = this.components.filter(comp => comp.id !== componentId);
    }

    updateComponent(componentId, newProperties) {
        const component = this.components.find(comp => comp.id === componentId);
        if (component) {
            Object.assign(component, newProperties);
        }
    }

    getComponents() {
        return this.components;
    }

    render() {
        // Bileşen tiplerini renderla
        const componentTypesHTML = this.componentTypes.map(type => {
            return `
                <div class="component-type" data-type="${type.id}">
                    <i class="fas ${type.icon}"></i>
                    <span>${type.name}</span>
                </div>
            `;
        }).join('');

        // Mevcut bileşenleri renderla
        const componentsHTML = this.components.map(comp => {
            return `
                <div class="component" data-id="${comp.id}">
                    <div class="component-header">
                        <span class="component-name">${comp.name}</span>
                        <div class="component-actions">
                            <button class="component-btn edit-btn" data-action="edit">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="component-btn delete-btn" data-action="delete">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="editor">
                <h2>Website Editor</h2>
                
                <div class="editor-sections">
                    <div class="component-types">
                        <h3>Bileşenler</h3>
                        <p class="editor-hint">Eklemek için sürükleyin veya tıklayın</p>
                        <div class="component-types-list">
                            ${componentTypesHTML}
                        </div>
                    </div>
                    
                    <div class="components-container">
                        <h3>Sayfanız <span class="component-count">(${this.components.length})</span></h3>
                        <div class="components-list" id="components-list">
                            ${componentsHTML}
                            ${this.components.length === 0 ? '<div class="empty-message">Henüz bileşen eklenmedi</div>' : ''}
                        </div>
                    </div>
                </div>
                
                <div class="editor-footer">
                    <button class="btn btn-primary">Değişiklikleri Kaydet</button>
                    <button class="btn btn-outline">Önizlemeyi Güncelle</button>
                </div>
            </div>
        `;
    }
}

export default Editor;