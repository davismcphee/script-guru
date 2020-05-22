---
tags:
  - ParticlesSetLife(emitterId, lifeMin, lifeMax, maxParticles, 0, maxPerFrame)
  - Particles
  - Set
  - Life
---

# ParticlesSetLife(emitterId, lifeMin, lifeMax, maxParticles, 0, maxPerFrame)

| Parameter    | Type   | Description                                                        |
| ------------ | ------ | ------------------------------------------------------------------ |
| emitterId    | number | The emitter ID                                                     |
| lifeMin      | number | The minimum lifetime of a particle in milliseconds                 |
| lifeMax      | number | The maximum lifetime of a particle in milliseconds                 |
| maxParticles | number | Maximum number of particles that can be alive at the same time     |
| 0            | 0      | RESERVED                                                           |
| maxPerFrame  | number | Maximum number of particles a particle emitter can spawn per frame |

## Details

Controls the lifetime and number of particles emitted by a particle emitter. See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for more information.

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

ParticlesSetLife(emitterId, 1000, 5000, 100, 0, 50)
```
