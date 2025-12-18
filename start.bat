@echo off
echo 🚀 Starting Monolith Pitch Deck...
echo.

IF NOT EXIST "node_modules\" (
    echo 📦 Installing dependencies...
    call npm install
    echo.
)

echo ✨ Starting development server...
echo 🌐 Opening http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
