docker run -d \
	--name postgres16 \
	-p 5432:5432 \
	-e POSTGRES_USER=postgres \
	-e POSTGRES_PASSWORD=postgres \
	-e PGDATA=/var/lib/postgresql/data/pgdata \
	-v /Users/ikhsan/develop/postgres_data:/var/lib/postgresql/data \
	postgres:16