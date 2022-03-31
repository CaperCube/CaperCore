import ClientGame from "./clientGame.js"

/*
When making a single player game:

const brain = new Game({ worldSetting: settings })
const clientGame = new ClientGame({ connection: comLayer })
const comLayer = new CommunicationLayer({ type: `offline`, host: brain, client: clientGame })

When making a multiplayer game:

const clientGame = new ClientGame({ connection: comLayer })
const comLayer = new CommunicationLayer({ type: `online`, host: `ip`, client: clientGame })
*/

const canvas = $('#main-canvas')

// `isNetworked: false` automatically creates a `new BrainGame()` inside the ClientGame object
const clientGame = new ClientGame({ isNetworked: false, canvas: canvas })

// Start game scene
// clientGame.clientComs.createNewWorld()
const createWorldWithSize = (size) => {
    clientGame.menu.hide()
    if ($('#loading-basic')) $('#loading-basic').style.display = 'inline-block' // ToDo: replace this with a more robust loading indicator
    setTimeout(() => { clientGame.clientComs.createNewWorld(size) }, 100)
}
clientGame.menu.playMenu.elements[clientGame.menu.playMenu.elements.length-4].pressButton = () => { createWorldWithSize(5) }
clientGame.menu.playMenu.elements[clientGame.menu.playMenu.elements.length-3].pressButton = () => { createWorldWithSize(10) }
clientGame.menu.playMenu.elements[clientGame.menu.playMenu.elements.length-2].pressButton = () => { createWorldWithSize(16) }