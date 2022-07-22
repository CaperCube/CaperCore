# Task 2

## Win conditions
Reasonbly play creative mode with friends.

# Sub-Tasks
- [ ] Better world gen (start putting this in './brain')
    - [X] Live load chunk meshes
    - [X] Save / Load worlds (probably as a .json)
        - [ ] Move these functions inside the "World()" class
- [X] Better chunk rendering performance
    - [X] Combine meshes in chunks (fewer draw calls = more performance)
    - [X] Reduce meshes (remove face that won't be seen)
    - [X] Remove faces from chunk edges that touch
- [ ] Improved Player
    - [ ] Changeable player name
    - [ ] Better raycaster for block selection
    - [X] Inventory system
    - [ ] Health system (tracked by brain)
    - [X] Simple weapon
- [ ] Basic networking
    - [X] Basic event system?
        - [X] Create communication layer to be used to send messages between the client(s) and brain
        - [X] Create the ability to trigger events in the Game object (i.e. add / remove / change block)
    - [X] Connect to custom URL
    - [ ] Send/Receive messages
        - [X] Give new players a playerID
        - [X] New Players / Leaving Players
        - [X] Movement
        - [ ] Chat messages
            - [X] Chat commands
            - [ ] Server-side option to filter html / js code out of user messages
                - [ ] Chat command to toggle this (Admin only)
            - [X] Privileges
        - [X] Chunk changes
    - [X] Networking for sending / receiving messages
    - [X] Work on generic messages for extendability

# Clean-up Sub-Tasks
- [ ] Replace var & function comments with code-hint comments
    - look at `positionUtils.js` for examples
- [ ] Start writing some more solid documentation
    - [ ] Create an HTML page to edit, store, and search through the docs
        - This should be a seperate repo (so it can also scale if needed)
        - This could also be a good place to put other how-to's
            - How to play
            - How to host
            - how to use editors

# Bonus Sub-Tasks
- [X] Block objects (referenced by blockID)
- [ ] Consider creating a custom `PatternGenerator` class with various seeded 3D noise generators
    - [Perlin noise tutorial](https://joeiddon.github.io/projects/javascript/perlin.html)
    - [Helpful article on seeded random](https://davidbau.com/archives/2010/01/30/random_seeds_coded_hints_and_quintillions.html)
- [X] Interactable blocks
    - [X] Embedded link block
- [X] .glb world export
- [X] Basic gun and deathmatch mode