---
tags:
  - ParticlesSetAngle(emitterId, xAngle, yAngle, zAngle)
  - Particles
  - Set
  - Angle
---

# ParticlesSetAngle(emitterId, xAngle, yAngle, zAngle)

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| emitterId | number | The emitter ID         |
| xAngle    | number | The X angle in degrees |
| yAngle    | number | The Y angle in degrees |
| zAngle    | number | The Z angle in degrees |

## Details

Explicitly sets the angle of particles emitted by a particle emitter. **NOTE: Calling this function on a particle emitter will disable the default player-facing behaviour for all particles from that emitter.** See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for more information.

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

-- Disables player-facing functionality from this point on for this emitter
ParticlesSetAngle(emitterId, 45, 45, 45)
```
