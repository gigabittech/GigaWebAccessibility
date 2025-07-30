#!/bin/bash

# Production startup script that ensures database migrations run before starting the server

echo "🚀 Starting production deployment..."

# Run database migrations
echo "📊 Running database migrations..."
npm run db:push

if [ $? -eq 0 ]; then
    echo "✅ Database migrations completed successfully"
else
    echo "❌ Database migrations failed"
    exit 1
fi

# Start the production server
echo "🌐 Starting production server..."
NODE_ENV=production node dist/index.js