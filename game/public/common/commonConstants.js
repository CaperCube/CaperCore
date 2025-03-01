import { randomArray } from './dataUtils.js'

// Game constants
const gameModes = {
    creative: 'creative',
    spectator: 'spectator',
    parkour: 'parkour',
    deathMatch: 'deathmatch',
    teamDeathMatch: 'teamdeathmatch',
}

const teams = { // The string values here are also used as colors
    none: 'white',
    blue: 'blue',
    red: 'red',
    green: 'green',
    yellow: 'yellow'
}

// Consider including chunk scale in here as well
const tileScale = 1 // Do not change this
const defaultChunkSize = 8
const defaultWorldSize = 10

// Player constants
const playerNames = {
    adjective: [
        "King",
        "Crazed",
        "Cracked",
        "Good",
        "Kind",
        "Evil",
        "Bad",
        "Wrong",
        "Hollow",
        "Slimy",
        "Blocky",
        "Cubic",
        "Soccer",
        "Meh"
    ],
    nouns: [
        "Player",
        "Stinker",
        "Wombat",
        "Salamader",
        "Buster",
        "Billy",
        "Crab",
        "Gibby",
        "Name",
        "Gamer",
        "Knight",
        "Dog",
        "Cat",
        "Scope",
        "Tap",
        "Fart",
        "Block",
        "Android",
        "Robot",
        "Snake",
        "NPC",
        "Doctor",
        "Sock"
    ]
}

// Face frames
const faceEmotes = {
    normal: 2,
    pain: 5,
    blink: 6,
    talk: 9,
    happy: 10
}

const getRandomName = () => {
    var phrase = randomArray(playerNames.adjective) + " " + randomArray(playerNames.nouns)
    return formatPlayerName(phrase)
}

// Formatting for player names
const formatPlayerName = (playerName) => {
    // Only allow alphanumeric
    let returnName = playerName.replace(/[^a-z0-9]/gi, "")

    return returnName || "player"
}

export {
    gameModes,
    teams,
    tileScale,
    defaultChunkSize,
    defaultWorldSize,
    faceEmotes,
    getRandomName,
    formatPlayerName
}