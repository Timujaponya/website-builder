const PgUser = require('../models/postgresql/user');
const MongoUser = require('../models/mongodb/user');

class UserRepository {
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

  // Kullanıcı oluştur
  async create(userData) {
    try {
      let pgResult, mongoResult;
      
      if (this.useDatabase === 'postgresql' || this.useDatabase === 'both') {
        pgResult = await PgUser.create(userData);
      }
      
      if (this.useDatabase === 'mongodb' || this.useDatabase === 'both') {
        const user = new MongoUser(userData);
        mongoResult = await user.save();
      }
      
      return { pgResult, mongoResult };
    } catch (error) {
      throw error;
    }
  }

  // Email ile kullanıcı bul
  async findByEmail(email) {
    try {
      let user;
      
      if (this.useDatabase === 'postgresql') {
        user = await PgUser.findOne({ where: { email } });
      } else if (this.useDatabase === 'mongodb') {
        user = await MongoUser.findOne({ email });
      } else {
        // 'both' durumunda önce PostgreSQL'de ara, yoksa MongoDB'de ara
        user = await PgUser.findOne({ where: { email } });
        
        if (!user) {
          user = await MongoUser.findOne({ email });
        }
      }
      
      return user;
    } catch (error) {
      throw error;
    }
  }

  // ID ile kullanıcı bul
  async findById(id) {
    try {
      let user;
      
      if (this.useDatabase === 'postgresql') {
        user = await PgUser.findByPk(id);
      } else if (this.useDatabase === 'mongodb') {
        user = await MongoUser.findById(id);
      } else {
        // 'both' durumunda işlemler farklılaşır, MongoDB'de ObjectId string olmayabilir
        try {
          user = await PgUser.findByPk(id);
          
          if (!user) {
            user = await MongoUser.findById(id);
          }
        } catch (err) {
          user = await MongoUser.findById(id);
        }
      }
      
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Tüm kullanıcıları getir
  async findAll(options = {}) {
    try {
      let users;
      
      if (this.useDatabase === 'postgresql') {
        users = await PgUser.findAll(options);
      } else if (this.useDatabase === 'mongodb') {
        users = await MongoUser.find();
      } else {
        // Her iki veritabanından da kullanıcıları al
        const pgUsers = await PgUser.findAll(options);
        const mongoUsers = await MongoUser.find();
        
        users = { pgUsers, mongoUsers };
      }
      
      return users;
    } catch (error) {
      throw error;
    }
  }

  // Kullanıcıyı güncelle
  async update(id, updates) {
    try {
      let pgResult, mongoResult;
      
      if (this.useDatabase === 'postgresql' || this.useDatabase === 'both') {
        const [updatedRowsCount, updatedRows] = await PgUser.update(updates, {
          where: { id },
          returning: true
        });
        pgResult = updatedRows[0];
      }
      
      if (this.useDatabase === 'mongodb' || this.useDatabase === 'both') {
        mongoResult = await MongoUser.findByIdAndUpdate(id, updates, { new: true });
      }
      
      return { pgResult, mongoResult };
    } catch (error) {
      throw error;
    }
  }

  // Kullanıcıyı sil
  async delete(id) {
    try {
      let pgResult, mongoResult;
      
      if (this.useDatabase === 'postgresql' || this.useDatabase === 'both') {
        pgResult = await PgUser.destroy({ where: { id } });
      }
      
      if (this.useDatabase === 'mongodb' || this.useDatabase === 'both') {
        mongoResult = await MongoUser.findByIdAndDelete(id);
      }
      
      return { pgResult, mongoResult };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserRepository();