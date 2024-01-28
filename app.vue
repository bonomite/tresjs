<script setup>
const sphereRef = ref(null)
const { onLoop } = useRenderLoop()

onLoop(({ elapsed }) => {
  const sphere = sphereRef.value
  // if (sphere) {
  //   sphere.rotation.x += 0.01
  //   sphere.rotation.y += 0.01
  //   sphere.position.y = Math.sin(elapsed)
  // }
})

onMounted(async () => {
  await nextTick()
  useGsap.to(sphereRef.value.position, {
    y: 1,
    duration: 1,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
  })
})
</script>

<template>
  <ClientOnly>
    <TresCanvas window-size clear-color="black">
      <TresPerspectiveCamera />
      <OrbitControls />
      <TresMesh ref="sphereRef">
        <TresSphereGeometry />
        <TresMeshNormalMaterial />
      </TresMesh>
      <TresGridHelper />
    </TresCanvas>
  </ClientOnly>
</template>
