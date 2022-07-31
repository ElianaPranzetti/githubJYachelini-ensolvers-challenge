#!/usr/bin/env sh

# abort on errors
set -e

(cd backend && npm i && npm run build && npm start) & (cd frontend && npm i && npm run build && npm run preview)


# # build backend
# cd backend

# npm run build
# #run backend
# npm run start

# # build front
# cd ../frontend
# npm run build

# # run front
# npm run preview

# cd ..