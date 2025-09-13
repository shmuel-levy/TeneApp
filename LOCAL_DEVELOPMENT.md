# Local Development Guide

## 🚀 Quick Start

This project has been configured to work with modern Node.js versions (including Node.js v22+).

### Method 1: Using npm (Recommended)
```bash
npm start
```

### Method 2: Using PowerShell Script
```powershell
.\start-local.ps1
```

### Method 3: Using Batch File
```cmd
start-local.bat
```

### Method 4: Manual PowerShell
```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"
.\node_modules\.bin\react-scripts.ps1 start
```

## 🌐 Access the Application

Once started, the application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://[your-ip]:3000

## 🔧 Troubleshooting

### Issue: "Cannot find module react-scripts"
**Solution**: The project path contains spaces and special characters. Use one of the methods above.

### Issue: "digital envelope routines::unsupported"
**Solution**: This is fixed by setting `NODE_OPTIONS=--openssl-legacy-provider`. The package.json has been updated to handle this automatically.

### Issue: Node.js Version Compatibility
**Solution**: The project works with Node.js v16+ but requires the OpenSSL legacy provider flag for newer versions.

## 📦 Available Scripts

- `npm start` - Start development server (with OpenSSL fix)
- `npm run build` - Build for production (with OpenSSL fix)
- `npm test` - Run tests
- `npm run preview` - Build and serve locally

## 🛠️ Development Notes

- The project uses React 17 with Create React App
- Styled Components for styling
- React Router for navigation
- All scripts have been updated to handle Node.js v22+ compatibility

## 🚨 Important

If you encounter any issues, try:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm cache clean --force`
3. Run `npm install`
4. Use one of the start methods above
