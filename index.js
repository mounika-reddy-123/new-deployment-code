const express=require('express')
const app=express()

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


app.get('/',(req,res)=>{
    res.send(gamingVideos)
})

app.listen(7000,()=>{
    console.log("Server starting at port:7000")
})