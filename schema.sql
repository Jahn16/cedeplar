CREATE TABLE plays (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    genre VARCHAR(50) NOT NULL,
    first_popularity VARCHAR(9) NOT NULL,
    switch_time INT,
    popular_rating INT,
    unpopular_rating INT
);

CREATE TABLE survey (
    play_id UUID references plays(id),
    "question-1" VARCHAR(255),
    "question-2" VARCHAR(255),
    "question-3" VARCHAR(255),
    "question-4-1" VARCHAR(255),
    "question-4-2" VARCHAR(255),
    "question-4-3" VARCHAR(255),
    "question-4-4" VARCHAR(255),
    "question-4-5" VARCHAR(255),
    "question-4-6" VARCHAR(255),
    "question-5" VARCHAR(255),
    "question-6" VARCHAR(255),
    "question-7" VARCHAR(255),
    "question-8" VARCHAR(255),
    "question-9" VARCHAR(255),
    "question-10" VARCHAR(255),
    "question-11-1" VARCHAR(255),
    "question-11-2" VARCHAR(255),
    "question-11-3" VARCHAR(255),
    "question-11-4" VARCHAR(255),
    "question-11-5" VARCHAR(255),
    "question-11-6" VARCHAR(255),
    "question-11-7" VARCHAR(255),
    "question-11-8" VARCHAR(255),
    "question-11-9" VARCHAR(255),
    "question-11-10" VARCHAR(255),
    "question-11-11" VARCHAR(255),
    "question-12" VARCHAR(255),
    "question-13-1" VARCHAR(255),
    "question-13-2" VARCHAR(255),
    "question-13-3" VARCHAR(255),
    "question-13-4" VARCHAR(255),
    "question-13-5" VARCHAR(255),
    "question-13-6" VARCHAR(255),
    "question-13-7" VARCHAR(255),
    "question-13-8" VARCHAR(255),
    "question-13-9" VARCHAR(255),
    "question-13-10" VARCHAR(255),
    "question-14-1" VARCHAR(255),
    "question-14-2" VARCHAR(255),
    "question-14-3" VARCHAR(255),
    "question-14-4" VARCHAR(255),
    "question-14-5" VARCHAR(255),
    "question-14-6" VARCHAR(255),
    "question-14-7" VARCHAR(255),
    "question-14-8" VARCHAR(255),
    "question-14-9" VARCHAR(255),
    "question-14-10" VARCHAR(255),
    "question-14-11" VARCHAR(255),
    "question-14-12" VARCHAR(255),
    "question-15" VARCHAR(255),
    "question-16" VARCHAR(255),
    "question-17" VARCHAR(255),
    "question-18" VARCHAR(255),
    "question-19" VARCHAR(255),
    "question-20" VARCHAR(255),
    "question-21" VARCHAR(255)
);
