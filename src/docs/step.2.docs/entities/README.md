# Entity Globals

GameGuru exposes these globals to access entity properties:

```lua
-- This is the global entity store. A specific entity's properties can be
-- accessed by by referencing g_Entity[e] where 'e' is the entity's ID
g_Entity[e] = {
  -- Flag indicating whether or not the entity has been activated
  activated = 1

  -- Flag indicating whether or not the entity is active
  active = 0

  -- The entity's current X angle
  anglex = 0

  -- The entity's current Y angle
  angley = 0

  -- The entity's current Z angle
  anglez = 0

  -- Flag indicating whether or not the entity is currently being animated
  animating = 0

  -- TODO
  avoid = 0

  -- Flag indicating whether or not the player has collected the entity
  collected = 0

  -- TODO
  entityinzone = 0

  -- TODO
  frame = 0

  -- Flag indicating whether or not the player has the key required to activate the entity
  haskey = 0

  -- The entity's health
  health = 0

  -- Flag indicating whether or not one of the entity's limbs was hit
  limbhit = 0

  -- The index of the entity's limb that was hit
  limbhitindex = 0

  -- The entity's object ID
  obj = 0

  -- The distance in TODO between the entity and the player
  plrdist = 0

  -- Flag indicating whether or not the player is in the zone, if the entity is a zone
  plrinzone = 0

  -- Flag indicating whether or not the player is visible to this entity
  plrvisible = 0

  -- The entity's timer
  timer = 0

  -- The X coordinate of the entity's current position
  x = 90

  -- The Y coordinate of the entity's current position
  y = 90

  -- The Z coordinate of the entity's current position
  z = 90
}
```
