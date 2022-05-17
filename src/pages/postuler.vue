<template>
    <Layout>
        <div class="postuler my-9">
            <h1 class="text-center">Je postule</h1>
            <div class="md:flex md:content-center md:justify-center md:items-center">  
                <form action="#" class="md:max-w-[50%] md:px-2 ">
                    <h3 class="text-red-600">Identité</h3>
                    <div class="md:flex md:justify-between md:space-x-8 my-3"> 
                            <div class="px-2 mb-3"> 
                                <input type="text" class="w-full md:w-80 border-2 px-3 py-1 border-zinc-700 rounded" name="nom" placeholder="Nom *">
                            </div>
                            <div class="px-2 mb-3"> 
                                <input type="text" class="w-full md:w-80 border-2 px-3 py-1 border-zinc-700 rounded" name="tel" placeholder="Téléphone mobile">
                            </div> 
                    </div>
                    <div class="md:flex md:justify-between md:space-x-8 my-3"> 
                            <div class="px-2 mb-3"> 
                                <input type="text" class="w-full md:w-80 border-2 px-3 py-1 border-zinc-700 rounded" name="prenoms" placeholder="Prénoms *">
                            </div>
                            <div class="px-2 mb-3"> 
                                <input type="url" class="w-full md:w-80 border-2 px-3 py-1 border-zinc-700 rounded" name="link" placeholder="Lien LinkedIn, Viadeo">
                            </div> 
                    </div>
                    <div class="md:flex md:justify-between md:space-x-8 my-3"> 
                            <div class="px-2 mb-3"> 
                                <input type="email" class="w-full md:w-80 border-2 px-3 py-1 border-zinc-700 rounded" name="email" placeholder="Adresse email *">
                            </div>
                            <div class="px-2 mb-3"> 
                                <input type="url" class="w-full md:w-80 border-2 px-3 py-1 border-zinc-700 rounded" name="link2" placeholder="http://">
                            </div> 
                    </div>

                    <h3 class="text-red-600 mt-16">Poste recherché</h3>
                    <div class=" md:flex md:justify-between md:space-x-8 my-3"> 
                            <div class="px-2 mb-3"> 
                                <label for="metier" class="block">Métier</label>
                                <input type="text" id="metier" class="w-full md:w-80 border-2 px-3 py-1 border-zinc-700 rounded" name="metier" placeholder="ex: Développeur Java">
                            </div>
                            <div class="px-2 mb-3"> 
                                <label for="ddispo" class="block">Date de disponibilité</label>
                                <input type="date" class="w-full md:w-80 border-2 px-3 py-1 border-zinc-700 rounded" name="datedisponibilité" placeholder="" id="ddispo">
                            </div> 
                    </div>
                    <div class=" md:flex md:justify-between md:space-x-8 my-3"> 
                            <div class="px-2 mb-3"> 
                                <label for="cv" class="block">Déposer votre CV</label>
                                <input type="file" class="w-full md:w-80 border-2 px-3 py-1 border-zinc-700 rounded" name="prenoms" placeholder="Prénoms *">
                            </div>
                            <div class="px-2 mb-3"> 
                                <label for="ltmt" class="block">Lettre de motivation</label>
                                <input type="file" id="ltmt" class="w-full md:w-80 border-2 px-3 py-1 border-zinc-700 rounded" name="link" placeholder="Lien LinkedIn, Viadeo">
                            </div> 
                    </div> 

                    <div class=" my-3 mt-12 px-2"> 
                            <label for="p" class="block">Comment avez vous entendu parler de nous ?</label>
                            <textarea name="cmtEntP" id="p" cols="30" rows="10" class="w-full border-2 px-3 py-1 border-zinc-700 rounded">
                            </textarea>
                    </div>

                    <div class="my-2">
                        <vue-hcaptcha :sitekey="siteKey" @verify="onVerify"
                                      @expired="onExpire"
                                      @challenge-expired="onChallengeExpire"
                                      @error="onError">
                        </vue-hcaptcha> 
                    </div>
                    <div class="submit">
                        <input type="submit" value="Envoyer" class="py-2 px-5 rounded bg-red-500 text-white">
                    </div>

                </form>
                </div>
            </div> 
    </Layout>
</template>

<script> 
    import VueHcaptcha from '@hcaptcha/vue-hcaptcha'
    export default
    { 
        metaInfo()
        {
            return { 
                title: "Postuler"
            }
        },
        data() {
            return {
                captchaVerified: false,
                siteKey: process.env.GRIDSOME_HCAPTCHA
            }
        },
        components:
        {
            VueHcaptcha,
        },
        methods:
        {
            onVerify: () => {
                        this.captchaVerified = true
                    },
            onExpire: () => {
                            console.log('Token expired')
                        },
            onChallengeExpire: () => {
                            console.log('Challenge expired')
                        },
            onError: (err) => {
                            console.log('Error', err)
                        },
        }
    }
</script>

<style scoped>

</style>