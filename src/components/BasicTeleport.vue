<template>
  <DesignContainer>
    <DesignPanel color="green" text="Source">
      <p>
        The content below this paragraph is rendered in the right/bottom (red)
        container by PortalVue
      </p>
      <teleport to="#right-basic">
        <p class="red">
          This is content from the left/top container (green). The cool part is,
          it works across components, so you can send your content anywhere!
        </p>
      </teleport>
    </DesignPanel>
    <DesignPanel color="red" text="Target" left>
      <div id="right-basic"></div>
    </DesignPanel>
  </DesignContainer>
</template>

<script>
import DesignContainer from './DesignContainer'
import DesignPanel from './DesignPanel'

export default {
  components: {
    DesignContainer,
    DesignPanel
  }
}
</script>
