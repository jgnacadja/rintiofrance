<template>
  <CustomLayout>
    <div class="postuler my-9">
      <h1 class="text-center">Je postule</h1>
      <div class="md:flex md:content-center md:justify-center md:items-center">
        <form name="form" class="md:max-w-[50%] md:px-2" @submit.prevent="sendEmail">
          <h3 class="text-red-600">Identité</h3>
          <div class="md:flex md:justify-between md:space-x-8 my-3">
            <div class="px-2 mb-3">
              <input required type="text" class="
                  w-full
                  md:w-80
                  border-2
                  px-3
                  py-1
                  border-zinc-700
                  rounded
                " name="nom" placeholder="Nom *" v-model="nom" />
            </div>
            <div class="px-2 mb-3">
              <input required type="text" class="
                  w-full
                  md:w-80
                  border-2
                  px-3
                  py-1
                  border-zinc-700
                  rounded
                " name="tel" placeholder="Téléphone mobile" v-model="tel" />
            </div>
          </div>
          <div class="md:flex md:justify-between md:space-x-8 my-3">
            <div class="px-2 mb-3">
              <input required type="text" class="
                  w-full
                  md:w-80
                  border-2
                  px-3
                  py-1
                  border-zinc-700
                  rounded
                " v-model="prenoms" name="prenoms" placeholder="Prénoms *" />
            </div>
            <div class="px-2 mb-3">
              <input type="url" class="
                  w-full
                  md:w-80
                  border-2
                  px-3
                  py-1
                  border-zinc-700
                  rounded
                " name="link" v-model="linkedIn" placeholder="Lien LinkedIn, Viadeo" />
            </div>
          </div>
          <div class="md:flex md:justify-between md:space-x-8 my-3">
            <div class="px-2 mb-3">
              <input required type="email" class="
                  w-full
                  md:w-80
                  border-2
                  px-3
                  py-1
                  border-zinc-700
                  rounded
                " name="email" v-model="email" placeholder="Adresse email *" />
            </div>
            <div class="px-2 mb-3">
              <input type="url" class="
                  w-full
                  md:w-80
                  border-2
                  px-3
                  py-1
                  border-zinc-700
                  rounded
                " name="link2" v-model="link" placeholder="http://" />
            </div>
          </div>

          <h3 class="text-red-600 mt-16">Poste recherché</h3>
          <div class="md:flex md:justify-between md:space-x-8 my-3">
            <div class="px-2 mb-3">
              <label for="metier" class="block">Métier</label>
              <input required type="text" id="metier" class="
                  w-full
                  md:w-80
                  border-2
                  px-3
                  py-1
                  border-zinc-700
                  rounded
                " name="metier" v-model="metier" placeholder="ex: Développeur Java" />
            </div>
            <div class="px-2 mb-3">
              <label for="ddispo" class="block">Date de disponibilité</label>
              <input required type="date" class="
                  w-full
                  md:w-80
                  border-2
                  px-3
                  py-1
                  border-zinc-700
                  rounded
                " name="datedisponibilité" v-model="dateDispo" placeholder="" id="ddispo" />
            </div>
          </div>
          <div class="md:flex md:justify-between md:space-x-8 my-3">
            <div class="px-2 mb-3">
              <label for="cv" class="block">Déposer votre CV</label>
              <input required id="cv" type="file" accept=".pdf,.docx" class="
                  w-full
                  md:w-80
                  border-2
                  px-3
                  py-1
                  border-zinc-700
                  rounded
                " />
            </div>
            <div class="px-2 mb-3">
              <label for="ltmt" class="block">Lettre de motivation</label>
              <input required type="file" id="ltmt" accept=".pdf,.docx" class="
                  w-full
                  md:w-80
                  border-2
                  px-3
                  py-1
                  border-zinc-700
                  rounded
                " />
            </div>
          </div>

          <div class="my-3 mt-12 px-2">
            <label for="p" class="block">Comment avez vous entendu parler de nous ?</label>
            <textarea name="cmtEntP" v-model="entenduParler" id="p" cols="30" rows="10"
              class="w-full border-2 px-3 py-1 border-zinc-700 rounded" required>
            </textarea>
          </div>

          <div class="my-2">
            <vue-hcaptcha :sitekey="siteKey" @verify="onVerify" @expired="onExpire"
              @challenge-expired="onChallengeExpire" @error="onError">
            </vue-hcaptcha>
          </div>
          <div class="submit">
            <input type="submit" value="Envoyer" class="py-2 px-5 rounded bg-red-500 text-white" />
          </div>
          <p class="text-base text-center" id="result" :class="color" v-if="result">
            {{ result }}
          </p>
        </form>
      </div>
    </div>
  </CustomLayout>
</template>

<script>
import VueHcaptcha from "@hcaptcha/vue-hcaptcha";
import emailjs from "emailjs-com";
import CustomLayout from "~/layouts/Custom.vue";

export default {
  metaInfo() {
    return {
      title: "Postuler",
    };
  },
  data() {
    return {
      nom: null,
      prenoms: null,
      tel: null,
      email: null,
      linkedIn: null,
      link: null,
      metier: null,
      dateDispo: null,
      entenduParler: null,
      cv: null,
      lettreMotivation: null,
      result: null,
      color: null,
      captchaVerified: false,
      siteKey: process.env.GRIDSOME_HCAPTCHA,
      serviceId: process.env.GRIDSOME_EMAILJS_RECRUIT_TEMPLATE_ID,
      templateId: process.env.GRIDSOME_EMAILJS_RECRUIT_TEMPLATE_ID,
      eUserId: process.env.GRIDSOME_EMAILJS_USER_ID
    };
  },
  components: {
    VueHcaptcha,
    CustomLayout
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
      this.result = null;
      this.color = null;

      // Récupération des fichiers du formulaire
      this.cv = document.getElementById("cv").value;
      this.lettreMotivation = document.getElementById("ltmt").value;

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
              this.result = "Votre message a été envoyé";
              this.color = "text-green-500";
              // Reset form field
              this.resetForm();
            },
            () => {
              this.result = "Une erreur est survenue, veuillez réessayer";
              this.color = "text-red-500";
            }
          );

        this.captchaVerified = false;
      } else {
        this.result = "Le captcha doit être coché..";
        this.color = "text-red-500";
      }
    },
    resetForm() {
      this.nom = null;
      this.prenoms = null;
      this.tel = null;
      this.entenduParler = null;
    },
  },
};
</script>

<style scoped>
</style>