---
tags:
  - ParticlesSetFrames(emitterId, animationSpeed, startFrame, endFrame)
  - Particles
  - Set
  - Frames
---

# ParticlesSetFrames(emitterId, animationSpeed, startFrame, endFrame)

| Parameter      | Type   | Description                                                                                                                                      |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| emitterId      | number | The emitter ID                                                                                                                                   |
| animationSpeed | number | The speed of the particle sprite animation (1 with 64-frame sprite = 65 frames per second, 0.5 with 64-frame sprite = 32 frames per second, ...) |
| startFrame     | number | The frame the particle animation should start at (0 < startFrame < endFrame)                                                                     |
| endFrame       | number | The frame the particle animation should end at (startFrame < endFrame)                                                                           |

## Details

Adjust the particle animation speed, and set which frames from the sprite sheet to use for the particle animation. See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for more information.

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

ParticlesSetFrames(
  emitterId,
  1,
  16,
  32
)
```
