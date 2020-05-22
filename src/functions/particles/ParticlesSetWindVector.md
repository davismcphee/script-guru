---
tags:
  - ParticlesSetWindVector(windX, windZ)
  - Particles
  - Set
  - Wind
  - Vector
---

# ParticlesSetWindVector(windX, windZ)

| Parameter | Type   | Description                                    |
| --------- | ------ | ---------------------------------------------- |
| emitterId | number | The emitter ID                                 |
| windX     | number | Wind speed along the X axis in units per frame |
| windZ     | number | Wind speed along the Z axis in units per frame |

## Details

Sets the global particle wind direction and speed. See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for more information.

## Example

```lua
ParticlesSetWindVector(0.1, 0.1)
```
