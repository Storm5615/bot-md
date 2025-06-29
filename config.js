require('dotenv').config();

module.exports = {
    // Bot Information
    name: process.env.BOT_NAME || 'WhatsApp Bot',
    prefix: process.env.BOT_PREFIX || '.',
    owners: process.env.OWNERS ? process.env.OWNERS.split(',') : [],
    version: process.env.BOT_VERSION || '1.0.0',
    
    // WhatsApp Settings
    phoneNumber: process.env.PHONE_NUMBER || '',
    
    // Database - Use MongoDB Atlas or Render PostgreSQL
    mongodb: {
        uri: process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://localhost:27017/whatsapp-bot',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        }
    },
    
    // AI Configuration
    ai: {
        enabled: process.env.AI_ENABLED === 'true',
        openaiKey: process.env.OPENAI_API_KEY || process.env.AI_API_KEY || '',
        model: process.env.AI_MODEL || 'gpt-3.5-turbo',
        maxTokens: parseInt(process.env.AI_MAX_TOKENS) || 150,
        temperature: parseFloat(process.env.AI_TEMPERATURE) || 0.7,
        provider: process.env.AI_PROVIDER || 'openai'
    },
    
    // Server Configuration - Render specific
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || '0.0.0.0',
        sessionSecret: process.env.SESSION_SECRET || process.env.JWT_SECRET || 'your-secret-key',
        baseUrl: process.env.RENDER_EXTERNAL_URL || process.env.WEB_BASE_URL || 'http://localhost:3000'
    },
    
    // Render specific settings
    render: {
        enabled: process.env.RENDER_ENVIRONMENT === 'production',
        volumePath: process.env.RENDER_VOLUME_PATH || './session',
        externalUrl: process.env.RENDER_EXTERNAL_URL || null
    },
    
    // Features
    features: {
        stickerWatermark: process.env.STICKER_WATERMARK || 'WhatsApp Bot',
        autoReply: process.env.AUTO_REPLY === 'true',
        welcomeMessage: process.env.WELCOME_MESSAGE || 'Hello! I\'m WhatsApp Bot, your AI assistant. Type .help for commands.',
        webInterface: process.env.WEB_INTERFACE !== 'false',
        realTimeUpdates: process.env.REAL_TIME_UPDATES !== 'false'
    },
    
    // Security
    security: {
        jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
        encryptionKey: process.env.ENCRYPTION_KEY || 'your-32-character-encryption-key',
        bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS) || 12,
        rateLimit: {
            message: parseInt(process.env.RATE_LIMIT_MESSAGE) || 5,
            command: parseInt(process.env.RATE_LIMIT_COMMAND) || 10,
            ai: parseInt(process.env.RATE_LIMIT_AI) || 3,
            window: parseInt(process.env.RATE_LIMIT_WINDOW) || 60000
        }
    },
    
    // Logging
    logging: {
        level: process.env.LOG_LEVEL || 'info',
        file: process.env.LOG_FILE || 'logs/bot.log',
        maxSize: process.env.LOG_MAX_SIZE || '10m',
        maxFiles: parseInt(process.env.LOG_MAX_FILES) || 5
    },
    
    // Messages
    messages: {
        welcome: '🎉 Welcome! I\'m WhatsApp Bot, your AI assistant.\n\nCommands:\n.help - Show all commands\n.ping - Check bot status\n.menu - Show main menu\n\nType .help for more info!',
        help: '🤖 *Available Commands:*\n\n*Basic:*\n.ping - Check bot status\n.menu - Show main menu\n.help - Show this help\n\n*AI Chat:*\nJust send me a message and I\'ll respond!\n\n*Tools:*\n.sticker - Create sticker from image\n.info - Get chat info\n\n*Admin:*\n.broadcast - Send message to all users (Owner only)',
        error: '❌ An error occurred. Please try again.',
        notOwner: '⛔ This command is only for bot owners.',
        processing: '⏳ Processing your request...',
        render: '☁️ Running on Render - Fast and reliable!'
    }
}; 