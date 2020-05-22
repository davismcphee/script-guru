---
tags:
  - ParticlesAddEmitterEx(...args)
  - Particles
  - Add
  - Emitter
  - Ex
---

# ParticlesAddEmitterEx(...args)

| Parameter            | Type   | Description                                                                                                                                      |
| -------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| emitterId            | number | The emitter ID                                                                                                                                   |
| animationSpeed       | number | The speed of the particle sprite animation (1 with 64-frame sprite = 65 frames per second, 0.5 with 64-frame sprite = 32 frames per second, ...) |
| startsOffRandomAngle | number | A flag indicating whether or not the emitter should begin emitting at a random angle (0 = false, 1 = true)                                       |
| offsetMinX           | number | The minimum distance (units) along the X axis relative to the emitter that a particle can spawn                                                  |
| offsetMinY           | number | The minimum distance (units) along the Y axis relative to the emitter that a particle can spawn                                                  |
| offsetMinZ           | number | The minimum distance (units) along the Z axis relative to the emitter that a particle can spawn                                                  |
| offsetMaxX           | number | The maximum distance (units) along the X axis relative to the emitter that a particle can spawn                                                  |
| offsetMaxY           | number | The maximum distance (units) along the Y axis relative to the emitter that a particle can spawn                                                  |
| offsetMaxZ           | number | The maximum distance (units) along the Z axis relative to the emitter that a particle can spawn                                                  |
| scaleStartMin        | number | The minimum size a particle can be when spawned (1 = normal)                                                                                     |
| scaleStartMax        | number | The maximum size a particle can be when spawned (1 = normal)                                                                                     |
| scaleEndMin          | number | The minimum size a particle can be by the end of its life (1 = normal)                                                                           |
| scaleEndMax          | number | The maximum size a particle can be by the end of its life (1 = normal)                                                                           |
| movementSpeedMinX    | number | The minimum speed at which a particle can travel along the X axis (units per frame)                                                              |
| movementSpeedMinY    | number | The minimum speed at which a particle can travel along the Y axis (units per frame)                                                              |
| movementSpeedMinZ    | number | The minimum speed at which a particle can travel along the Z axis (units per frame)                                                              |
| movementSpeedMaxX    | number | The maximum speed at which a particle can travel along the X axis (units per frame)                                                              |
| movementSpeedMaxY    | number | The maximum speed at which a particle can travel along the Y axis (units per frame)                                                              |
| movementSpeedMaxZ    | number | The maximum speed at which a particle can travel along the Z axis (units per frame)                                                              |
| rotateSpeedMinZ      | number | The minimum rotation speed of a particle (clockwise > 0, counter-clockwise < 0)                                                                  |
| rotateSpeedMaxZ      | number | The maximum rotation speed of a particle (clockwise > 0, counter-clockwise < 0)                                                                  |
| lifeMin              | number | The minimum lifetime of a particle in milliseconds                                                                                               |
| lifeMax              | number | The maximum lifetime of a particle in milliseconds                                                                                               |
| alphaStartMin        | number | The minimum start transparency of a particle (0 = transparent, 100 = opaque)                                                                     |
| alphaStartMax        | number | The maximum start transparency of a particle (0 = transparent, 100 = opaque)                                                                     |
| alphaEndMin          | number | The minimum end transparency of a particle (0 = transparent, 100 = opaque)                                                                       |
| alphaEndMax          | number | The maximum end transparency of a particle (0 = transparent, 100 = opaque)                                                                       |
| frequency            | number | The rate in milliseconds at which the emitter spawns particles                                                                                   |
| e                    | number | The ID of the entity which this emitter should attach to (-1 = attach to player)                                                                 |
| limbIndex            | number | The entity limbindex which this emitter should attach to (0 = default)                                                                           |
| image                | number | The image ID to use as the particle sprite sheet (see [ParticlesLoadImage](./ParticlesLoadImage.md))                                             |
| size                 | number | The number of frames in the particle sprite sheet                                                                                                |

## Details

Identical to ParticlesAddEmitter except for the addition of four parameters for extra control over the emitter. See [ParticlesAddEmitter](./ParticlesAddEmitter.md) for more information.

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
```
