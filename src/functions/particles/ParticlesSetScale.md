---
tags:
  - ParticlesSetScale(emitterId, scaleStartMin, scaleStartMax, scaleEndMin, scaleEndMax)
  - Particles
  - Set
  - Scale
---

# ParticlesSetScale(emitterId, scaleStartMin, scaleStartMax, scaleEndMin, scaleEndMax)

| Parameter     | Type   | Description                                                            |
| ------------- | ------ | ---------------------------------------------------------------------- |
| emitterId     | number | The emitter ID                                                         |
| scaleStartMin | number | The minimum size a particle can be when spawned (1 = normal)           |
| scaleStartMax | number | The maximum size a particle can be when spawned (1 = normal)           |
| scaleEndMin   | number | The minimum size a particle can be by the end of its life (1 = normal) |
| scaleEndMax   | number | The maximum size a particle can be by the end of its life (1 = normal) |

## Details

Sets the scale range for particles emitted by a particle emitter. See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for more information.

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

ParticlesSetScale(
  emitterId,
  5, 25,           -- start scales
  0, 1,            -- end scales
)
```
