const PgWebsite = require('../models/postgresql/website');
const MongoWebsite = require('../models/mongodb/website');

class WebsiteRepository {
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

  // Website oluştur
  async create(websiteData) {
    try {
      let pgResult, mongoResult;
      
      if (this.useDatabase === 'postgresql' || this.useDatabase === 'both') {
        pgResult = await PgWebsite.create(websiteData);
      }
      
      if (this.useDatabase === 'mongodb' || this.useDatabase === 'both') {
        const website = new MongoWebsite(websiteData);
        mongoResult = await website.save();
      }
      
      return { pgResult, mongoResult };
    } catch (error) {
      throw error;
    }
  }

  // ID ile website bul
  async findById(id) {
    try {
      let website;
      
      if (this.useDatabase === 'postgresql') {
        website = await PgWebsite.findByPk(id, {
          include: ['owner', 'template']
        });
      } else if (this.useDatabase === 'mongodb') {
        website = await MongoWebsite.findById(id)
          .populate('owner')
          .populate('template');
      } else {
        // 'both' durumunda her iki veritabanından da dene
        try {
          website = await PgWebsite.findByPk(id, {
            include: ['owner', 'template']
          });
          
          if (!website) {
            website = await MongoWebsite.findById(id)
              .populate('owner')
              .populate('template');
          }
        } catch (err) {
          website = await MongoWebsite.findById(id)
            .populate('owner')
            .populate('template');
        }
      }
      
      return website;
    } catch (error) {
      throw error;
    }
  }

  // Kullanıcının tüm websitelerini getir
  async findByOwnerId(ownerId) {
    try {
      let websites;
      
      if (this.useDatabase === 'postgresql') {
        websites = await PgWebsite.findAll({
          where: { ownerId },
          include: ['template']
        });
      } else if (this.useDatabase === 'mongodb') {
        websites = await MongoWebsite.find({ owner: ownerId })
          .populate('template');
      } else {
        // Her iki veritabanından da websiteleri al
        const pgWebsites = await PgWebsite.findAll({
          where: { ownerId },
          include: ['template']
        });
        const mongoWebsites = await MongoWebsite.find({ owner: ownerId })
          .populate('template');
        
        websites = { pgWebsites, mongoWebsites };
      }
      
      return websites;
    } catch (error) {
      throw error;
    }
  }

  // Website güncelle
  async update(id, updates) {
    try {
      let pgResult, mongoResult;
      
      if (this.useDatabase === 'postgresql' || this.useDatabase === 'both') {
        const [updatedRowsCount, updatedRows] = await PgWebsite.update(updates, {
          where: { id },
          returning: true
        });
        pgResult = updatedRows[0];
      }
      
      if (this.useDatabase === 'mongodb' || this.useDatabase === 'both') {
        if (updates.lastEdited === undefined) {
          updates.lastEdited = Date.now();
        }
        mongoResult = await MongoWebsite.findByIdAndUpdate(id, updates, { new: true });
      }
      
      return { pgResult, mongoResult };
    } catch (error) {
      throw error;
    }
  }

  // Website sil
  async delete(id) {
    try {
      let pgResult, mongoResult;
      
      if (this.useDatabase === 'postgresql' || this.useDatabase === 'both') {
        pgResult = await PgWebsite.destroy({ where: { id } });
      }
      
      if (this.useDatabase === 'mongodb' || this.useDatabase === 'both') {
        mongoResult = await MongoWebsite.findByIdAndDelete(id);
      }
      
      return { pgResult, mongoResult };
    } catch (error) {
      throw error;
    }
  }

  // Subdomain ile website bul
  async findBySubdomain(subdomain) {
    try {
      let website;
      
      if (this.useDatabase === 'postgresql') {
        website = await PgWebsite.findOne({
          where: { subdomain },
          include: ['owner', 'template']
        });
      } else if (this.useDatabase === 'mongodb') {
        website = await MongoWebsite.findOne({ subdomain })
          .populate('owner')
          .populate('template');
      } else {
        // 'both' durumunda her iki veritabanından da dene
        website = await PgWebsite.findOne({
          where: { subdomain },
          include: ['owner', 'template']
        });
        
        if (!website) {
          website = await MongoWebsite.findOne({ subdomain })
            .populate('owner')
            .populate('template');
        }
      }
      
      return website;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new WebsiteRepository();