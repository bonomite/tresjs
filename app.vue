<template>
  <TresCanvas window-size clear-color="black">
    <TresPerspectiveCamera />
    <OrbitControls />
    <TresMesh>
      <TresSphereGeometry />
      <TresMeshNormalMaterial />
    </TresMesh>
    <TresGridHelper />
  </TresCanvas>
</template>
