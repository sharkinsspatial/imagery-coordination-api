mongo imagery-request --eval "printjson(db.dropDatabase())"

mongoimport -d imagery-request -c requests .build_files/fixtures/requests.json
mongoimport -d imagery-request -c tasks .build_files/fixtures/tasks.json