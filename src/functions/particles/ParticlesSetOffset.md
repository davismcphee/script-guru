---
tags:
  - ParticlesSetOffset(emitterId, offsetMinX, offsetMinY, offsetMinZ, offsetMaxX, offsetMaxY, offsetMaxZ)
  - Particles
  - Set
  - Offset
---

# ParticlesSetOffset(emitterId, offsetMinX, offsetMinY, offsetMinZ, offsetMaxX, offsetMaxY, offsetMaxZ)

| Parameter  | Type   | Description                                                                                     |
| ---------- | ------ | ----------------------------------------------------------------------------------------------- |
| emitterId  | number | The emitter ID                                                                                  |
| offsetMinX | number | The minimum distance (units) along the X axis relative to the emitter that a particle can spawn |
| offsetMinY | number | The minimum distance (units) along the Y axis relative to the emitter that a particle can spawn |
| offsetMinZ | number | The minimum distance (units) along the Z axis relative to the emitter that a particle can spawn |
| offsetMaxX | number | The maximum distance (units) along the X axis relative to the emitter that a particle can spawn |
| offsetMaxY | number | The maximum distance (units) along the Y axis relative to the emitter that a particle can spawn |
| offsetMaxZ | number | The maximum distance (units) along the Z axis relative to the emitter that a particle can spawn |

## Details

Sets the offset range for particles emitted by a particle emitter. See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for more information.

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

ParticlesSetOffset(
  emitterId,
  -5, -5, -5,      -- minimum offsets
  5, 5, 5,         -- maximum offsets
)
```
