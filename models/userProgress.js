const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  telegramId:
   { type: Number,
     required: true,
      unique: true 
   },

  nickname:
  { 
    type: String,
     required: true
  },

  firstName: 
  { 
    type: String,
     required: true 
  },

  hasNicknameBonus: 
  {
    type: Boolean, 
    default: false
  },

  coins:
  { 
    type: Number, 
    default: 0 
  },
  coinsSub:
  { 
    type: Number, 
    default: 0 
  },


  hasTelegramPremium:
  { 
    type: Boolean,
     default: false
  },

  hasCheckedSubscription: 
  { type: Boolean,
     default: false
  },

  hasBotSub:
  {
     type: Boolean, 
     default: false
    
  },

  hasCheckedSubscription2:
  { type: Boolean,
     default: false
  },

  hasCheckedSubscription3:
  { type: Boolean,
     default: false
  },

  hasCheckedSubscription4:
  { type: Boolean,
     default: false
  },

  hasReceivedTwitterReward:
  {
     type: Boolean, 
     default: false
    
  },

  transactionNumber: { 
    type: Number, 
    default: 0 
  },

  referralCode:
  { 
    type: String,
     unique: true
  }, 

  newReferredUsers: [{ nickname: String, earnedCoins: Number }],

  referralThresholdReached: { type: Boolean, default: false },
  
  referredUsers:
  [{ 
    nickname: String,
    earnedCoins: Number
  }]
});

const UserProgress = mongoose.model('UsersUspech1', UserSchema);
module.exports = UserProgress;

