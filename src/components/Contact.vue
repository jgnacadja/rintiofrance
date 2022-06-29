<template>
  <div class="w-full px-4 justify-evenly md:px-0 md:text-left" id="formulaire">
    <div class="
        md:grid
        gap-2
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-2
        lg:grid-flow-row
        xl:grid-flow-rows
      ">
      <div class="
          col-span-2
          sm:col-span-1
          md:col-span-1
          lg:row-span-1
          xl:col-span-1
          xl:row-span-1
        ">
        <div class="sm:px-8 lg:px-10">
          <div>
            <div class="mx-auto">
              <div class="max-w-lg mx-auto my-10">
                <div class="pt-6 mx-4 md:mx-0" id="contactez_nous">
                  <h3 class="my-3 text-sm font-semibold uppercase text-primary">
                    Contactez-nous
                  </h3>
                  <!-- Title Dot -->
                  <div class="-mt-3">
                    <span class="inline-block w-20 h-2 rounded-full bg-secondary"></span>
                    <span class="
                        inline-block
                        w-2
                        h-2
                        ml-2
                        rounded-full
                        bg-secondary
                      "></span>
                    <span class="
                        inline-block
                        w-2
                        h-2
                        ml-2
                        rounded-full
                        bg-secondary
                      "></span>
                  </div>
                </div>

                <div class="pt-6 mx-4 md:mx-0">
                  <h2 class="
                      my-3
                      text-2xl
                      font-extrabold
                      md:text-5xl
                      text-primary
                    ">
                    Besoin d'échanger sur
                    <span class="text-secondary">votre besoin ?</span>
                  </h2>

                  Toutes nos équipe en france se tiennent a votre disposition
                </div>

                <div>
                  <div class="flex items-center p-4">
                    <div class="w-2/12 text-center">
                      <button class="
                          flex
                          items-center
                          w-12
                          h-12
                          p-3
                          uppercase
                          rounded-full
                          pointer-events-none
                          bg-secondary
                          max-w-max
                          bg-opacity-10
                        ">
                        <Phone />
                      </button>
                    </div>
                    <div class="w-10/12 px-4 md:px-0">
                      <div>
                        <a class="hover:text-secondary" href="tel:+33 6 25 18 40 11">+33 6 27 54 50 21</a>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center p-4">
                    <div class="w-2/12 text-center">
                      <button class="
                          flex
                          items-center
                          w-12
                          h-12
                          p-3
                          uppercase
                          rounded-full
                          pointer-events-none
                          bg-secondary
                          text-secondary
                          max-w-max
                          bg-opacity-10
                        ">
                        <Mail />
                      </button>
                    </div>
                    <div class="w-10/12 px-4 md:px-0">
                      <div>
                        <a class="hover:text-secondary" href="mailto:contact@rintio.fr">Contact@rintio.fr</a>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center p-4">
                    <div class="w-2/12 text-center">
                      <button class="
                          flex
                          items-center
                          w-12
                          h-12
                          p-3
                          uppercase
                          rounded-full
                          pointer-events-none
                          bg-secondary
                          text-secondary
                          max-w-max
                          bg-opacity-10
                        ">
                        <location />
                      </button>
                    </div>
                    <div class="w-10/12 px-4 md:px-0">
                      <div>
                        <a class="hover:text-secondary" href="#"> 17 rue Crevel duval Ruel malmaison </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="
          col-span-2
          md:col-span-1
          lg:row-span-1
          xl:col-span-1
          xl:row-span-1
          bg-sky-800
        ">
        <div class="sm:px-8 lg:px-5">
          <!-- Contact Form -->
          <div class="items-center">
            <div class="mx-auto">
              <div class="
                  max-w-lg
                  min-h-0
                  p-5
                  mx-auto
                  my-10
                  bg-white
                  rounded-sm
                  shadow-md
                  md:shadow-xl
                ">
                <div class="mx-4 md:m-7">
                  <h2 class="my-3 text-lg font-semibold text-gray-700 md:text-3xl">
                    Envoyer nous un message
                  </h2>
                </div>
                <div class="mx-4 md:m-7">
                  <form id="form" name="form" @submit.prevent="sendEmail">
                    <div class="mb-6">
                      <input id="name" class="
                          w-full
                          px-3
                          py-2
                          placeholder-gray-300
                          border border-gray-300
                          rounded-sm
                          focus:outline-none
                          focus:ring focus:ring-indigo-100
                          focus:border-indigo-300
                        " type="text" name="name" placeholder="Nom complet" required v-model="name" />
                    </div>
                    <div class="mb-6">
                      <input id="email" class="
                          w-full
                          px-3
                          py-2
                          placeholder-gray-300
                          border border-gray-300
                          rounded-sm
                          focus:outline-none
                          focus:ring focus:ring-indigo-100
                          focus:border-indigo-300
                        " type="email" name="email" placeholder="Email" required v-model="email" />
                    </div>
                    <div class="mb-6">
                      <input id="object" class="
                          w-full
                          px-3
                          py-2
                          placeholder-gray-300
                          border border-gray-300
                          rounded-sm
                          focus:outline-none
                          focus:ring focus:ring-indigo-100
                          focus:border-indigo-300
                        " type="text" name="object" placeholder="Objet" required v-model="object" />
                    </div>
                    <div class="mb-6">
                      <textarea id="message" class="
                          w-full
                          px-3
                          py-2
                          placeholder-gray-300
                          border border-gray-300
                          rounded-sm
                          focus:outline-none
                          focus:ring focus:ring-indigo-100
                          focus:border-indigo-300
                        " rows="5" name="message" placeholder="Message" required v-model="message"></textarea>
                    </div>
                    <div class="mb-6 md:flex md:justify-center captcha-container">
                      <vue-hcaptcha :sitekey="siteKey" @verify="onVerify" @expired="onExpire"
                        @challenge-expired="onChallengeExpire" @error="onError">
                      </vue-hcaptcha>
                    </div>
                    <div class="mb-6">
                      <button class="
                          w-full
                          px-3
                          py-2
                          text-base text-white
                          rounded-sm
                          md:py-4
                          md:text-xl
                          bg-secondary
                          focus:bg-secondary
                          focus:outline-none
                        " type="submit">
                        Envoyer
                      </button>
                    </div>
                    <p v-if="result" class="text-base text-center" id="result" :class="color">
                      {{ result }}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Phone from "~/assets/images/icons/phone.svg";
import Mail from "~/assets/images/icons/envelope.svg";
import location from "~/assets/images/icons/location.svg";
import emailjs from "emailjs-com";

import VueHcaptcha from '@hcaptcha/vue-hcaptcha'

export default {
  components: {
    Phone,
    Mail,
    location,
    VueHcaptcha,
  },
  data() {
    return {
      name: null,
      email: null,
      object: null,
      message: null,
      result: null,
      color: null,
      captchaVerified: false,
      siteKey: process.env.GRIDSOME_HCAPTCHA,
      serviceId: process.env.GRIDSOME_EMAILJS_SERVICE_ID,
      templateId: process.env.GRIDSOME_EMAILJS_TEMPLATE_ID,
      eUserId: process.env.GRIDSOME_EMAILJS_USER_ID
    };
  },
  methods: {
    onVerify() {
      this.captchaVerified = true;
    },
    onExpire() {
      this.captchaVerified = false;
    },
    onChallengeExpire() {
      this.captchaVerified = false;
    },
    onError() {
      this.captchaVerified = false;
    },
    sendEmail(e) {
      let $this = this;
      $this.result = null;
      $this.color = null;

      if (this.captchaVerified) {

        emailjs
          .sendForm(
            this.serviceId,
            this.templateId,
            e.target,
            this.eUserId
          )
          .then(
            () => {
              $this.result = "Votre message a été envoyé";
              $this.color = "text-green-500";
              // Reset form field
              $this.resetForm();
            },
            () => {
              $this.result = "Une erreur est survenue, veuillez réessayer";
              $this.color = "text-red-500";
            }
          );

        this.captchaVerified = false;
      }
      else {
        $this.result = "Le captcha doit être coché..";
        $this.color = "text-red-500";
      }
    },
    resetForm() {
      this.name = null;
      this.email = null;
      this.object = null;
      this.message = null;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 377px) {
  .captcha-container {
    max-width: 150px;
    overflow: hidden;
  }
}
</style>