---
tags:
  - ParticlesLoadImage(imagePath, imageId?)
  - Particles
  - Load
  - Image
---

# ParticlesLoadImage(imagePath, imageId?)

| Parameter | Type    | Description                                                                |
| --------- | ------- | -------------------------------------------------------------------------- |
| imagePath | string  | The path to the particle sprite sheet (relative to GameGuru \Files folder) |
| imageId   | number? | Optional - explicitly set the image ID to use                              |

## Details

Loads a particle sprite sheet to use with particle emitters, and returns the image ID. See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for more information.

## Example

```lua
local emitterId = ParticlesGetFreeEmitter()
local myImageId = ParticlesLoadImage('effectbank\\particles\\flowerpuff.dds')

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
  myImageId,       -- image ID
  64               -- image size (MUST MATCH NUMBER OF FRAMES IN myImageId)
)
```
