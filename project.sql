create table
  employers (
    id bigint primary key generated always as identity,
    name text,
    address text,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
  );

create table
  departments (
    id bigint primary key generated always as identity,
    name text,
    employer_id bigint,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    foreign key (employer_id) references employers (id)
  );

create table
  employees (
    id bigint primary key generated always as identity,
    name text,
    age integer,
    gender text,
    department_id bigint,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    foreign key (department_id) references departments (id)
  );

create table
  attendances (
    id bigint primary key generated always as identity,
    employee_id bigint,
    date timestamp with time zone,
    latitude double precision,
    longitude double precision,
    check_in boolean,
    check_out boolean,
    foreign key (employee_id) references employees (id)
  );

insert into
  employers (name, address, created_at, updated_at)
values
  (
    'ABC Company',
    '123 Main St',
    current_timestamp,
    current_timestamp
  );

insert into
  departments (name, employer_id, created_at, updated_at)
values
  (
    'Marketing',
    1,
    current_timestamp,
    current_timestamp
  ),
  (
    'Finance',
    1,
    current_timestamp,
    current_timestamp
  );

insert into
  employees (
    name,
    age,
    gender,
    department_id,
    created_at,
    updated_at
  )
values
  (
    'John Doe',
    30,
    'Male',
    1,
    current_timestamp,
    current_timestamp
  ),
  (
    'Jane Smith',
    25,
    'Female',
    1,
    current_timestamp,
    current_timestamp
  ),
  (
    'Michael Johnson',
    35,
    'Male',
    2,
    current_timestamp,
    current_timestamp
  ),
  (
    'Emily Davis',
    28,
    'Female',
    2,
    current_timestamp,
    current_timestamp
  ),
  (
    'David Wilson',
    32,
    'Male',
    2,
    current_timestamp,
    current_timestamp
  );