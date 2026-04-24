<template>
  <div
    class="absolute inset-0 z-0 opacity-20"
    :style="{
      backgroundImage: `
        linear-gradient(to right, #fff 1px, transparent 1px),
        linear-gradient(to bottom, #fff 1px, transparent 1px)
      `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 0 0',
      maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
           radial-gradient(ellipse 80% 80% at 100% 100%, #000 20%, transparent 90%)
      `,
      WebkitMaskImage: `
                   repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
           radial-gradient(ellipse 80% 80% at 100% 100%, #000 20%, transparent 90%)
      `,
      maskComposite: 'intersect',
      WebkitMaskComposite: 'source-in'
    }"
  />
</template>
