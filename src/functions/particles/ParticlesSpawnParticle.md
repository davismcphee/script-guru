---
tags:
  - ParticlesSpawnParticle(emitterId, xPos, yPos, zPos)
  - Particles
  - Spawn
  - Particle
---

# ParticlesSpawnParticle(emitterId, xPos, yPos, zPos)

| Parameter | Type   | Description                                  |
| --------- | ------ | -------------------------------------------- |
| emitterId | number | The emitter ID                               |
| xPos      | number | The X coordinate of the particle spawn point |
| yPos      | number | The Y coordinate of the particle spawn point |
| zPos      | number | The Z coordinate of the particle spawn point |

## Details

Forces a particle emitter to spawn a particle at the specified coordinates on the map. See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for more information.

## Example

```lua
local emitterId = ParticlesGetFreeEmitter()

ParticlesAddEmitterEx(
  emitterId,       -- emitter ID
  1,               -- animation speed
  1,               -- starts off at random angle
  -5, -5, -5,      -- minimum offsets
  5, 5, 5,         -- maximum offsets
  5, 25,           -- start scales
  0, 1,            -- end scales
  -0.25, 0, -0.25, -- minimum movement speeds
  0.25, 0, 0.25,   -- maximum movement speeds
  0, 0.25,         -- rotation speeds
  1000, 5000,      -- lifetime
  50, 75,          -- start transparency
  0, 10,           -- end transparency
  100,             -- frequency
  -1,              -- entity ID
  0,               -- limb index
  1,               -- image ID
  64               -- image size
)

ParticlesSpawnParticle(emitterId, 0, 0, 0)
```
