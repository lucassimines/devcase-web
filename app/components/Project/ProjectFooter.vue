<template>
  <Container tag="footer" :ui="{ inner: 'py-section' }">
    <Button
      :to="{ name: 'projects' }"
      :text="$t('projects.label')"
      variant="link"
      icon-left="lucide:arrow-left"
    />
  </Container>
</template>

<script setup lang="ts"></script>
