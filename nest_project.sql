-- -------------------------------------------------------------
-- TablePlus 5.4.0(504)
--
-- https://tableplus.com/
--
-- Database: nest_project
-- Generation Time: 2023-12-02 16:18:33.6210
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."attendances" (
    "id" int8 NOT NULL,
    "employee_id" int8,
    "date" timestamptz,
    "latitude" float8,
    "longitude" float8,
    "check_in" bool,
    "check_out" bool,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."departments" (
    "id" int8 NOT NULL,
    "name" text,
    "employer_id" int8,
    "created_at" timestamptz,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."employees" (
    "id" int8 NOT NULL,
    "name" text,
    "age" int4,
    "gender" text,
    "department_id" int8,
    "created_at" timestamptz,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."employers" (
    "id" int8 NOT NULL,
    "name" text,
    "address" text,
    "created_at" timestamptz,
    "updated_at" timestamptz,
    PRIMARY KEY ("id")
);


ALTER TABLE "public"."attendances" ADD FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id");
ALTER TABLE "public"."departments" ADD FOREIGN KEY ("employer_id") REFERENCES "public"."employers"("id");
ALTER TABLE "public"."employees" ADD FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id");

INSERT INTO "public"."departments" ("id", "name", "employer_id", "created_at", "updated_at") VALUES
(1, 'Marketing', 1, '2023-12-02 09:17:28.989164+00', '2023-12-02 09:17:28.989164+00'),
(2, 'Finance', 1, '2023-12-02 09:17:28.989164+00', '2023-12-02 09:17:28.989164+00');

INSERT INTO "public"."employees" ("id", "name", "age", "gender", "department_id", "created_at", "updated_at") VALUES
(1, 'John Doe', 30, 'Male', 1, '2023-12-02 09:17:28.996796+00', '2023-12-02 09:17:28.996796+00'),
(2, 'Jane Smith', 25, 'Female', 1, '2023-12-02 09:17:28.996796+00', '2023-12-02 09:17:28.996796+00'),
(3, 'Michael Johnson', 35, 'Male', 2, '2023-12-02 09:17:28.996796+00', '2023-12-02 09:17:28.996796+00'),
(4, 'Emily Davis', 28, 'Female', 2, '2023-12-02 09:17:28.996796+00', '2023-12-02 09:17:28.996796+00'),
(5, 'David Wilson', 32, 'Male', 2, '2023-12-02 09:17:28.996796+00', '2023-12-02 09:17:28.996796+00');

INSERT INTO "public"."employers" ("id", "name", "address", "created_at", "updated_at") VALUES
(1, 'ABC Company', '123 Main St', '2023-12-02 09:17:28.985592+00', '2023-12-02 09:17:28.985592+00');