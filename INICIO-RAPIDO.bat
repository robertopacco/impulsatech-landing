@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js no esta instalado. Ejecuta setup-windows.ps1 primero.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Instalando dependencias...
  call npm install
)
echo.
echo Iniciando IMPULSATECH en http://localhost:3000
call npm run dev
