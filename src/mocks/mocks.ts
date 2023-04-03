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
    results: [{
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
    }]
}

export const personMovieCreditsResponse = {
    results: {
        "cast": [
            {
                "adult": false,
                "backdrop_path": "/oz4H26yjbFqkYI0lrIDG43znREc.jpg",
                "genre_ids": [
                    10402
                ],
                "id": 25326,
                "original_language": "en",
                "original_title": "Destiny's Child: Live in Atlanta",
                "overview": "Though officially disbanded, Destiny's Child proves in this concert video why they're one of the most successful soul/R&B groups of all time. Filmed at Atlanta's Phillips Arena during their Destiny Fulfilled farewell tour, the trio pulled all the stops--short of flying over the audience--to put on a spectacular show for their fans. Opening the show with their Grammy-winning \"Say My Name,\" the group--who famously sang while running around a track as girls to build their lung strength--belted their harmonies and runs while dancing through a medley of hits including \"No, No, No,\" \"Bugaboo,\" \"Bills, Bills, Bills,\" \"Bootylicious\" and \"Jumpin' Jumpin.'\"",
                "popularity": 0.6,
                "poster_path": "/9tWngfbHUsVVzvDRxaTUMZ1BnVo.jpg",
                "release_date": "2006-03-28",
                "title": "Destiny's Child: Live in Atlanta",
                "video": false,
                "vote_average": 7.5,
                "vote_count": 6,
                "character": "herself",
                "credit_id": "52fe44c2c3a368484e0353db",
                "order": 0
            },
            {
                "adult": false,
                "backdrop_path": "/c6UigUUJRrf65Adl3McBWJ1B75t.jpg",
                "genre_ids": [
                    10402,
                    99
                ],
                "id": 18653,
                "original_language": "en",
                "original_title": "Beyoncé: The Beyoncé Experience Live",
                "overview": "\"The Beyoncé Experience Live\" is a show by American R&B singer Beyoncé Knowles. It was shot in Staples Center, Los Angeles, California, on September 2, 2007, during her worldwide tour The Beyoncé Experience. The show features guest appearances from rapper Jay-Z on \"Upgrade U\" and former Destiny's Child mates Michelle Williams and Kelly Rowland on \"Survivor\". For one night only on November 19, 2007, the show was shown in theaters across the U.S.",
                "popularity": 6.065,
                "poster_path": "/dFAYTelHXiKMIIeJsuHFEWeOcQ2.jpg",
                "release_date": "2007-11-16",
                "title": "The Beyoncé Experience Live",
                "video": false,
                "vote_average": 7.4,
                "vote_count": 21,
                "character": "herself",
                "credit_id": "52fe478e9251416c7509dbe9",
                "order": 0
            },
            {
                "adult": false,
                "backdrop_path": null,
                "genre_ids": [
                    10402,
                    10770,
                    99
                ],
                "id": 68333,
                "original_language": "en",
                "original_title": "Beyoncé: Live at Glastonbury 2011",
                "overview": "Beyonce took to the Glastonbury Festival Pyramid Stage for a groundbreaking performance in front of 170,000 people. The Texan’s stunning entrance confirmed that Knowles knows how to put on a show. The set was peppered with Prince and Kings Of Leon covers alongside the biggest hits of Beyoncé’s career will be remembered long after the grass has re-sprouted on the fields of Worthy Farm 01 – Crazy In Love 02 – Single Ladies (Put A Ring On It) 03 – Naughty Girl 04 – Baby Boy feat – Tricky 05 – Happy Birthday 06 – Best Thing I Never Had 07 – End Of Time 08 – If I Were A Boy 09 – Sweet Dreams 10 – Why Don’t You Love Me 11 – Why Don’t You Love Me (reprise) 12 – The Mamas 13 – The Beautiful Ones 14 – Sex On Fire 15 – 1+1 16 – Irreplaceable 17 – Independent Women 18 – Bootylicious 19 – Bug A Boo 20 – Telephone 21 – Say My Name 22 – Jumpin’ Jumpin’ 23 – Survivor 24 – At Last 25 – Run The World (Girls) 26 – Halo.",
                "popularity": 2.198,
                "poster_path": "/uwxQoFtlvY1sQ4u0WObnCfhm3C2.jpg",
                "release_date": "2011-06-26",
                "title": "Beyoncé: Live at Glastonbury 2011",
                "video": false,
                "vote_average": 9.1,
                "vote_count": 10,
                "character": "Herself",
                "credit_id": "52fe478dc3a368484e0cd48d",
                "order": 0
            },
            {
                "adult": false,
                "backdrop_path": "/q1oqWoqtqXUDhcbXM8ZYLiGBrbs.jpg",
                "genre_ids": [
                    10402,
                    99
                ],
                "id": 51499,
                "original_language": "en",
                "original_title": "Beyoncé: I Am... World Tour",
                "overview": "108 shows, 78 cities, 32 countries, 6 continents, 1.1 million fans. Beyoncé’s I Am... World Tour captures concert footage from numerous shows edited into one extraordinary concert. Weaved into this concert are highlights that give a rare glimpse into the dynamic and personal world of this multi-faceted icon. As a bonus is a behind-the-scenes documentary entitled Mic and a Light. I Am... World Tour Blu-ray captures not only an unforgettable performance from the superstar singer and entertainer, but showcases her astonishing talent as a filmmaker, director and producer.",
                "popularity": 4.813,
                "poster_path": "/h5ksY0t3xCePN8E2FmHjAp19hnt.jpg",
                "release_date": "2010-11-30",
                "title": "Beyoncé: I Am... World Tour",
                "video": false,
                "vote_average": 8.2,
                "vote_count": 22,
                "character": "Self",
                "credit_id": "52fe47f7c3a36847f8151c29",
                "order": 0
            },
            {
                "adult": false,
                "backdrop_path": "/sf7ydf7Hs5LsYsL1EBFZo0GD9sS.jpg",
                "genre_ids": [
                    10402,
                    99
                ],
                "id": 83092,
                "original_language": "en",
                "original_title": "Beyoncé: Live At Roseland - Elements of 4",
                "overview": "Live at Roseland: Elements of 4 is a live DVD concert film by American R&B recording artist, Beyoncé Knowles. It was directed by Knowles, Ed Burke and Anthony Green, and was executively produced by Knowles. The DVD was filmed during her 4 Intimate Nights with Beyoncé concert, which was held at the Roseland Ballroom in New York City in August 2011. It was released exclusively through Walmart stores in the United States on November 21, 2011.",
                "popularity": 3.893,
                "poster_path": "/yRrW1e1cbLuxf2UjiWJBK8w8C9M.jpg",
                "release_date": "2011-11-29",
                "title": "Live At Roseland - Elements of 4",
                "video": false,
                "vote_average": 8.3,
                "vote_count": 14,
                "character": "Herself (as Beyoncé)",
                "credit_id": "52fe48899251416c9108ffcf",
                "order": 0
            },
        ],
        "id": 14386
    }
}
