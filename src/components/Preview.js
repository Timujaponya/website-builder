import React from 'react';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            viewport: 'desktop', // desktop, tablet, mobile
            zoom: 100,
            theme: 'light'
        };
    }
    
    // Viewport değiştirme
    changeViewport(viewport) {
        this.setState({ viewport });
    }
    
    // Zoom seviyesini değiştirme
    changeZoom(zoom) {
        this.setState({ zoom });
    }
    
    // Tema değiştirme
    changeTheme(theme) {
        this.setState({ theme });
    }
    
    // Template string'i parse etme
    parseTemplate() {
        try {
            const templateData = JSON.parse(this.props.template);
            return `
                <div class="preview">
                    <h2>${templateData.name || 'Website Preview'}</h2>
                    <p>Template: ${templateData.template}</p>
                    ${this.renderCustomization(templateData.customization)}
                </div>
            `;
        } catch (error) {
            console.error("Template parse hatası:", error);
            return '<p>Önizleme yüklenirken bir hata oluştu</p>';
        }
    }
    
    // Özelleştirme seçeneklerini render etme
    renderCustomization(customization) {
        if (!customization || Object.keys(customization).length === 0) {
            return '<div class="preview-placeholder">Bu site için henüz bir özelleştirme uygulanmadı</div>';
        }
        
        return `
            <div class="customization">
                <h3>Özelleştirmeler</h3>
                <ul class="customization-list">
                    ${Object.entries(customization).map(([key, value]) => 
                        `<li><strong>${key}:</strong> ${value}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    render() {
        const { viewport, zoom, theme } = this.state;
        
        return (
            <div className={`preview-container theme-${theme}`}>
                <div className="preview-toolbar">
                    <h2>Website Önizleme</h2>
                    
                    <div className="preview-actions">
                        <div className="preview-viewport-switcher">
                            <button 
                                className={`viewport-btn ${viewport === 'desktop' ? 'active' : ''}`}
                                onClick={() => this.changeViewport('desktop')}
                            >
                                <i className="fas fa-desktop"></i>
                            </button>
                            <button 
                                className={`viewport-btn ${viewport === 'tablet' ? 'active' : ''}`}
                                onClick={() => this.changeViewport('tablet')}
                            >
                                <i className="fas fa-tablet-alt"></i>
                            </button>
                            <button 
                                className={`viewport-btn ${viewport === 'mobile' ? 'active' : ''}`}
                                onClick={() => this.changeViewport('mobile')}
                            >
                                <i className="fas fa-mobile-alt"></i>
                            </button>
                        </div>
                        
                        <div className="preview-zoom">
                            <button onClick={() => this.changeZoom(Math.max(50, zoom - 10))}>
                                <i className="fas fa-search-minus"></i>
                            </button>
                            <span>{zoom}%</span>
                            <button onClick={() => this.changeZoom(Math.min(150, zoom + 10))}>
                                <i className="fas fa-search-plus"></i>
                            </button>
                        </div>
                        
                        <div className="preview-theme-switcher">
                            <button 
                                className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                                onClick={() => this.changeTheme('light')}
                            >
                                <i className="fas fa-sun"></i>
                            </button>
                            <button 
                                className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                                onClick={() => this.changeTheme('dark')}
                            >
                                <i className="fas fa-moon"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                {this.state.isLoading ? (
                    <div className="preview-loading">
                        <i className="fas fa-spinner fa-spin"></i>
                        <p>Önizleme yükleniyor...</p>
                    </div>
                ) : (
                    <div 
                        className={`preview-content viewport-${viewport}`}
                        style={{ transform: `scale(${zoom/100})` }}
                        dangerouslySetInnerHTML={{ __html: this.parseTemplate() }} 
                    />
                )}
                
                <div className="preview-footer">
                    <button className="btn btn-sm btn-primary">
                        <i className="fas fa-code"></i> HTML Görüntüle
                    </button>
                    <button className="btn btn-sm btn-outline">
                        <i className="fas fa-download"></i> Sayfayı İndir
                    </button>
                </div>
            </div>
        );
    }
}

export default Preview;