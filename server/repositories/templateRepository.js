const PgTemplate = require('../models/postgresql/template');
const MongoTemplate = require('../models/mongodb/template');

class TemplateRepository {
  constructor(useDatabase = 'postgresql') {
    this.useDatabase = useDatabase;
  }

  // Hangi veritabanının kullanılacağını ayarla
  setDatabase(dbName) {
    if (['postgresql', 'mongodb', 'both'].includes(dbName)) {
      this.useDatabase = dbName;
      return true;
    }
    return false;
  }

  // Şablon oluştur
  async create(templateData) {
    try {
      let pgResult, mongoResult;
      
      if (this.useDatabase === 'postgresql' || this.useDatabase === 'both') {
        pgResult = await PgTemplate.create(templateData);
      }
      
      if (this.useDatabase === 'mongodb' || this.useDatabase === 'both') {
        const template = new MongoTemplate(templateData);
        mongoResult = await template.save();
      }
      
      return { pgResult, mongoResult };
    } catch (error) {
      throw error;
    }
  }

  // ID ile şablon bul
  async findById(id) {
    try {
      let template;
      
      if (this.useDatabase === 'postgresql') {
        template = await PgTemplate.findByPk(id);
      } else if (this.useDatabase === 'mongodb') {
        template = await MongoTemplate.findById(id);
      } else {
        // 'both' durumunda her iki veritabanından da dene
        try {
          template = await PgTemplate.findByPk(id);
          
          if (!template) {
            template = await MongoTemplate.findById(id);
          }
        } catch (err) {
          template = await MongoTemplate.findById(id);
        }
      }
      
      return template;
    } catch (error) {
      throw error;
    }
  }

  // Tüm şablonları getir
  async findAll(options = {}) {
    try {
      let templates;
      
      if (this.useDatabase === 'postgresql') {
        templates = await PgTemplate.findAll(options);
      } else if (this.useDatabase === 'mongodb') {
        templates = await MongoTemplate.find();
      } else {
        // Her iki veritabanından da şablonları al
        const pgTemplates = await PgTemplate.findAll(options);
        const mongoTemplates = await MongoTemplate.find();
        
        templates = { pgTemplates, mongoTemplates };
      }
      
      return templates;
    } catch (error) {
      throw error;
    }
  }

  // Kategoriye göre şablonları getir
  async findByCategory(category) {
    try {
      let templates;
      
      if (this.useDatabase === 'postgresql') {
        templates = await PgTemplate.findAll({ where: { category } });
      } else if (this.useDatabase === 'mongodb') {
        templates = await MongoTemplate.find({ category });
      } else {
        // Her iki veritabanından da şablonları al
        const pgTemplates = await PgTemplate.findAll({ where: { category } });
        const mongoTemplates = await MongoTemplate.find({ category });
        
        templates = { pgTemplates, mongoTemplates };
      }
      
      return templates;
    } catch (error) {
      throw error;
    }
  }

  // Şablonu güncelle
  async update(id, updates) {
    try {
      let pgResult, mongoResult;
      
      if (this.useDatabase === 'postgresql' || this.useDatabase === 'both') {
        const [updatedRowsCount, updatedRows] = await PgTemplate.update(updates, {
          where: { id },
          returning: true
        });
        pgResult = updatedRows[0];
      }
      
      if (this.useDatabase === 'mongodb' || this.useDatabase === 'both') {
        mongoResult = await MongoTemplate.findByIdAndUpdate(id, updates, { new: true });
      }
      
      return { pgResult, mongoResult };
    } catch (error) {
      throw error;
    }
  }

  // Şablonu sil
  async delete(id) {
    try {
      let pgResult, mongoResult;
      
      if (this.useDatabase === 'postgresql' || this.useDatabase === 'both') {
        pgResult = await PgTemplate.destroy({ where: { id } });
      }
      
      if (this.useDatabase === 'mongodb' || this.useDatabase === 'both') {
        mongoResult = await MongoTemplate.findByIdAndDelete(id);
      }
      
      return { pgResult, mongoResult };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new TemplateRepository();