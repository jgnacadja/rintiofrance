<template>
  <div class="self-center">
    <div class="lg:hidden">
          <div
            class="text-center"
          >
            <div class="h-full pt-2 mx-2">
              <g-link to="/postuler">
                <button type="submit" class="font-bold rounded my-auto p-4 text-white text-sm bg-secondary rounded-sm hover:bg-primary focus:outline-none uppercase">
                Je postule
              </button>
              </g-link>
            </div>
          </div>
    </div>

    <nav class="hidden h-24 px-10 lg:flex">

      <div
        class="text-center"
      >
        <div class="h-full pt-6 mx-2">
          <g-link to="/postuler">
            <button type="submit" class="font-bold my-auto p-4 text-white rounded text-sm bg-secondary rounded-sm hover:bg-primary focus:outline-none uppercase">
            Je postule
          </button>
          </g-link>
        </div>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    //require our external library and load it in window
    // eslint-disable-next-line no-undef
    window.$ = require("jquery");
    this.setActive(this.$router.currentRoute.path);
  },
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    setActive: function (route) {
      switch (route) {
        case "/":
          // eslint-disable-next-line no-undef
          $(".currentColorHome").addClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorAbout").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $("#offer").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorBlog").removeClass("border-secondary text-secondary");

          break;
        case "/a-propos":
          // eslint-disable-next-line no-undef
          $(".currentColorHome").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorAbout").addClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorOffer").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorBlog").removeClass("border-secondary text-secondary");

          break;
        case "/offres":
          // eslint-disable-next-line no-undef
          $(".currentColorHome").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorAbout").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorOffer").addClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorBlog").removeClass("border-secondary text-secondary");

          break;
        case "/blog":
          // eslint-disable-next-line no-undef
          $(".currentColorHome").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorAbout").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorOffer").removeClass("border-secondary text-secondary");
          // eslint-disable-next-line no-undef
          $(".currentColorBlog").addClass("border-secondary text-secondary");
          
          break;
      }
    },
  },
};
</script>
