#!/bin/bash

echo "🚀 Configurando projeto Monitor de Repositórios GitHub..."
echo ""

# Instalar dependências do backend
echo "📦 Instalando dependências do backend..."
cd back
npm install
cd ..

# Instalar dependências do frontend  
echo "📦 Instalando dependências do frontend..."
cd front
npm install
cd ..

# Instalar concurrently para executar ambos simultaneamente
echo "📦 Instalando dependências do projeto principal..."
npm install

echo ""
echo "✅ Setup concluído!"
echo ""
echo "Para executar o projeto:"
echo "  Backend: npm run dev:back"
echo "  Frontend: npm run dev:front"
echo "  Ambos: npm run dev"
echo "" 