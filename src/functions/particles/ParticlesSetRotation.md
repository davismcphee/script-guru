---
tags:
  - ParticlesSetRotation(emitterId, 0, 0, rotateSpeedMinZ, 0, 0, rotateSpeedMaxZ)
  - Particles
  - Set
  - Rotation
---

# ParticlesSetRotation(emitterId, 0, 0, rotateSpeedMinZ, 0, 0, rotateSpeedMaxZ)

| Parameter       | Type   | Description                                                                     |
| --------------- | ------ | ------------------------------------------------------------------------------- |
| emitterId       | number | The emitter ID                                                                  |
| 0               | 0      | RESERVED                                                                        |
| 0               | 0      | RESERVED                                                                        |
| rotateSpeedMinZ | number | The minimum rotation speed of a particle (clockwise > 0, counter-clockwise < 0) |
| 0               | 0      | RESERVED                                                                        |
| 0               | 0      | RESERVED                                                                        |
| rotateSpeedMaxZ | number | The maximum rotation speed of a particle (clockwise > 0, counter-clockwise < 0) |

## Details

Sets the rotation speed of particles emitted by a particle emitter. See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for more information.

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

ParticlesSetRotation(emitterId, 0, 0, 0.25, 0, 0, 0.25)
```
