<template>
  <div>
    <Sources />
  </div>
</template>

<script>
import Sources from "@/components/Sources";
export default {
  name: "Sources",
  components: {
    Sources
  },
  props: {
    msg: String,
  },
};
</script>
