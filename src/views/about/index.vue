<template>
  <div>
    <p>{{ $t('api.setupSuccess') }}</p>
    <p>{{ ss }}</p>
  </div>
</template>

<script setup lang="ts" name="About">
import { useI18n } from 'vue-i18n'
const { t }: any = useI18n()

const ss = t('api.setupSuccess')

</script>