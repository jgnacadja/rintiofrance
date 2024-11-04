<template>
  <div class="w-full px-4 justify-evenly md:px-0 md:text-left" id="formulaire">
    <div
      class="md:grid gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:grid-flow-row xl:grid-flow-rows"
    >
      <div
        class="col-span-2 sm:col-span-1 md:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1"
      >
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
                    <span
                      class="inline-block w-20 h-2 rounded-full bg-secondary"
                    ></span>
                    <span
                      class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
                    ></span>
                    <span
                      class="inline-block w-2 h-2 ml-2 rounded-full bg-secondary"
                    ></span>
                  </div>
                </div>

                <div class="pt-6 pb-8 mx-4 md:mx-0">
                  <h2
                    class="my-3 text-2xl font-extrabold md:text-5xl text-primary"
                  >
                    Echangeons sur
                    <span class="text-secondary">votre besoin ?</span>
                  </h2>
                  <!-- <h4 class="text-primary"><a href="https://calendly.com/michel-idjinou/30min" target="_blank">Cliquez ici pour echanger avec nos experts</a> </h4> -->

                  Nous sommes là pour répondre à toutes vos questions. Il vous
                  suffit de remplir le
                  <g-link to="/#forms" class="font-extrabold text-primary"
                    >formulaire suivant</g-link
                  >, bien préciser votre demande et de cliquer sur «Envoyer».
                  Nous vous répondrons dans les plus brefs délais !
                </div>
                <!-- Booking calendar-->
                <div class="flex items-center p-4">
                  <div class="w-10/12 text-center">
                    <a href="https://calendly.com/michel-idjinou/30min">
                      <button
                        class="w-full py-2 bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white px-4 border border-secondary hover:border-transparent rounded"
                        type="button"
                      >
                        Vous pouvez aussi prendre rendez-vous pour échanger avec
                        nos experts en cliquant ici
                      </button></a
                    >
                  </div>
                </div>

                <div
                  class="grid grid-cols-4 md:grid-cols-6 grid-flow-col p-4 items-center"
                  v-for="contact in contactInfos"
                  :key="contact.text"
                >
                  <div class="col-span-1">
                    <div
                      class="flex items-center p-3 uppercase rounded-full pointer-events-none bg-secondary text-secondary max-w-max bg-opacity-10"
                    >
                      <component :is="contact.icon" class="h-6 w-6" />
                    </div>
                  </div>
                  <div class="col-span-3 md:col-span-4">
                    <a
                      v-if="contact.link"
                      class="hover:text-secondary"
                      :href="contact.link"
                      target="_blank"
                      >{{ contact.text }}</a
                    >
                    <span v-else>{{ contact.text }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-span-2 md:col-span-1 lg:row-span-1 xl:col-span-1 xl:row-span-1 bg-sky-800"
      >
        <div class="sm:px-8 lg:px-5">
          <!-- Contact Form -->
          <div class="items-center">
            <div class="mx-auto">
              <div
                class="max-w-lg min-h-0 p-5 mx-auto my-10 bg-white rounded-sm shadow-md md:shadow-xl"
              >
                <div class="mx-4 md:m-7" id="forms">
                  <h2
                    class="my-3 text-lg font-semibold text-gray-700 md:text-3xl"
                  >
                    Envoyer nous un message
                  </h2>
                </div>
                <div class="mx-4 md:m-7">
                  <form
                    id="form"
                    name="form"
                    class="space-y-4"
                    @submit.prevent="sendEmail"
                  >
                    <input
                      id="email"
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      v-model="email"
                    />

                    <input
                      id="phone"
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      type="text"
                      name="phone"
                      placeholder="06 12 34 56 78"
                      v-model="phone"
                    />

                    <input
                      id="company"
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      type="text"
                      name="company"
                      placeholder="Votre societe"
                      required
                      v-model="company"
                    />

                    <input
                      id="name"
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      type="text"
                      name="name"
                      placeholder="Nom complet"
                      required
                      v-model="name"
                    />

                    <input
                      id="object"
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      type="text"
                      name="object"
                      placeholder="Objet"
                      required
                      v-model="object"
                    />

                    <textarea
                      id="message"
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                      rows="5"
                      name="message"
                      placeholder="Message"
                      required
                      v-model="message"
                    ></textarea>

                    <div
                      class="mb-6 md:flex md:justify-center captcha-container"
                    >
                      <vue-hcaptcha
                        :sitekey="siteKey"
                        @verify="onVerify"
                        @expired="onExpire"
                        @challenge-expired="onChallengeExpire"
                        @error="onError"
                      >
                      </vue-hcaptcha>
                    </div>

                    <button
                      class="w-full px-3 py-2 text-base text-white rounded-sm md:py-4 md:text-xl bg-secondary focus:bg-secondary focus:outline-none"
                      type="submit"
                    >
                      Envoyer
                    </button>

                    <p
                      v-if="message"
                      class="text-base text-center"
                      id="message"
                      :class="color"
                    >
                      {{ message }}
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
import Location from "~/assets/images/icons/location.svg";
import Linkedin from "~/assets/images/icons/linkedin.svg";
import emailjs from "emailjs-com";

import VueHcaptcha from "@hcaptcha/vue-hcaptcha";

export default {
  components: {
    Phone,
    Mail,
    Location,
    Linkedin,
    VueHcaptcha,
  },
  data() {
    return {
      name: null,
      email: null,
      object: null,
      phone: null,
      company: null,
      message: null,
      color: null,
      captchaVerified: false,
      siteKey: process.env.GRIDSOME_HCAPTCHA,
      serviceId: process.env.GRIDSOME_EMAILJS_SERVICE_ID,
      templateId: process.env.GRIDSOME_EMAILJS_TEMPLATE_ID,
      eUserId: process.env.GRIDSOME_EMAILJS_USER_ID,
      contactInfos: [
        {
          text: "+33 6 25 18 40 11",
          icon: Phone,
          link: "tel:+33 6 25 18 40 11",
        },
        {
          text: "contact@rintio.fr",
          icon: Mail,
          link: "mailto:contact@rintio.fr",
        },
        {
          text: "LinkedIn",
          icon: Linkedin,
          link: "https://www.linkedin.com/company/rintio-france",
        },
        {
          text: "3 Rue du Commandant Louis Guy, 92500 RUEIL-MALMAISON",
          icon: Location,
        },
      ],
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
      $this.message = null;
      $this.color = null;

      if (this.captchaVerified) {
        emailjs
          .sendForm(this.serviceId, this.templateId, e.target, this.eUserId)
          .then(
            () => {
              $this.message = "Votre message a été envoyé";
              $this.color = "text-green-500";
              // Reset form field
              $this.resetForm();
            },
            () => {
              $this.message = "Une erreur est survenue, veuillez réessayer";
              $this.color = "text-red-500";
            }
          );

        this.captchaVerified = false;
      } else {
        $this.message = "Le captcha doit être coché..";
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
