$ErrorActionPreference = "Stop"

Write-Host "=== IMPULSATECH - Preparacion del entorno ===" -ForegroundColor Cyan

function Test-Command($name) {
  return [bool](Get-Command $name -ErrorAction SilentlyContinue)
}

if (-not (Test-Command "winget")) {
  Write-Host "No se encontro winget. Instala 'App Installer' desde Microsoft Store y vuelve a ejecutar este script." -ForegroundColor Yellow
  exit 1
}

$needNode = $true
if (Test-Command "node") {
  $rawVersion = (node -v).TrimStart('v')
  try {
    $nodeVersion = [version]$rawVersion
    if ($nodeVersion -ge [version]"20.9.0") {
      $needNode = $false
      Write-Host "Node.js OK: v$rawVersion" -ForegroundColor Green
    }
  } catch {}
}

if ($needNode) {
  Write-Host "Instalando Node.js LTS..." -ForegroundColor Yellow
  winget install OpenJS.NodeJS.LTS -e --accept-source-agreements --accept-package-agreements
  Write-Host "Node.js instalado. Cierra y vuelve a abrir PowerShell si el comando node aun no aparece." -ForegroundColor Green
}

if (-not (Test-Command "git")) {
  Write-Host "Instalando Git..." -ForegroundColor Yellow
  winget install Git.Git -e --accept-source-agreements --accept-package-agreements
} else {
  Write-Host "Git OK" -ForegroundColor Green
}

if (-not (Test-Command "npm")) {
  Write-Host "npm no esta disponible todavia. Cierra PowerShell, abrelo otra vez y ejecuta este script nuevamente." -ForegroundColor Yellow
  exit 0
}

Set-Location $PSScriptRoot
Write-Host "Instalando dependencias del proyecto..." -ForegroundColor Yellow
npm install

Write-Host "" 
Write-Host "Todo listo." -ForegroundColor Green
Write-Host "Ejecuta: npm run dev" -ForegroundColor Cyan
Write-Host "Luego abre: http://localhost:3000" -ForegroundColor Cyan
