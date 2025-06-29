# WhatsApp AI Bot - Render Edition

A powerful WhatsApp bot with AI capabilities, built specifically for Render deployment. Features include AI chat, sticker creation, media processing, group management, and more.

## ☁️ Quick Deploy to Render

[![Deploy on Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

### One-Click Deploy
1. Click the "Deploy on Render" button above
2. Connect your GitHub account
3. Configure environment variables
4. Deploy!

## ✨ Features

### 🤖 AI Capabilities
- **OpenAI Integration**: GPT-3.5-turbo powered conversations
- **Context Awareness**: Remembers conversation history
- **Multi-language Support**: Responds in multiple languages
- **Smart Responses**: Contextual and intelligent replies

### 📱 WhatsApp Features
- **Message Handling**: Text, media, and voice messages
- **Sticker Creation**: Convert images to WhatsApp stickers
- **Media Processing**: Download and process media files
- **Group Management**: Welcome messages, moderation tools
- **Broadcast Messages**: Send messages to all users

### 🔧 Technical Features
- **Render Optimized**: Built specifically for Render platform
- **Keep-Alive System**: Prevents sleep on free tier
- **Real-time Web Interface**: Live status monitoring
- **Health Checks**: Automatic monitoring and restart
- **Rate Limiting**: Protection against spam
- **Security**: Input validation and sanitization

### 📊 Analytics & Monitoring
- **Usage Statistics**: Track bot usage and performance
- **Error Logging**: Comprehensive error tracking
- **Memory Management**: Efficient resource usage
- **Performance Metrics**: Monitor response times

## 🛠️ Installation

### Prerequisites
- Node.js 18.x or higher
- MongoDB database (MongoDB Atlas recommended)
- OpenAI API key (optional, for AI features)

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/whatsapp-ai-bot.git
cd whatsapp-ai-bot

# Install dependencies
npm install --legacy-peer-deps

# Copy environment file
cp env.example .env

# Configure environment variables
# Edit .env file with your settings

# Start the bot
npm start
```

## ⚙️ Configuration

### Environment Variables

#### Essential Variables:
```env
# Bot Configuration
BOT_NAME=Your Bot Name
BOT_PREFIX=.
OWNERS=your-phone-number@c.us
BOT_VERSION=1.0.0

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/whatsapp-bot

# AI Configuration
AI_ENABLED=true
OPENAI_API_KEY=your-openai-api-key
AI_MODEL=gpt-3.5-turbo
AI_MAX_TOKENS=150

# Security
JWT_SECRET=your-super-secret-jwt-key
ENCRYPTION_KEY=your-32-character-encryption-key

# Render Specific
RENDER_ENVIRONMENT=production
NODE_ENV=production
```

#### Optional Variables:
```env
# Features
AUTO_REPLY=true
WEB_INTERFACE=true
REAL_TIME_UPDATES=true

# Logging
LOG_LEVEL=info
LOG_MAX_SIZE=10m

# Rate Limiting
RATE_LIMIT_MESSAGE=5
RATE_LIMIT_COMMAND=10
RATE_LIMIT_AI=3
```

## 🚀 Render Deployment

### Step-by-Step Guide

1. **Fork/Clone Repository**
   ```bash
   git clone https://github.com/yourusername/whatsapp-ai-bot.git
   ```

2. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure settings:
     - **Name**: `whatsapp-bot`
     - **Environment**: `Node`
     - **Build Command**: `npm install --legacy-peer-deps`
     - **Start Command**: `npm start`
     - **Plan**: `Free`

3. **Add MongoDB Database**
   - Go to [mongodb.com](https://mongodb.com)
   - Create free cluster
   - Get connection string
   - Add to `MONGODB_URI` in Render

4. **Configure Environment Variables**
   - Go to your project's "Environment" tab
   - Add all required environment variables
   - Set `MONGODB_URI` to your MongoDB connection string

5. **Deploy and Connect**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Visit your Render URL to pair WhatsApp
   - Scan QR code with WhatsApp

### Render Features

- **Free Tier**: 512MB RAM, 750 hours/month
- **Auto-scaling**: Automatically scales based on traffic
- **Health Checks**: Automatic monitoring and restart
- **Real-time Logs**: View logs in Render dashboard
- **Custom Domains**: Add your own domain
- **SSL/HTTPS**: Automatic SSL certificates

## 📱 Usage

### Basic Commands
- `.help` - Show all commands
- `.ping` - Check bot status
- `.menu` - Show main menu
- `.info` - Get chat information

### AI Commands
- Send any message to chat with AI
- `.ai` - Explicit AI chat command
- `.reset` - Reset conversation context

### Media Commands
- `.sticker` - Create sticker from image
- `.media` - Download and process media
- `.info` - Get media information

### Admin Commands
- `.broadcast` - Send message to all users (Owner only)
- `.stats` - View bot statistics
- `.restart` - Restart the bot (Owner only)

## 🔧 Development

### Project Structure
```
whatsapp-bot/
├── index.js              # Main application file
├── config.js             # Configuration management
├── handler.js            # Message handling logic
├── render.yaml           # Render deployment config
├── lib/                  # Core libraries
│   ├── database.js       # Database connection
│   ├── logger.js         # Logging system
│   └── security.js       # Security utilities
├── plugins/              # Bot plugins
│   ├── ai.js            # AI integration
│   ├── basic.js         # Basic commands
│   ├── admin.js         # Admin commands
│   ├── sticker.js       # Sticker creation
│   ├── media.js         # Media processing
│   ├── group.js         # Group management
│   ├── memory.js        # Conversation memory
│   └── analytics.js     # Analytics tracking
├── public/              # Web interface
│   └── index.html       # Pairing interface
└── logs/                # Log files
```

### Adding New Plugins

1. Create a new file in `plugins/` directory
2. Export your plugin with required methods:
   ```javascript
   module.exports = {
       name: 'myPlugin',
       commands: ['mycommand'],
       execute: async (sock, msg, { command, args, config }) => {
           // Your plugin logic here
       }
   };
   ```

3. The plugin will be automatically loaded on startup

## 🚨 Troubleshooting

### Common Issues

#### 1. Build Fails
- Check if all dependencies are correct
- Ensure Node.js version is 18.x or higher
- Verify `package.json` is valid

#### 2. Database Connection Fails
- Verify `MONGODB_URI` is correct
- Check if MongoDB service is running
- Ensure network connectivity

#### 3. WhatsApp Connection Issues
- Check if session files are corrupted
- Delete session folder and re-scan QR
- Verify bot has internet access

#### 4. Bot Goes to Sleep (Free Tier)
- Bot sleeps after 15 minutes of inactivity
- Use keep-alive service to prevent sleep
- Consider upgrading to Render Pro ($7/month)

### Debug Commands
```bash
# View Render logs
# Go to Render dashboard → Logs

# Check service status
# Go to Render dashboard → Status

# Restart service
# Go to Render dashboard → Manual Deploy
```

## 📊 Monitoring

### Render Dashboard
- **Real-time logs**: View application logs
- **Metrics**: CPU, memory, and network usage
- **Deployments**: Track deployment history
- **Variables**: Manage environment variables

### Health Monitoring
- Automatic health checks every 30 seconds
- Email notifications for failures
- Automatic restarts on failure

## 🔒 Security

### Security Features
- Input validation and sanitization
- Rate limiting protection
- JWT-based authentication
- Encrypted data storage
- SQL injection prevention

### Best Practices
- Use strong JWT secrets
- Enable rate limiting
- Keep dependencies updated
- Monitor logs regularly
- Use HTTPS in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Baileys](https://github.com/whiskeysockets/Baileys) - WhatsApp Web API
- [Render](https://render.com) - Deployment platform
- [OpenAI](https://openai.com) - AI capabilities

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/whatsapp-ai-bot/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/whatsapp-ai-bot/discussions)
- **Render Docs**: [Render Documentation](https://render.com/docs)

---

**Made with ❤️ for Render** ☁️✨ 