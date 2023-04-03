import { Actor } from "../apis/fetchActors";

export const anActor: Actor = {
    id: '1234',
    name: 'Kerry Washington',
}

export const aListOfActors: Actor[] = [
    {
        id: '1234',
        name: 'Kerry Washington',
    },
    {
        id: '5678',
        name: 'Rebel Wilson',
    }
]

export const personSearchResponse = {
    data: {
        results: {
            "adult": false,
            "gender": 1,
            "id": 14386,
            "known_for_department": "Acting",
            "name": "Beyoncé",
            "original_name": "Beyoncé",
            "popularity": 5.72,
            "profile_path": "/9MgDCYBBVBl4lM1DuxNIIbCHlKy.jpg",
            "known_for": [
                {
                    "adult": false,
                    "backdrop_path": "/2U0sF8StXUECjs02KYxnWka48WN.jpg",
                    "id": 818,
                    "title": "Austin Powers in Goldmember",
                    "original_language": "en",
                    "original_title": "Austin Powers in Goldmember",
                    "overview": "The world's most shagadelic spy continues his fight against Dr. Evil. This time, the diabolical doctor and his clone, Mini-Me, team up with a new foe—'70s kingpin Goldmember. While pursuing the team of villains to stop them from world domination, Austin gets help from his dad and an old girlfriend.",
                    "poster_path": "/aSNnxSNc7HftXa6EULM4Lq6mUDn.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        35,
                        80,
                        878
                    ],
                    "popularity": 19.019,
                    "release_date": "2002-07-26",
                    "video": false,
                    "vote_average": 5.995,
                    "vote_count": 2739
                },
                {
                    "adult": false,
                    "backdrop_path": "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
                    "id": 420818,
                    "title": "The Lion King",
                    "original_language": "en",
                    "original_title": "The Lion King",
                    "overview": "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
                    "poster_path": "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        12,
                        18,
                        10751
                    ],
                    "popularity": 106.759,
                    "release_date": "2019-07-12",
                    "video": false,
                    "vote_average": 7.1,
                    "vote_count": 9031
                },
                {
                    "adult": false,
                    "backdrop_path": "/8wYluVq5AVXhnFFMhUYD9D4rTz5.jpg",
                    "id": 1125,
                    "title": "Dreamgirls",
                    "original_language": "en",
                    "original_title": "Dreamgirls",
                    "overview": "A trio of female soul singers cross over to the pop charts in the early 1960s, facing their own personal struggles along the way.",
                    "poster_path": "/sG5JyOj8Spe13QkNJMH8b5kzQUh.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        18,
                        10402
                    ],
                    "popularity": 12.52,
                    "release_date": "2006-12-25",
                    "video": false,
                    "vote_average": 6.789,
                    "vote_count": 886
                }
            ]
        }
    }
}