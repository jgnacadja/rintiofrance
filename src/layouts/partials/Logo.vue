<template>
  <div class="logo ">
    <g-link to="/" >
      <Logo class="w-44" alt="Rintio.com" title="Rintio" />
    </g-link>
  </div>
</template>

<script>
import Logo from "~/assets/images/rintio-logo.svg";
export default {
  components: {
    Logo,
  },
};
</script>