---
tags:
  - StopParticleEmitter(e)
  - Stop
  - Particle
  - Emitter
---

# StopParticleEmitter(e)

| Parameter | Type   | Description   |
| --------- | ------ | ------------- |
| e         | number | The entity ID |

## Details

Disables the particle emitter for the specified entity (only works with emitters created with [StartParticleEmitter](./StartParticleEmitter.md)).

::: danger OBSOLETE
This function is obsolete since it relies on hardcoded particle settings. See [ParticlesGetFreeEmitter](./ParticlesGetFreeEmitter.md) and [ParticlesAddEmitterEx](./ParticlesAddEmitterEx.md) for better control of particles.
:::

## Example

```lua
StopParticleEmitter(e)
```
