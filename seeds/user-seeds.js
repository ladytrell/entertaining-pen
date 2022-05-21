const User = require("../models/User");

const userData = [
  {
    username: "alede0lough",
    email: "nwestnedge0@cbc.ca",
    password: "password123",   
    role_type: "coordinator",
    coordinator_id: 1, 
    band_id: null   
  }/*,
  {
    username: "smonjwilway1",
    email: "rmebes1@sogou.com",
    password: "password123", 
    role: "coordinator",
    coordinator_id: 1 ,
    band_id: null   
  },
  {
    username: "am2djir",
    email: "cstoneman2@last.fm",
    password: "password123", 
    role: "coordinator",
    coordinator_id: 2 , 
    band_id: null   
  },
  {
    username: "nmer3mspr",
    email: "ihellier3@goo.ne.jp",
    password: "password123", 
    role: "coordinator",
    coordinator_id: 3,     
    band_id: null   
  },
  {
    username: "i4ibodd",
    email: "gmidgley4@weather.com",
    password: "password123",  
    coordinator_id: 4,     
    band_id: null     
  },
  {
    username: "dstaague5",
    email: "larnout5@imdb.com",
    password: "password123", 
    coordinator_id: 5,     
    band_id: null      
  },
  {
    username: "tpennigens6",
    email: "hnapleton6@feedburner.com",
    password: "password123", 
    coordinator_id: null,     
    band_id: 1      
  },
  {
    username: "ell7mper",
    email: "kperigo7@china.com.cn",
    password: "password123",
    coordinator_id: null,    
    band_id: 2      
  },
  {
    username: "ns8jmacar",
    email: "lmongain8@google.ru",
    password: "password123",
    coordinator_id: null,    
    band_id: 3     
  },
  {
    username: "msabbithur9",
    email: "bsteen9@epa.gov",
    password: "password123",
    coordinator_id: null,    
    band_id: 4      
  }*/
];

const seedUsers = () =>
//  User.bulkCreate(userData, { individualHooks: true });
  User.bulkCreate(userData);
module.exports = seedUsers;
