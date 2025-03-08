import React from 'react';
import ReactDOM from 'react-dom';
import Builder from './components/Builder';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { generateUniqueId } from './utils/helpers';
import './assets/css/main.css';
// Builder ve Editor sınıfları için JavaScript yaklaşımı
const builderInstance = new Builder();
const editorInstance = new Editor();

document.addEventListener('DOMContentLoaded', () => {
  // Normal DOM manipülasyonu
  const builderContainer = document.getElementById('builder');
  const editorContainer = document.getElementById('editor');
  
  // Örnek bir website oluşturma
  const website = builderInstance.createWebsite('My First Website', 'default');
  
  // Örnek bileşenleri ekleme
  const headerComponent = { id: generateUniqueId(), name: 'Header', type: 'header' };
  const contentComponent = { id: generateUniqueId(), name: 'Content Section', type: 'section' };
  
  editorInstance.addComponent(headerComponent);
  editorInstance.addComponent(contentComponent);
  
  // Editor içeriğini render et
  editorContainer.innerHTML = editorInstance.render();
  
  // React komponenti için ReactDOM.render kullan
  ReactDOM.render(
    <Preview template={JSON.stringify(website)} />,
    document.getElementById('preview')
  );
});