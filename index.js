const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())

const gamingVideos=[
            {
                "id": "b214dc8a-b126-4d15-8523-d37404318347",
                "title": "Drop Stack Ball",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/drop-stack-ball-img.png",
                "view_count": "44K"
            },
            {
                "id": "10350061-447e-4377-af2a-00053c4e4214",
                "title": "Hill Climb Racing",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/hill-climb-racing-img.png",
                "view_count": "34K"
            },
            {
                "id": "de32fa84-fb89-410b-bb40-49b473897442",
                "title": "Snail bob 3",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/Snail-img.png",
                "view_count": "27K"
            },
            {
                "id": "4426d6c0-279d-4efe-9091-d2570f315a0c",
                "title": "Mario",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/mario-img.png",
                "view_count": "31K"
            },
            {
                "id": "8c294ff4-1ff1-493f-b703-a60d6044e19c",
                "title": "Subway Surf",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/subway-surf-img.png",
                "view_count": "20K"
            },
            {
                "id": "edf13c11-7174-4c35-8990-d94e501e263d",
                "title": "Fruit Ninja",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/fruit-ninja-img.png",
                "view_count": "5.9K"
            },
            {
                "id": "11c5b163-6b87-4d2f-bbd4-aae2229d4128",
                "title": "Cooking Fever",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/cooking-fever-img.png",
                "view_count": "15K"
            },
            {
                "id": "2fc5781f-2881-42e6-b0cc-ebdb30f246c6",
                "title": "Join Clash",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/join-clash-3d-img.png",
                "view_count": "57K"
            },
            {
                "id": "00b4af7a-995c-4b88-8d02-4ef776e9ef2d",
                "title": "Talking Tom",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/talking-tom-img.png",
                "view_count": "68K"
            },
            {
                "id": "6dbf3cd4-b87b-4dd2-90b4-5929329c2df0",
                "title": "Galaxy",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/galaxy-img.png",
                "view_count": "12K"
            },
            {
                "id": "b507adf6-b5df-4bfe-8727-afe64b192a98",
                "title": "Tennis Clash",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/tennis-clash-img.png",
                "view_count": "11K"
            },
            {
                "id": "b8653c7f-5be7-49a9-84f8-d9f47842bb78",
                "title": "Block Puzzle",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/block-puzzle-img.png",
                "view_count": "7.1K"
            },
            {
                "id": "fb21cbc1-47e3-4bf5-87f9-9a4509b83cb9",
                "title": "Snake io",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/snake-io-img.png",
                "view_count": "5.8K"
            },
            {
                "id": "cb02cd3b-f4a0-4616-8182-d7086d0cf85b",
                "title": "Word pics",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/word-pics-img.png",
                "view_count": "21K"
            },
            {
                "id": "250d6355-55f2-4466-aa7b-bc5d23059230",
                "title": "Angry birds",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/angry-birds-img.png",
                "view_count": "10K"
            },
            {
                "id": "6e4e96ac-c259-44e7-95ce-6f7a162fedfc",
                "title": "Jungle Adventure",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/jungle-adventure-img.png",
                "view_count": "4K"
            },
            {
                "id": "15671fed-47a8-4e6c-b0f2-be43085b39b5",
                "title": "Sand Balls",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/sand-balls-img.png",
                "view_count": "12K"
            },
            {
                "id": "541e58ee-1024-4a88-a1a5-8de0a7b5b82e",
                "title": "Sling Shot Shooting",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/sling-shot-shooting-img.png",
                "view_count": "27K"
            },
            {
                "id": "20e2f5d3-b556-4bb2-af60-16bcb39a90b0",
                "title": "Garden Scapes",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/garden-scapes-img.png",
                "view_count": "2K"
            },
            {
                "id": "6e89a153-de5a-4b6b-b600-f4a0bad625b1",
                "title": "Magic Tile",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/magic-tile-3-img.png",
                "view_count": "11.9K"
            },
            {
                "id": "f5aa0bd0-aaf2-4816-810e-b893f9a5d5a6",
                "title": "Hair Challenge",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/hair-challenge-img.png",
                "view_count": "22K"
            },
            {
                "id": "45895678-411a-45f8-92bc-dd2964cf7f27",
                "title": "8 Ball pool",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/8-ball-pool--img.png",
                "view_count": "29K"
            },
            {
                "id": "03641f78-eca9-4231-a2ac-0219f5ddc554",
                "title": "UNO",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/uno-img.png",
                "view_count": "30K"
            },
            {
                "id": "69ad1aa6-ca21-4103-8275-619e2687da32",
                "title": "Minion Rush",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/minion-img.png",
                "view_count": "49K"
            },
            {
                "id": "f22f51df-c7d5-4d6e-b67b-7cf871d328fc",
                "title": "Jigsaw",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/jigsaw-img.png",
                "view_count": "40K"
            },
            {
                "id": "5025ee2b-6fa5-41de-86b7-6eb11ac2f4c1",
                "title": "Cut the Rope",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/cut-the-rope-img.png",
                "view_count": "32K"
            },
            {
                "id": "5094b343-7f61-4571-b392-58dbed7d5368",
                "title": "Mekorama",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/mekorama-img.png",
                "view_count": "545K"
            },
            {
                "id": "2d1a66dc-5daa-4ff4-809a-84a777a0a8ef",
                "title": "Call of Duty",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/call-of-duty-img.png",
                "view_count": "63K"
            },
            {
                "id": "a8b30db5-71b2-48c2-bd81-0b76a2da3197",
                "title": "Word Crush",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/word-crush-img.png",
                "view_count": "12K"
            },
            {
                "id": "74ae9d17-f65b-43e6-9931-56ab8b860991",
                "title": "Chain Reaction",
                "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/chain-reaction-img.png",
                "view_count": "39K"
            }
]

const homeVideos=[
    {
        "id": "30b642bd-7591-49f4-ac30-5c538f975b15",
        "title": "Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "1.4K",
        "published_at": "Apr 19, 2019"
    },
    {
        "id": "606f5b7b-9208-4eb2-a68c-1eb5faef4268",
        "title": "Yellow Strikers are Ready to Strike Big | Watch it on Viu | iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-2-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "2K",
        "published_at": "Mar 14, 2019"
    },
    {
        "id": "2fd4fa94-f8a1-4508-87e9-7cdd279c4a1f",
        "title": "Blue Blasters are ready | iB Cricket Super Over League | watch it on Viu",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-3-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "2.1K",
        "published_at": "Mar 14, 2019"
    },
    {
        "id": "6114fac6-44ff-47f8-82df-3426715e0b56",
        "title": "Sam Billings having fun with Virtual Reality Cricket",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-4-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "3.6K",
        "published_at": "Jan 30, 2019"
    },
    {
        "id": "51b73ec6-7cdb-4e6f-b290-868387ada97a",
        "title": "Stephen Fleming takes on Morne Morkel in VR Cricket",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-5-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "3.2K",
        "published_at": "Jan 23, 2019"
    },
    {
        "id": "420f102e-1734-4468-8d3c-797134c505b0",
        "title": "Best of Virender Sehwag in iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-6-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "2.3K",
        "published_at": "Jun 27, 2019"
    },
    {
        "id": "f1c2182d-568c-47de-89ff-fd612f0bd99d",
        "title": "Best of Suresh Raina in iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-7-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "2.9K",
        "published_at": "Jun 27, 2019"
    },
    {
        "id": "72274854-be1c-4ffd-9788-1e5d3c2d600c",
        "title": "Best of VVS Laxman in iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-8-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "1K",
        "published_at": "Jun 27, 2019"
    },
    {
        "id": "10dcb8df-11b3-4f70-9690-4a8929b89816",
        "title": "Best of Prithvi Shaw in iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-9-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "1.1K",
        "published_at": "Jun 27, 2019"
    },
    {
        "id": "66b857d7-9c62-496e-8404-88a6a1ccc295",
        "title": "Best of Mohammad Kaif in iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-10-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "45K",
        "published_at": "Jun 27, 2019"
    },
    {
        "id": "c965db6b-5e7f-4541-8412-e4e7e7912399",
        "title": "Best of Brendon McCullum in iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-11-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "1.6K",
        "published_at": "Jun 27, 2019"
    },
    {
        "id": "7650d552-1d4a-40e4-bcf8-1c13d78b38c1",
        "title": "Best of Andre Russell in iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-12-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "1.4K",
        "published_at": "Jun 27, 2019"
    },
    {
        "id": "7f280933-f36b-4d2f-8f4f-b31b089c8f78",
        "title": "Best of Chris Lynn in iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-13-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "675",
        "published_at": "Jun 27, 2019"
    },
    {
        "id": "268f94b2-ed0c-4f49-a743-0de35d1f2294",
        "title": "iB Cricket winning hearts across the world | Virtual Reality Cricket",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-14-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "5.4K",
        "published_at": "Jun 1, 2019"
    },
    {
        "id": "2c79fe02-67b8-45f7-b835-aa4971f5c4df",
        "title": "iB Cricket | The World's Most Immersive Virtual Reality Cricket",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-15-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "8.6K",
        "published_at": "Jan 31, 2019"
    },
    {
        "id": "2ebc17f9-fba5-4b24-9f5e-7e12137bb902",
        "title": "Fans playing with Rajasthan Royals stars | RR - iB Cricket Fan Tour | Rahane, Unadkat, Smith, Butler",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-fans-tour-3-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "2.5K",
        "published_at": "May 27, 2019"
    },
    {
        "id": "a25b246c-5b18-44dc-a832-6007c06397af",
        "title": "iB Cricket - A New Format of Cricket in Virtual Reality",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-vsport-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "21K",
        "published_at": "Feb 27, 2018"
    },
    {
        "id": "9a4d9c25-34af-44c8-898e-6bc4ba6c24a4",
        "title": "Fans playing cricket with CSK Stars | CSK - iB Cricket Fan Tour | MS Dhoni, Raina, Jadeja, Watson",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-fans-tour-2-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "6.2K",
        "published_at": "May 11, 2019"
    },
    {
        "id": "a294b662-2ae5-408d-93b1-7c8dbe4412fb",
        "title": "A ROYAL evening for RR stars with iB Cricket | Ajinkya Rahane, Sanju Samson, Jaydev Unadkat.",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-fans-tour-1-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "3.9K",
        "published_at": "May 9, 2019"
    },
    {
        "id": "5d7c6c4d-6ab2-48f4-af2d-5c6846180cc7",
        "title": "Mohammad Kaif and Brendon McCullum on fielding in iB Cricket | iB Cricket Super Over League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-16-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "1.9K",
        "published_at": "Apr 19, 2019"
    },
    {
        "id": "1f44125f-eeb0-40a7-a2bf-3c8f64e5a17a",
        "title": "iB Cricket Super Over League Official Announcement | World’s First Virtual Reality Cricket League",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-announce-1-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "30K",
        "published_at": "Feb 21, 2019"
    },
    {
        "id": "8d308548-9496-448a-b10f-70b173f87e68",
        "title": "Play 360 degrees in iB Cricket - World's Most Immersive VR Cricket",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-announce-2-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "231",
        "published_at": "Aug 2, 2021"
    },
    {
        "id": "e2df788b-ae68-465c-8a3c-b5701d3f9c5b",
        "title": "Announcing iB Cricket Home Edition",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-announce-1-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "287",
        "published_at": "Jul 27, 2021"
    },
    {
        "id": "beb03ef7-d8dc-4654-bf3f-fbbcc8523966",
        "title": "iB Cricket - World's most immersive VR Cricket",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-vsport-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "427",
        "published_at": "Jul 24, 2021"
    },
    {
        "id": "716142b5-fc5c-4a10-b29d-cb746258161c",
        "title": "iB Cricket Gameplay!! Numerous bowling styles, realistic animations, massive shots & more..",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-17-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "701",
        "published_at": "Apr 16, 2021"
    },
    {
        "id": "1cc3a158-6751-4a39-ae6f-c63a72108f12",
        "title": "Me, Dad & Cricket || Happy Father's Day 2020",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-announce-1-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "1.4K",
        "published_at": "Jun 21, 2020"
    },
    {
        "id": "e5cb5fc4-102a-4a8a-a8d7-f19a5b11fa7b",
        "title": "Indian Moms and Cricket | Their Advice to Kids",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-mothersday-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "583",
        "published_at": "May 10, 2020"
    },
    {
        "id": "e1e964ef-e0d0-44ac-8797-28832ce64e23",
        "title": "iB Cricket energizing corporate employees across the world",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-corporates-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "1.9K",
        "published_at": "Mar 11, 2020"
    },
    {
        "id": "616c16fe-b98a-4397-9a59-74cdd7b9bfb7",
        "title": "iB Cricket - IPL Fan Tours mesmerized cricket fans across India | RCB, CSK, KKR, RR and DC",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-fans-tour-4-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "5.7K",
        "published_at": "Jul 1, 2019"
    },
    {
        "id": "82832be4-a4d0-4613-bf9a-3a0bb3bf7bab",
        "title": "Fans playing with RCB stars in iB Cricket | RCB - iB Cricket Fan Tour | Virat Kohli, Ab De Villers",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-fans-tour-5-img.png",
        "channel": {
            "name": "iB Cricket",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
        },
        "view_count": "3.4K",
        "published_at": "Jun 1, 2019"
    },
    {
        "id": "ad9822d2-5763-41d9-adaf-baf9da3fd490",
        "title": "iB Hubs Announcement Event",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "26K",
        "published_at": "Nov 29, 2016"
    },
    {
        "id": "89383330-f76c-4ca4-b13b-9b3e9bf8a808",
        "title": "A welcoming interaction with Hyderabad startup community : iB Hubs",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-startup-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "9.6K",
        "published_at": "Sep 22, 2016"
    },
    {
        "id": "f3da2507-4ff5-41d0-b6d7-e796df01de25",
        "title": "iB Group Vision | Transforming India - From a Land of Potential to a Land of Opportunity",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-thumbnail-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "13.5K",
        "published_at": "Jan 22, 2018"
    },
    {
        "id": "8329b21b-44f2-4229-b4b0-4b7311513526",
        "title": "Social Entrepreneurship - A Practitioner's view Satish Burra",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-talk-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "2.4K",
        "published_at": "Nov 3, 2016"
    },
    {
        "id": "8884c12a-96f7-4f64-843d-d3ecde8eeb4f",
        "title": "iB Hubs IoT Bootcamp | End-to-End training in IoT with AR/VR - Blockchain - Security integrations",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-iot-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "8.9K",
        "published_at": "Jul 30, 2017"
    },
    {
        "id": "f3dc2b15-7c71-4ddb-94f1-3f2c86f9751f",
        "title": "iB Hubs Super 30 Aftermovie | Honouring Teachers Across India | Teachers Day",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-super-30-1-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "6.9K",
        "published_at": "Sep 5, 2020"
    },
    {
        "id": "4b42d8a0-5a9d-499e-bfca-f8a68f6d3bf6",
        "title": "iB Hubs Super 30 - Grand Felicitation - Mr. Nurul Islam",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-super-30-islam-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "15.7K",
        "published_at": "Oct 25, 2019"
    },
    {
        "id": "ea0a9be4-d94a-41db-82bf-044d8915d6cf",
        "title": "Innovation drives India into future - says Shri Amitabh Kant",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-talks-2-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "2.4K",
        "published_at": "Nov 16, 201"
    },
    {
        "id": "018f8cbf-ecc6-403b-96c5-b15736328818",
        "title": "iB Hubs Startup School - Student Acceleration Program | Future Begins Here | 2021 Edition",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-student-startup-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "2.8K",
        "published_at": "Apr 7, 2021"
    },
    {
        "id": "d54bee30-49a5-424f-aebe-7719500a5698",
        "title": "iB Hubs Super 30 | Honouring the teachers who shape the generations",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-super-30-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "8.4K",
        "published_at": "Jul 23, 2019"
    },
    {
        "id": "e426dbb7-cf95-42cb-aca8-9f4d3194b256",
        "title": "iB Hubs IoT Bootcamp 2018",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-bootcamp-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "1.5K",
        "published_at": "Dec 31, 2018"
    },
    {
        "id": "c049fa98-d91b-43d5-84d6-f57af0b5de6c",
        "title": "Journey of a Social Entrepreneur - Talk by Ms. Mukti K Bosco",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "823",
        "published_at": "Nov 1, 2016"
    },
    {
        "id": "6fcf2fe2-8cb8-4693-9ee8-45e09f9d2b30",
        "title": "5 Things you need to know to get high-paying jobs | CCBP 4.0 | NxtWave",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-motivation-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "6.5K",
        "published_at": "May 22, 2021"
    },
    {
        "id": "80ef9ba0-61ef-4e65-9f3c-506bfda7e74e",
        "title": "For the 1st time in my village, a girl graduated and got an IT job | Shobha | NxtWave CCBP Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-1-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "1K",
        "published_at": "Aug 2, 2021"
    },
    {
        "id": "a7b783bd-73d8-4b21-bc41-9a00ba015f3d",
        "title": "Fortunate to learn about 4.0 technologies in my B.Tech 1st year | Student Community | NxtWave Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-2-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "21K",
        "published_at": "Jul 17, 2021"
    },
    {
        "id": "b5f11f30-0b42-4b20-b228-40b611fa463e",
        "title": "[Telugu] A Parent's heartfelt review of the NxtWave CCBP Program",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-3-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "2.4K",
        "published_at": "Jul 31, 2021"
    },
    {
        "id": "fce38366-577c-42a2-9886-312d38e2bd56",
        "title": "6 Year Career Gap to a Software Engineer | NxtWave - CCBP | Bhavya Success Story",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-4-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "1.8K",
        "published_at": "Aug 12, 2021"
    },
    {
        "id": "9d784e89-4d4f-465c-a933-1d03f3a112cb",
        "title": "From Civil Engineer to Full Stack Developer in 4 months | NxtWave & CCBP 4.0 | Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-5-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "10.2K",
        "published_at": "Apr 19, 2021"
    },
    {
        "id": "79ddf1f3-65ce-4464-be83-775a8f6a0e5f",
        "title": "From a struggling coder to a high-paid tech job | NxtWave - CCBP 4.0 | Success - Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-6-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "5K",
        "published_at": "May 24, 2021"
    },
    {
        "id": "d1d89ac3-9652-450a-ad6c-2eed76a894d4",
        "title": "[Telugu] I recommend every parent to provide CCBP to their Children | NxtWave Parents Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-7-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "6K",
        "published_at": "Aug 6, 2021"
    },
    {
        "id": "336ef790-5a13-4a43-b7d8-b24866fa9c9d",
        "title": "[Telugu] An ECE graduate to an Associate Software Engineer | NxtWave - CCBP 4.0 | Success - Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-8-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "3.5K",
        "published_at": "Jun 24, 2021"
    },
    {
        "id": "4c9d11ec-5d49-4a8e-be31-a40955074b7b",
        "title": "Bootcamp gave me deeper insights on emerging technologies | NxtWave - Student Community | Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-9-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "910",
        "published_at": "Jul 12, 2021"
    },
    {
        "id": "85afde7d-a685-4a5f-ad2f-c3fc516b2e42",
        "title": "Bootcamp gave me 360 degrees knowledge on IoT | NxtWave - Student Community | Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-10-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "597",
        "published_at": "Jul 5, 2021"
    },
    {
        "id": "c3f9625a-9c01-408d-b6c4-57117d62ee35",
        "title": "Bootcamp boosted my knowledge in AI/ML & Cybersecurity | NxtWave - Student Community | Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-11-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "9K",
        "published_at": "Jul 4, 2021"
    },
    {
        "id": "a9bdf0ed-05e4-407e-b2bb-8a29d4c36ac8",
        "title": "[Telugu] Overcame fears with mock interviews and cleared my job interview| NxtWave| Yashwanth Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-12-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "4.5K",
        "published_at": "Sep 1, 2021"
    },
    {
        "id": "0f6e0294-0cb4-47ec-bba5-981fd9fff86e",
        "title": "[Telugu]Coding practices & cheat-sheets made me competent for projects | CCBP 4.0 Review |Sudharshan",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-13-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "2K",
        "published_at": "Sep 2, 2021"
    },
    {
        "id": "00780a5b-0b73-4cbe-91c6-91371fd8f078",
        "title": "The Things Conference India 2018 | After Movie",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-img.png",
        "channel": {
            "name": "CyberEye",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/cyber-eye-img.png"
        },
        "view_count": "75K",
        "published_at": "Apr 23, 2020"
    },
    {
        "id": "330f1c47-2608-452a-ad65-e0d9b159d00c",
        "title": "The Things Conference India 2019 | After Movie",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-2-img.png",
        "channel": {
            "name": "CyberEye",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/cyber-eye-img.png"
        },
        "view_count": "23K",
        "published_at": "Apr 23, 2020"
    },
    {
        "id": "9420a07a-df83-419e-a46e-ed308103e829",
        "title": "Avinash Dara, CyberEye | Smart Campus - A Deployment Perspective | The Things Virtual Conference",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-cyber-eye-img.png",
        "channel": {
            "name": "CyberEye",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/cyber-eye-img.png"
        },
        "view_count": "23K",
        "published_at": "Apr 23, 2020"
    },
    {
        "id": "f163fd54-0f08-4cc1-a5aa-308f27132cc6",
        "title": "The Things Conference India 2019 After Movie",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-2-img.png",
        "channel": {
            "name": "The Things Network",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/the-things-network-img.png"
        },
        "view_count": "2.6K",
        "published_at": "Oct 23, 2019"
    }
]

const trendingVideos=[
    {
        "id": "ad9822d2-5763-41d9-adaf-baf9da3fd490",
        "title": "iB Hubs Announcement Event",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "26K",
        "published_at": "Nov 29, 2016"
    },
    {
        "id": "89383330-f76c-4ca4-b13b-9b3e9bf8a808",
        "title": "A welcoming interaction with Hyderabad startup community : iB Hubs",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-startup-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "9.6K",
        "published_at": "Sep 22, 2016"
    },
    {
        "id": "f3da2507-4ff5-41d0-b6d7-e796df01de25",
        "title": "iB Group Vision | Transforming India - From a Land of Potential to a Land of Opportunity",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-thumbnail-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "13.5K",
        "published_at": "Jan 22, 2018"
    },
    {
        "id": "8329b21b-44f2-4229-b4b0-4b7311513526",
        "title": "Social Entrepreneurship - A Practitioner's view Satish Burra",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-talk-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "2.4K",
        "published_at": "Nov 3, 2016"
    },
    {
        "id": "8884c12a-96f7-4f64-843d-d3ecde8eeb4f",
        "title": "iB Hubs IoT Bootcamp | End-to-End training in IoT with AR/VR - Blockchain - Security integrations",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-iot-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "8.9K",
        "published_at": "Jul 30, 2017"
    },
    {
        "id": "f3dc2b15-7c71-4ddb-94f1-3f2c86f9751f",
        "title": "iB Hubs Super 30 Aftermovie | Honouring Teachers Across India | Teachers Day",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-super-30-1-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "6.9K",
        "published_at": "Sep 5, 2020"
    },
    {
        "id": "4b42d8a0-5a9d-499e-bfca-f8a68f6d3bf6",
        "title": "iB Hubs Super 30 - Grand Felicitation - Mr. Nurul Islam",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-super-30-islam-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "15.7K",
        "published_at": "Oct 25, 2019"
    },
    {
        "id": "ea0a9be4-d94a-41db-82bf-044d8915d6cf",
        "title": "Innovation drives India into future - says Shri Amitabh Kant",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-talks-2-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "2.4K",
        "published_at": "Nov 16, 201"
    },
    {
        "id": "018f8cbf-ecc6-403b-96c5-b15736328818",
        "title": "iB Hubs Startup School - Student Acceleration Program | Future Begins Here | 2021 Edition",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-student-startup-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "2.8K",
        "published_at": "Apr 7, 2021"
    },
    {
        "id": "d54bee30-49a5-424f-aebe-7719500a5698",
        "title": "iB Hubs Super 30 | Honouring the teachers who shape the generations",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-super-30-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "8.4K",
        "published_at": "Jul 23, 2019"
    },
    {
        "id": "e426dbb7-cf95-42cb-aca8-9f4d3194b256",
        "title": "iB Hubs IoT Bootcamp 2018",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-bootcamp-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "1.5K",
        "published_at": "Dec 31, 2018"
    },
    {
        "id": "c049fa98-d91b-43d5-84d6-f57af0b5de6c",
        "title": "Journey of a Social Entrepreneur - Talk by Ms. Mukti K Bosco",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
        "channel": {
            "name": "iB Hubs",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
        },
        "view_count": "823",
        "published_at": "Nov 1, 2016"
    },
    {
        "id": "6fcf2fe2-8cb8-4693-9ee8-45e09f9d2b30",
        "title": "5 Things you need to know to get high-paying jobs | CCBP 4.0 | NxtWave",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-motivation-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "6.5K",
        "published_at": "May 22, 2021"
    },
    {
        "id": "80ef9ba0-61ef-4e65-9f3c-506bfda7e74e",
        "title": "For the 1st time in my village, a girl graduated and got an IT job | Shobha | NxtWave CCBP Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-1-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "1K",
        "published_at": "Aug 2, 2021"
    },
    {
        "id": "a7b783bd-73d8-4b21-bc41-9a00ba015f3d",
        "title": "Fortunate to learn about 4.0 technologies in my B.Tech 1st year | Student Community | NxtWave Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-2-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "21K",
        "published_at": "Jul 17, 2021"
    },
    {
        "id": "b5f11f30-0b42-4b20-b228-40b611fa463e",
        "title": "[Telugu] A Parent's heartfelt review of the NxtWave CCBP Program",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-3-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "2.4K",
        "published_at": "Jul 31, 2021"
    },
    {
        "id": "fce38366-577c-42a2-9886-312d38e2bd56",
        "title": "6 Year Career Gap to a Software Engineer | NxtWave - CCBP | Bhavya Success Story",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-4-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "1.8K",
        "published_at": "Aug 12, 2021"
    },
    {
        "id": "9d784e89-4d4f-465c-a933-1d03f3a112cb",
        "title": "From Civil Engineer to Full Stack Developer in 4 months | NxtWave & CCBP 4.0 | Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-5-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "10.2K",
        "published_at": "Apr 19, 2021"
    },
    {
        "id": "79ddf1f3-65ce-4464-be83-775a8f6a0e5f",
        "title": "From a struggling coder to a high-paid tech job | NxtWave - CCBP 4.0 | Success - Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-6-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "5K",
        "published_at": "May 24, 2021"
    },
    {
        "id": "d1d89ac3-9652-450a-ad6c-2eed76a894d4",
        "title": "[Telugu] I recommend every parent to provide CCBP to their Children | NxtWave Parents Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-7-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "6K",
        "published_at": "Aug 6, 2021"
    },
    {
        "id": "336ef790-5a13-4a43-b7d8-b24866fa9c9d",
        "title": "[Telugu] An ECE graduate to an Associate Software Engineer | NxtWave - CCBP 4.0 | Success - Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-8-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "3.5K",
        "published_at": "Jun 24, 2021"
    },
    {
        "id": "4c9d11ec-5d49-4a8e-be31-a40955074b7b",
        "title": "Bootcamp gave me deeper insights on emerging technologies | NxtWave - Student Community | Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-9-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "910",
        "published_at": "Jul 12, 2021"
    },
    {
        "id": "85afde7d-a685-4a5f-ad2f-c3fc516b2e42",
        "title": "Bootcamp gave me 360 degrees knowledge on IoT | NxtWave - Student Community | Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-10-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "597",
        "published_at": "Jul 5, 2021"
    },
    {
        "id": "c3f9625a-9c01-408d-b6c4-57117d62ee35",
        "title": "Bootcamp boosted my knowledge in AI/ML & Cybersecurity | NxtWave - Student Community | Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-11-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "9K",
        "published_at": "Jul 4, 2021"
    },
    {
        "id": "a9bdf0ed-05e4-407e-b2bb-8a29d4c36ac8",
        "title": "[Telugu] Overcame fears with mock interviews and cleared my job interview| NxtWave| Yashwanth Review",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-12-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "4.5K",
        "published_at": "Sep 1, 2021"
    },
    {
        "id": "0f6e0294-0cb4-47ec-bba5-981fd9fff86e",
        "title": "[Telugu]Coding practices & cheat-sheets made me competent for projects | CCBP 4.0 Review |Sudharshan",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxtwave-success-13-img.png",
        "channel": {
            "name": "NxtWave",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/nxt-wave-img.png"
        },
        "view_count": "2K",
        "published_at": "Sep 2, 2021"
    },
    {
        "id": "00780a5b-0b73-4cbe-91c6-91371fd8f078",
        "title": "The Things Conference India 2018 | After Movie",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-img.png",
        "channel": {
            "name": "CyberEye",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/cyber-eye-img.png"
        },
        "view_count": "75K",
        "published_at": "Apr 23, 2020"
    },
    {
        "id": "330f1c47-2608-452a-ad65-e0d9b159d00c",
        "title": "The Things Conference India 2019 | After Movie",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-2-img.png",
        "channel": {
            "name": "CyberEye",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/cyber-eye-img.png"
        },
        "view_count": "23K",
        "published_at": "Apr 23, 2020"
    },
    {
        "id": "9420a07a-df83-419e-a46e-ed308103e829",
        "title": "Avinash Dara, CyberEye | Smart Campus - A Deployment Perspective | The Things Virtual Conference",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-cyber-eye-img.png",
        "channel": {
            "name": "CyberEye",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/cyber-eye-img.png"
        },
        "view_count": "23K",
        "published_at": "Apr 23, 2020"
    },
    {
        "id": "f163fd54-0f08-4cc1-a5aa-308f27132cc6",
        "title": "The Things Conference India 2019 After Movie",
        "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/things-conference-2-img.png",
        "channel": {
            "name": "The Things Network",
            "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/the-things-network-img.png"
        },
        "view_count": "2.6K",
        "published_at": "Oct 23, 2019"
    }
]

app.get('/',(req,res)=>{
    res.send("Welcome to NxtWatch Details")
})

app.get('/home',(req,res)=>{
    res.send(homeVideos)
})

app.get('/trending',(req,res)=>{
    res.send(trendingVideos)
})

app.get('/gaming',(req,res)=>{
    res.send(gamingVideos)
})


app.listen(7000,()=>{
    console.log("Server starting at port:7000")
})