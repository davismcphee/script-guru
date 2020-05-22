---
tags:
  - ParticlesSetSpeed(emitterId, movementSpeedMinX, movementSpeedMinY, movementSpeedMinZ, movementSpeedMaxX, movementSpeedMaxY, movementSpeedMaxZ)
  - Particles
  - Set
  - Speed
---

# ParticlesSetSpeed(emitterId, movementSpeedMinX, movementSpeedMinY, movementSpeedMinZ, movementSpeedMaxX, movementSpeedMaxY, movementSpeedMaxZ)

| Parameter         | Type   | Description                                                                         |
| ----------------- | ------ | ----------------------------------------------------------------------------------- |
| emitterId         | number | The emitter ID                                                                      |
| movementSpeedMinX | number | The minimum speed at which a particle can travel along the X axis (units per frame) |
| movementSpeedMinY | number | The minimum speed at which a particle can travel along the Y axis (units per frame) |
| movementSpeedMinZ | number | The minimum speed at which a particle can travel along the Z axis (units per frame) |
| movementSpeedMaxX | number | The maximum speed at which a particle can travel along the X axis (units per frame) |
| movementSpeedMaxY | number | The maximum speed at which a particle can travel along the Y axis (units per frame) |
| movementSpeedMaxZ | number | The maximum speed at which a particle can travel along the Z axis (units per frame) |

## Details

Sets the speed range for particles emitted by a particle emitter. See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for more information.

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

ParticlesSetSpeed(
  emitterId,
  -0.25, 0, -0.25, -- minimum movement speeds
  0.25, 0, 0.25,   -- maximum movement speeds
)
```
